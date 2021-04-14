import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {auth} from './Firebase'
import {useStateValue} from './StateProvider'
import './App.css';
import Welcome from "./Welcome";
import Clogin from "./Customer/Clogin";
import Cshops from "./Customer/Cshops";
import Ccheckout from "./Customer/Ccheckout";
import Cproducts from "./Customer/Cproducts";
import Rlogin from "./Retailer/RLogin";
import Rproducts from "./Retailer/Rproducts";
import Ryourshop from "./Retailer/Ryourshop";
import Rsignup from "./Retailer/Rsignup";
import Wheader from "./Wheader"
import Rheader from "./Retailer/Rheader"
import Cheader from "./Customer/Cheader"




function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //User is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }else{
        //No one is
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    });
    return () => {
      unsubscribe();
    };
  },[]);

  console.log("User is",user);

  return (
    
    <Router>
     <div className="App">
       <Switch>
          
          
          <Route path="/customer/login">
            <Clogin/>
          </Route>

          

          <Route path="/customer/products">
            <Cheader/>
            <Cproducts/>
          </Route>

          <Route path="/customer/checkout">
            <Cheader/>
            <Ccheckout/>
          </Route>


          <Route path="/retailer/login">
            <Rlogin/>
          </Route>

          <Route path="/retailer/signup">
            <Rsignup/>
          </Route>

          <Route path="/retailer/products">
            <Rheader/>
            <Rproducts/>
          </Route>

          <Route path="/retailer/yourshop">
            <Rheader/>
            <Ryourshop/>
          </Route>

          
          <Route path="/Welcome">
            <Wheader/>
            <Welcome/>
          </Route>

          <Route path="/">
            <Cheader/>
            <Cshops/>
          </Route>

       </Switch>
    </div>
    </Router>
    
  );
}

export default App;
