import React from 'react';

function ItemCard(props) {
    return (
        <div className="d-flex col col-md-5 col-xl-3">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col col-sm-auto col-xl-12">
                <img src={props.foodData.image} className="card-img pb-3" alt={props.foodData.name}/>
              </div>
              <div className="col-sm">
                <h2 className="card-title"> {props.foodData.name}</h2>
                <h3 className="text-muted"> {props.foodData.location}</h3>
                <p className="card-text"> {props.foodData.description}</p>
                <a href="#" className="btn btn-dark blue-btn">Claim It!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


function ItemList(props) {
    return (
        <div className="row">
            {props.snackSwap.map((item) => (
                <ItemCard key={item.name} foodData={item} /> //claim={props.claim} add when use state
         ))}
        </div>
    );
}

export default ItemList;

