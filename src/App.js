import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Searchpage from "./Searchpage"
import Footer from "./Footer"

function App() {
  return (
     <div className="App">
<Router>
{/* header  */}
<Header />
     <Switch>

     <Route path="/search">
       {/* search page */}

       <Searchpage />
     </Route>
     <Route path="/">
      {/* homepage */}
      <Home />
     </Route>
     

     </Switch>

     
     {/* footer */}
     <Footer />
</Router>

     
    </div>

    
   
  );
}

export default App;
