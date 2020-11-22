import React, { useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core'
import MainPage from './MainPage'

 
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: "1px 2px 20px 1px grey",
    width: "30%",
    margin:'auto',
    backgroundColor:"white",
    borderRadius:'12px',
  },
  form: {
    width: '70%', 
    marginTop: theme.spacing(1),
    height:'500px'
  },
  text:{
       fontStyle:'italic',
       textAlign:'center',
       color:'#009653'
  },
  input:{
    marginTop: theme.spacing(4),
    fontStyle:'italic',
  },
  submit: {
    marginTop: theme.spacing(4),
    fontStyle:'italic',
  },
}));

function LoginPage({setIsLoggedIn}) {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const[emailError,setEmailError]=useState("");
    const[passError,setPassError]=useState("");

    const passwordValidation =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    const emailValidation=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    const registerForm = (e) => {
      e.preventDefault();
      
    

      function isValidEmail() {

          if(email.match(emailValidation)){
          return true
          }
          else{
            return false
          }
        }

      if(isValidEmail() && email!== ""){
        setEmailError(false)
      }
      else{
        // setEmailError(true) 
        alert("email is not valid")
        
      }

      if((password !== "" && confirmPassword !=="") && (password.match(passwordValidation)) &&(password === confirmPassword) ){
        setPassError(false)
       
        let user = {
          email,
          password
        }
        
        localStorage.setItem("users",JSON.stringify(user))
        setIsLoggedIn(true)
       
        
      }

      else{
        // setPassError(true)
        alert("password is invalid")
      }
    
           
    }
    return (
      <>
      <MainPage/>
        <div className={classes.paper} >
  { /*     <Link to="/signin"><Button className={classes.button}>sign In</Button></Link> 
    <Link to="/register"> <Button className={classes.button}>register</Button></Link> */}
    
                <form className={classes.form} onSubmit={(e)=> registerForm (e)}>
                <h1 className={classes.text}>Register form</h1>
    
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            className={classes.input}
            onChange={ e => setEmail(e.target.value)}
           
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            className={classes.input}
            onChange= {e => setPassword(e.target.value)}
            
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm-password"
            label="confirm-Password"
            type="password"
            className={classes.input}
            onChange= {e => setConfirmPassword(e.target.value)}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          
        </form>
            
        </div>
        </>
    )
}

export default LoginPage

