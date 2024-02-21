import React from 'react';
import { NavLink } from "react-router-dom";
import { Footer } from './footer.js';
import  ItemList  from './foodPost.js';


function Claim (props) {

  return (
    <div>
      <nav></nav>
      <main>
        <div className='container'>
          <div className='row'>
            {/* <ItemList snackSwap={props.snackSwap}></ItemList> FOR DUMMY DATA*/}
            {/* <ItemList /> */}
          </div>
        </div>
      </main>
      <div className="food-footer"></div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
export default Claim;