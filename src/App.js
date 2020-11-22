import React ,{useState} from 'react';
import './App.css';
import SignIn from './SignIn'
import {BrowserRouter as Router, Switch , Route, Redirect} from 'react-router-dom'
import Register from './Register'
import HomePage from './HomePage'


function App() {
 
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <div className="App">

      <Router>
          <Switch>
              
              <Route exact path= "/"  render ={() => isLoggedIn ? <Redirect to="/home"/> : <SignIn setIsLoggedIn={setIsLoggedIn}/>} />
           
              <Route exact path="/home" render ={ () => isLoggedIn? <HomePage /> :<Redirect to ="/"/>}/>
              <Route exact path="/register" render ={() => isLoggedIn ? <Redirect to="/home"/> : <Register setisLoggedIn={setIsLoggedIn}/>}/>
         
  
              </Switch>
      </Router>
    </div>
  );
}

export default App;
