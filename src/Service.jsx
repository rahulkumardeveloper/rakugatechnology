import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Service = () => {
  return (
    <>
      <div className="my-2">
        <h2 className="text-center">Our Services</h2>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">

             {
               Sdata.map((value,index)=>{
                 return(
                   <Card key={index} imgsrc={value.imgsrc} tittle={value.tittle} content={value.content}/>
                 )
               })
             }
             
            </div>
          </div>
        </div>
      </div>

    </>
  )
}



export default Service;