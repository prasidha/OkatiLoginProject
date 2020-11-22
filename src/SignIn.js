import React, { useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Grid,  Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
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
    height:'500px',
   
  },
  text:{
       fontStyle:'italic',
       textAlign:'center',
       color:'#009653'
  },
  input:{
    marginTop: theme.spacing(6),
    fontStyle:'italic',
  },
  submit: {
    marginTop: theme.spacing(8),
    fontStyle:'italic',
  },
}));

function LoginPage({setIsLoggedIn}) {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
   

    const logIn = () => {
      
       let getInfo = JSON.parse(localStorage.getItem('users'))
         
       if(email === getInfo.email && password === getInfo.password){
         setIsLoggedIn(true)
       }
       else{
         alert("you havent registered yet")
       }

           
    }
    return (
       <> 
      <MainPage/>
        <div className={classes.paper} >
    
                <form className={classes.form} onSubmit={(e)=>logIn(e)}>
                <h1 className={classes.text}>login form</h1>
    
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
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" style={{fontStyle:'italic',color:'#009653'}}>
                Forgot password?
              </Link>
            </Grid>
           
          </Grid>
        </form>
            
        </div>
        </>
    )
}

export default LoginPage
