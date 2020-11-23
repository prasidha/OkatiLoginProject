import React ,{useState , useEffect} from 'react';
import './App.css';
import SignIn from './SignIn'
import {BrowserRouter as Router, Switch , Route, Redirect} from 'react-router-dom'
import Register from './Register'
import HomePage from './HomePage'


function App() {
   
   const [isLoggedIn,setIsLoggedIn] = useState(loginStatus());

    useEffect(() => {
      localStorage.setItem("loginStatus", JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);
  
    
    function loginStatus() {
      const userInfo = JSON.parse(localStorage.getItem("loginStatus"));
      return userInfo || false;
    }
  
  return (
    <div className="App">
      <Router>
      <Switch>

      <Route exact path="/" render={ () => isLoggedIn ? <Redirect to ="/home" /> : <SignIn setIsLoggedIn={setIsLoggedIn}/> } />
      <Route exact path="/home" render={ () => isLoggedIn ?  <HomePage setIsLoggedIn={setIsLoggedIn}/> : <Redirect to ="/" />  } />
      <Route exact path ="/register" render ={ () => isLoggedIn ? <Redirect to ="/home"/> : <Register setIsLoggedIn={setIsLoggedIn}/> } />

      </Switch>
              
      </Router>
    </div>
  );
}

export default App;
