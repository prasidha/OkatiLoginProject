import React from 'react'
import {IconButton} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

function HomePage() {
    return (
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <h1 style={{textAlign:'center'}}>welcome to okhati </h1>
            <IconButton><ExitToAppIcon/>logout</IconButton>
        </div>
    )
}

export default HomePage
