import React,{ useState, useEffect } from 'react';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush, remove } from 'firebase/database';
import { Footer } from './footer.js';

function AddListing(props) {

    // States
    const [isYes, setIsYes] = useState(true); 
    const [currName, setCurrName] = useState("");
    const [currDescr, setCurrDescr] = useState("");
    const [currQuant, setCurrQuant] = useState("");
    const [currLocation, setCurrLocation] = useState("");
    const [currCategory, setCurrCat] = useState("");
    //const [currImage, setCurrImage] = useState(null);
    
    // Write data into Firebase
    function writeData(path, name, descr, quant, location, category) { //imgURL 
        let dataPath = "";
        if(path == "claimed") {
            dataPath = "claimed/";
        }
        else {
            dataPath = "active/";
        }
        const db = getDatabase();
        firebasePush(ref(db, dataPath), {
            name: name, 
            description: descr,
            quantity: quant, 
            location: location, 
            category: category
            //img: imgURL //-- ADD IN LATER
        })
        .then(() => console.log("data saved successfully!"))
        .catch(err => console.log(err)) }; 

    //  ---------EVENT HANDLERS------------ //

    // Update states with new added food
    // Name
    const nameHandleClick = (event) => {
      const name = event.target.value;
      setCurrName(name);
    }

    // Description
    const descrHandleClick = (event) => {
        const descr = event.target.value;
        setCurrDescr(descr);
      }

    // Quantity
    const quantHandleClick = (event) => {
        const quant = event.target.value;
        setCurrQuant(quant);
      }
    
    // Location
    const locHandleClick = (event) => {
        const location = event.target.value;
        setCurrLocation(location);
    }

    // Category
    const catHandleClick = (event) => {
        const cat = event.target.value;
        setCurrCat(cat);
      }

    // Image
    // const imgHandleClick = (event) => {
    //     const img = event.target.value;
    //     setCurrImage(img);
    // }

    // --------ADD FIREBASE DATA---------- //
    const addData = () => {
        writeData("active", currName, currDescr, currQuant, currLocation, currCategory)// currImage
        setCurrName("");
        setCurrDescr("");
        setCurrQuant("");
        setCurrLocation("");
        setCurrCat("");
        setIsYes(false);
        // setCurrImage(null);
    }; 

    const addDataAnother = () => {
        writeData("active", currName, currDescr, currQuant, currLocation, currCategory)// currImage
        setCurrName("");
        setCurrDescr("");
        setCurrQuant("");
        setCurrLocation("");
        setCurrCat("");
        setIsYes(true);
        document.getElementById("meatDairy-category").checked=false
        document.getElementById("beverage-category").checked=false
        document.getElementById("produce-category").checked=false
        document.getElementById("nonperish-category").checked=false
        // setCurrImage(null);
    }; 

    return (
        <div className="addItem-page"> 
            <div className="addItem-container">
                <main> 

                <h1 className="survey-label"> Add New Food Listing </h1>

                {/* Create Form */}
                <form id="form">

                    {/* Food eligiblity questionnaire */}
                    <div class="form-control" id="question-container">
                        <label>
                            Before continuing, answer the following questions for eligibilty:
                            <ul>
                                <li> Is the food item unopened? </li>
                                <li> Is the food item's expiration date at least a week in the future from today? </li>
                                <li> If the food item is non-shelf stable or not a non-perishable, has the food item been properly stored the whole time it was in your possession (frozen or fridgerated foods)? </li>
                            </ul>
                            If no to any of these question, the food item is not eligible and cannot be listed.
                        </label>
                    </div>
                </form>

                {/* Show form if state true */}
                {isYes ? 
                (
                    <div class="form-control" id="input-container">

                        {/* Food input */}
                        <div class="name-input"> 
                            <label for="name" className="input-labels" id="label-name">
                                Food Name
                            </label>
                            <input type="text" placeholder="Chips" value={currName} onChange={nameHandleClick}/>
                        </div>

                        {/* Description input */}
                        <div class="desc-input"> 
                            <label for="description" className="input-labels" id="label-description">
                                Description
                            </label>
                            <input type="text" placeholder="Lays chips" value={currDescr} onChange={descrHandleClick} />
                        </div> 

                        {/* Quantity input */}
                        <div class="quant-input"> 
                            <label for="quantity" className="input-labels" id="label-quantity">
                                Item Quantity (1lb., 1oz)
                            </label>
                            <input type="text" placeholder="1 bag" value={currQuant} onChange={quantHandleClick} />
                        </div> 

                        {/* Location input */}
                        <div class="location-input"> 
                            <label for="quantity" className="input-labels" id="label-quantity">
                                Zip Code
                            </label>
                            <input type="text" placeholder="98105" value={currLocation} onChange={locHandleClick} />
                        </div> 

                        {/* Category input */}
                        <div className="input-labels"> 
                            <label for="category">Category (select one category that item fits best)</label>
                            <div className="input-labels"> 
                                <input type="radio" name="category" value="Meat or Dairy" className="categories" id="meatDairy-category" onChange={catHandleClick} /> Meat or Dairy
                                <input type="radio" name="category" value="Beverage" className="categories" id="beverage-category" onChange={catHandleClick} /> Beverage
                                <input type="radio" name="category" value="Produce" className="categories" id="produce-category" onChange={catHandleClick} /> Produce 
                                <input type="radio" name="category" value="Non-perishable" className="categories" id="nonperish-category" onChange={catHandleClick} /> Non-perishable (canned, boxed, dried fruit) 
                            </div>
                        </div> 

                        {/* Image  input -- DOESNT WORK WILL FIND FIGURE OUT LATER */}
                        {/* <input type="file" id="photo" />
                        <button id="upload" onclick={imgHandleClick}>Upload Image</button> */}

                        {/* Submit button */}
                        <button class="btn btn-success filter-btn" id="new-item-submit" onClick={addData}>Submit</button>

                        {/* Submit and add another button */}
                        <button class="btn btn-success filter-btn" id="new-item-submit-another" onClick={addDataAnother}>Submit and Add Another Listing</button>

                    </div>
                ) 
                : 
                ( 
                    <p>Your listing has successfully been posted!</p> 
                )}
                </main>

            </div>

            <div className="food-footer"></div>

                <footer>
                    <Footer></Footer>
                </footer>
        </div>
    )
}

export {AddListing};