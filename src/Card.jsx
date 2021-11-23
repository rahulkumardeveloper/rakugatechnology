import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
      
              <div className="col-md-4 col-10 max-auto">
                <div className="card" >
                  <img src={props.imgsrc} className="card-img-top" alt="altImage"/>
                  <div className ="card-body">
                  <h5 className ="card-title text-center">{props.tittle}</h5>
                  <p className ="card-text text-center">{props.content}</p>
                  <div className="d-flex justify-content-center ">
                  <NavLink to="/" className ="btn btn-primary ">Know More...</NavLink>
                  </div>
                  </div>
                </div>
              </div>

    </>
  )
}

export default Card;