import React from 'react'
import {Grid} from '@mui/material'
import logo_text from '../images/logo_text.svg'
import {Field, Formik, Form} from 'formik'
import {Link} from 'react-router-dom'
const Register = () => {
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
                    <h2 className='text-secondary'>Create an account</h2>
                    <br/>
                    <div className='item'>
                      <Formik
                        initialValues={{email:"", password:"", password2:""}}
                        onSubmit={()=>{console.log("submit")}}
                      >
                        <Form className='flex-container'>
                          <p className='text-secondary'>Email</p>
                          <Field className="login-text-field secondary" name="email" type="email" />
                          <p className='text-secondary'>Password</p>
                          <Field className="login-text-field secondary" name="password" type="password" />
                          <p className='text-secondary'>Confirm Password</p>
                          <Field className="login-text-field secondary" name="password2" type="password" />
                          <p className='text-primary'>Register </p>
                          <br/>
                          <div className='flex-container flex-row' style={{alignItems:"center", gap:"2rem"}}>
                            <button className='login-btn primary' type="submit">Register</button> 
                            <button className='login-btn primary' type="submit">Register</button> 
                            <Link to={"/login"}>Already have account?</Link>
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

export default Register