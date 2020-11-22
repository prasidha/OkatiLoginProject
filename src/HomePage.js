import React from 'react'
import {IconButton} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

function HomePage({setIsLoggedIn}) {
    return (
        <div>
           
            <div style={{float:'right'}} > <IconButton onClick={()=>setIsLoggedIn(false)}><ExitToAppIcon/>logout</IconButton> </div>
            <div> <h1 style={{color:'green'}}>welcome to okhati page ...</h1></div>
        </div>
    )
}

export default HomePage
