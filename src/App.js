import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import { Switch, Route,Redirect } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Service from './Service';
import Footer from './Footer';



const App=()=>{
return(
  <>
  <Navbar/>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route  exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/service" component={Service}/>
    <Redirect to="/"/>
  </Switch>
  <Footer/>
  
  </>
)
}



export default App;