import React, { useState } from 'react';


const Contact = () => {

  const [data, setData] = useState({
    "fullName": "",
    "mobileNumber": "",
    "email": "",
    "message": ""
  });

const InputEvent=(event)=>{
const{name,value}=event.target;
setData((prevalue)=>{
return{
  ...prevalue,
  [name]:value
};
});
};

const submitData=(e)=>{
  alert(`My Name is : ${data.fullName}.
  Mobile Number is : ${data.mobileNumber}.
  EmailId is : ${data.email}.
  Message is : ${data.message}`);
}
  return (
    <>
      <div className="my-4">
        <h2 className="text-center">Contact Us</h2>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form >
              <div className="mb-3">
                <label  className="form-label">
                  Full Name
                </label>
                <input type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Name"
                  name="fullName"
                  value={data.fullName}
                  onChange={InputEvent}
                />

                <label  className="form-label">
                  phone
                </label>
                <input type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  value={data.mobileNumber}
                  onChange={InputEvent}
                />

                <label  className="form-label">
                  Email address
                </label>
                <input type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                />

              </div>
              <div className="mb-3">
                <label  className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                />
              </div>
              <button type="button"  className="btn btn-outline-primary mb-3" onClick={submitData}>
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}



export default Contact;