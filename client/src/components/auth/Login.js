import React from 'react'
import {Grid} from '@mui/material'
import logo_text from '../images/logo_text.svg'
const Login = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh', width:"100vw"}}>
        <Grid
          item
          xs={6}
        >
            <div className='flex-container flex-center'>
                <div className='item'>
                    <img className='item' alt='logo' src={logo_text} style={{width: "20rem"}}/>
                    <br/>
                    <br/>
                    <p className='bold' >Hi, Welcome Back!</p>
                    <br/>
                    <div className='item'>
                        <p>Username</p>
                        
                        <p>error message</p>
                    </div>
                </div>
            </div>
            
        </Grid>
        <Grid
          item
          xs={6}
          className='login-bg-img'
        />
    </Grid>

    
  )
}

export default Login