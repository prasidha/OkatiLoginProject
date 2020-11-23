import React from 'react'
import {Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    paper:{
      width:'15%',
      margin:'auto',
      backgroundColor:'#009653',
      border:'1px solid',
      color:'white',
      borderRadius:'1px',
      flex:'1'
    } ,
    button :{
        color:'white',
        marginLeft:'1rem'
    },
    link:{
        textDecoration:"none",
    }
});
function MainPage() {
    const classes = useStyles();
    return (
        <div className={classes.paper}>
         
          <Link to="/" className={classes.link}><Button className={classes.button}>sign In</Button></Link> 
             <Link to="/register" className={classes.link}> <Button className={classes.button}>register</Button></Link> 
         

        </div>
    )
}

export default MainPage
