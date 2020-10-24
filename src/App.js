import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
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
function App() {
 
  return (
    <Router>
     <div className="App">
       <Switch>

          
          <Route path="/customer/login">
            <Clogin/>
          </Route>
          <Route path="/customer/shops">
            <Cshops/>
          </Route>
          <Route path="/customer/products">
            <Cproducts/>
          </Route>
          <Route path="/customer/checkout">
            <Ccheckout/>
          </Route>

          <Route path="/retailer/login">
            <Rlogin/>
          </Route>
          <Route path="/retailer/signup">
            <Rsignup/>
          </Route>
          <Route path="/retailer/products">
            <Rproducts/>
          </Route>
          <Route path="/retailer/yourshop">
            <Ryourshop/>
          </Route>
          <Route path="/">
            <Welcome/>
          </Route>
          

       </Switch>
       
      
    </div>
    </Router>
    
  );
}

export default App;
