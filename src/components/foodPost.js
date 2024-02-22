import React,{ useState, useEffect } from 'react';
import { getDatabase, ref, onValue, set as firebaseSet, remove } from 'firebase/database';
import Notification from './Notification.js';
import { getAuth } from "firebase/auth";

function ItemCard(props) {
  // States
  const[showNotification, setShowNotification] = useState(false);

  // Current user Info
  let userEmail = "";
  const auth = getAuth();
  const user = auth.currentUser;
  if(user) {
      userEmail = user.email;
      //console.log("  Email: " + userEmail);
    }
    else {
      // console.log("not working")
      userEmail = "Unknown User"
    }

  let foodObj = props.foodData;

  // Claiming handler
  const handleClaimClick = () => {
    props.onClaimClick(foodObj.name, foodObj.description, foodObj.quantity, foodObj.location, foodObj.category, foodObj.contact, foodObj.firebasekey, userEmail)
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
              <h2 className="card-title">{foodObj.name}</h2>
              <h3 className="text-muted">{foodObj.description}</h3>
              <p className="card-text">{foodObj.quantity} | {foodObj.location}</p>
              <button onClick={handleClaimClick}
              // onClick={() => 
              //   props.onClaimClick(foodObj.name, foodObj.description, foodObj.quantity, foodObj.location, foodObj.category, foodObj.contact, foodObj.firebasekey)}
              className="btn btn-dark blue-btn">Claim It!</button>
            </div>
          </div>
        </div>
      </div>
      {showNotification && <Notification contactNum={foodObj.contact}/>}
    </div>
  );
}


function ItemList(props) {
  // States
  const [data, setData] = useState([]);

  // Claiming handler
  const handleClaimClick = (name, description, quantity, location, category, contact, key, claimedBy) => {

    // Firebase manipulation
    const newDataItem = { name, description, quantity, location, category, contact, claimedBy };
    const db = getDatabase();
    let urlText = encodeURIComponent(key);
    const foodRef = ref(db, `claimed/${urlText}`);
    firebaseSet(foodRef, newDataItem)
    .then(() => { console.log("Data updated successfully!");

    const foodRefRemove = ref(db,`active/${urlText}`);
    remove(foodRefRemove);
})
.catch((error) => console.error("Error updating data:", error));
};

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
    <div> 
      {data.length > 0 ? 
        (<div className="row">
              {data.map((item) => (
                  <ItemCard foodData={item} onClaimClick={handleClaimClick}/> 
          ))}
          </div>)
        : 
        <p> There are no items available! </p>
      }
    </div>
    );
}

export default ItemList;

