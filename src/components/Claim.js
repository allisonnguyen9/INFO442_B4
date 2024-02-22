import React,{ useState, useEffect }  from 'react';
import { getDatabase, ref, onValue, set as firebaseSet, remove } from 'firebase/database';


function ItemCard(props) {
  let foodObj = props.foodData;

  return (
    <div className="d-flex col col-md-5 col-xl-3">
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <h2 className="card-title"> Claimed by {foodObj.claimedBy} </h2>
            <div className="col col-sm-auto col-xl-12">
              {/* UPDATE IMAGE AFTER UPLOAD IMPLEMENTED */}
              <img src="img/salmon_fillets.jpg" className="card-img pb-3" alt="example" />
            </div>
            <div className="col-sm">
              <h2 className="card-title">{foodObj.name}</h2>
              <h3 className="text-muted">{foodObj.description}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

function Claim (props) {
  // States
  const [data, setData] = useState([]);

  // ---------FIREBASE----------//
  useEffect(() => {
    const db = getDatabase();
    const foodRef = ref(db, "claimed");

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
                  <ItemCard foodData={item}/> 
          ))}
          </div>)
        : 
        <p> There are no items available! </p>
      }
    </div>
    );
}

export { Claim } ;