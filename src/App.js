import React from 'react'
import Signup from "./signup";
import Navbar from "./navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Signin from './signin';
import HomePage from './homepage';


export default function App() {

  const priceList = [
    {
      name: "Dell",
      price: "$123",
      condition: true
    },
    {
      name: "HP",
      price: "$113",
      condition: false
    },
    {
      name: "mac",
      price: "$123",
      condition: false
    },
    {
      name: "Lenova",
      price: "$123",
      condition: false
    }
  ]

  return (
    <div className="App">
      <Router>
     
        <Navbar />
          <Switch>
            <Route path="/signup" component={Signup} exact />
            <Route path="/signin" component={Signin} exact />
            <Route path="/" component={HomePage} exact />
              {
                priceList.map((obj) => {
                  if(obj.condition) {
                    return(
                      <Signup data= {obj}> </Signup>
                    )
                  } else{
                    return(
                      <h1>None</h1>
                    )
                  }
                })
              }
          </Switch>
      </Router>
    </div>
  );
}


