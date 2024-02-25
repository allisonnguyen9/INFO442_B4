import React,{ useState, useEffect } from 'react';
import { getDatabase, ref, onValue, set as firebaseSet, remove } from 'firebase/database';
import { getAuth } from "firebase/auth";


function ItemCard(props) {
  // States
  const[showNotification, setShowNotification] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
    setShowNotification(true);
};

  // Pop up handle
  const handleNotificationClick = () => {
    setIsVisible(true); }

  const handleDontConfirm = () => {
    setShowNotification(false)
  }

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
              <button onClick={handleClaimClick} className="btn btn-dark blue-btn">Claim It!</button>

              {showNotification == true ?
                <div className="notification-overlay" > 
                  <div className="notification">
                    <p>Item claimed successfully!</p>
                    <p>Please coordinate pick up with {foodObj.contact}</p>
                  </div>
                  <button className='btn btn-dark blue-btn' onClick={handleNotificationClick}>
                    {isVisible == true ? 
                      props.onClaimClick(foodObj.name, foodObj.description, foodObj.quantity, foodObj.location, foodObj.category, foodObj.contact, foodObj.firebasekey, userEmail) 
                      :
                      <p></p>
                    }
                    Confirm
                  </button>
                  <button className='btn btn-dark blue-btn' onClick={handleDontConfirm}>
                    Nvm
                  </button>
                </div> 
              :
              <p></p>
              }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function ItemList(props) {
  // States
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); 
  const [selected, setSelected] = useState('');

  // Change data after filter handler 
  const handleFilterChange = (selectedValue) => {
    if (selectedValue === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => item.category === selectedValue);
      setFilteredData(filtered);
    }
  };

  // Get filter category handler
  function handleSelected(e) {
    const selectedValue = e.target.value;
    setSelected(selectedValue);
    handleFilterChange(selectedValue);
  }

  // Clear filter handler
  function clear() {
    setSelected('');
    handleFilterChange('');
  }

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
      setFilteredData(allDataArr);
    });

    // Cleanup the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

    return ( 
    <div> 
      
      <div className="filter-category">
        <label htmlFor="filtercategory">Filter Food Category</label>
        <select
          id="filtercategory"
          name="filtercategory"
          value={selected}
          onChange={handleSelected}>
          <option value="" disabled>
            Select condition
          </option>
          <option value="Meat or Dairy">Meat or Dairy</option>
          <option value="Beverage">Beverage </option>
          <option value="Produce">Produce</option>
          <option value="Non-perishable">Non-perishable (canned, boxed, dried fruit)</option>
        </select>
        <button className="filter-button" onClick={ clear }>
          Clear Filters
        </button>
      </div>

      {filteredData.length > 0 ? 
        (<div className="row">
          {filteredData.map((item) => (
            <ItemCard foodData={item} key={item.firebasekey} onClaimClick={handleClaimClick}/> 
          ))}
        </div>)
        : 
        <p> There are no items available! </p>
      }
    </div>
    );
}

export default ItemList;