import React,{ useState, useEffect }  from 'react';
import { getDatabase, ref, onValue, set as firebaseSet, remove } from 'firebase/database';
import { getAuth } from "firebase/auth";


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
              <img src={foodObj.image} className="card-img pb-3" alt="example" />
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
  const [filteredData, setFilteredData] = useState([]); 

  // Current user Info
  let userEmail = "";
  const auth = getAuth();
  const user = auth.currentUser;
  if(user) {
      userEmail = user.email;
  }

  // Filter by email 
  // const filtered = data.filter(item => item.claimedBy === userEmail);
  // setFilteredData(filtered);

  // ---------FIREBASE----------//
  useEffect(() => {
    const db = getDatabase();
    const foodRef = ref(db, "claimed");

    // Listen for changes in the data
    const unsubscribe = onValue(foodRef, function(snapshot) {
      const allDataObj = snapshot.val()??{};

    // Data w keys
      const keyArray = Object.keys(allDataObj);
      const allDataArr = keyArray.map((keyString) => {
        const dataObj = allDataObj[keyString];
        dataObj.firebasekey = keyString;
        return dataObj; 
      });

    // Update state with the new data
    const filtered = allDataArr.filter(item => item.claimedBy === userEmail);
    setData(allDataArr);
    setFilteredData(filtered);
    });

    // Cleanup the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  let returnText = "";
  if(userEmail == "") {
    returnText = "Log in to access this feature!";
  }
  else {
    returnText = "You have not claimed any items yet!";
  }

    return ( 
    <div> 
      {filteredData.length > 0 ? 
        (<div className="row">
              {filteredData.map((item) => (
                  <ItemCard key={item.firebasekey} foodData={item}/> 
          ))}
          </div>)
        : 
        returnText
      } 
      </div>
    );
}

export { Claim } ;