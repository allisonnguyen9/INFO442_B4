import React from 'react';
import { Footer } from './footer.js';
import  ItemList  from './foodPost.js';


function Homepage (props) {
  return (
    <div>
      <nav></nav>
      <main>
        <div className='container'>
          <div className='row'>
            <ItemList snackSwap={props.snackSwap}></ItemList>
          </div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
export default Homepage;