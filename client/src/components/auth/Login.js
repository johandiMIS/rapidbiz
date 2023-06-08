import React from 'react'
import {Grid} from '@mui/material'
import logo_text from '../images/logo_text.svg'
import {Field, Formik, Form} from 'formik'
import {Link, useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
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
                    <h2 className='text-secondary'>Hi, Welcome Back!</h2> 
                    <br/>
                    <div className='item'>
                      <Formik
                        initialValues={{email:"", password:""}}
                        onSubmit={()=>{navigate('/')}}
                      >
                        <Form className='flex-container'>
                          <p className='text-secondary'>Email</p>
                          <Field className="login-text-field secondary" name="email" type="email"/>
                          <p className='text-primary'>Email error</p>
                          <br/>
                          <p className='text-secondary'>Password</p>
                          <Field className="login-text-field secondary" name="password" type="password"/>
                          <p className='text-primary'>Password error</p>
                          <br/>
                          <div className='flex-container flex-row flex-align gap-2'>
                            <button className='login-btn primary' type="submit">Login</button> 
                            <Link to={"/forgetpassword"}>Forget Password?</Link>
                          </div>
                        </Form>
                      </Formik>
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