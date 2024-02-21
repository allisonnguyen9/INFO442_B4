import React,{ useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import Notification from './Notification.js';

function ItemCard(props) {
  const [showNotification, setShowNotification] = useState(false);

  const handleClaimClick = () => {
    setShowNotification(true);
  };

  return (
    <div className="d-flex col col-md-5 col-xl-3">
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col col-sm-auto col-xl-12">
              <img src="img/salmon_fillets.jpg" className="card-img pb-3" alt="example" />
            </div>
            <div className="col-sm">
              <h2 className="card-title">{props.foodData.name}</h2>
              <h3 className="text-muted">{props.foodData.description}</h3>
              <p className="card-text">{props.foodData.quantity} | {props.foodData.location}</p>
              <button onClick={handleClaimClick} className="btn btn-dark blue-btn">Claim It!</button>
            </div>
          </div>
        </div>
      </div>
      {showNotification && <Notification />}
    </div>
  );
}


function ItemList(props) {
  // States

  const [data, setData] = useState([]);

  // ---------FIREBASE----------//
  useEffect(() => {
    const db = getDatabase();
    const foodRef = ref(db, "active");

    // Listen for changes in the data
    const unsubscribe = onValue(foodRef, function(snapshot) {
      const allDataObj = snapshot.val();

    // Data w keys
      const keyArray = Object.keys(allDataObj);
      const allDataArr = keyArray.map((keyString) => {
        const dataObj = allDataObj[keyString];
        dataObj.firebasekey = keyString;
        console.log(keyString);
        return dataObj; 
      });

    // Update state with the new data
      setData(allDataArr);
    });


    // Cleanup the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

    return (
        <div className="row">
            {data.map((item) => (
                <ItemCard key={item.name} foodData={item} /> 
         ))}
        </div>
    );
}

export default ItemList;

