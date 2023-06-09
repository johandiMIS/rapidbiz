import React from 'react'
import {Link} from 'react-router-dom'
import { Grid } from '@mui/material'

import logo_text from '../images/logo_text.svg'
import warehouse_menu from '../images/warehouse_menu.png'
import transaction_menu from '../images/transaction_menu.png'
import accounting_menu from '../images/accounting_menu.png'
import dashboard_menu from '../images/dashboard_menu.png'
import employee_menu from '../images/employee_menu.png'
import schedule_menu from '../images/schedule_menu.png'
import MenuNavbar from '../layout/MenuNavbar'
const Home = () => {
    return (
        <Grid className='home padding-2'>
            <Grid 
                item
                xs={12}
            >
                <MenuNavbar/>
            </Grid>
            <Grid 
                item
                xs={12}
                className='flex-container flex-column flex-center'
                sx={{paddingTop:"2rem", paddingBottom: "4rem", gap:"2rem"}}
            >
                <img className='item' alt='logo' src={logo_text} style={{width: "20rem"}}/>
                <h2 className='text-secondary'>Hi, Welcome Back!</h2>
            </Grid>
            <Grid 
                item
                xs={12}
                className='flex-container flex-center'
                sx={{paddingBottom:"3.5rem"}}
            >
                <div className='flex-container flex-column' style={{width:"50%"}}>
                    <Grid container spacing={4}>
                        <Grid 
                            item
                            xs={12}
                            sm={6}
                            lg={4}
                        >
                            <Link to="/" style={{textDecoration:"none"}}>
                                <div className='home-menu flex-container flex-column-reverse flex-align' > 
                                    <h3 className='item text-secondary' style={{paddingBottom:"1rem"}}> Transaction </h3>
                                    <img alt='menu' src={transaction_menu}/>
                                </div>
                            </Link>
                        </Grid>
                        <Grid 
                            item
                            xs={12}
                            sm={6}
                            lg={4}
                        >
                            <Link to="/warehouse" style={{textDecoration:"none"}}>
                                <div className='home-menu flex-container flex-column-reverse flex-align' > 
                                    <h3 className='item text-secondary' style={{paddingBottom:"1rem"}}> Warehouse </h3>
                                    <img alt='menu' src={warehouse_menu}/>
                                </div>
                            </Link>
                        </Grid>
                        <Grid 
                            item
                            xs={12}
                            sm={6}
                            lg={4}
                        >
                            <Link to="/" style={{textDecoration:"none"}}>
                                <div className='home-menu flex-container flex-column-reverse flex-align' > 
                                    <h3 className='item text-secondary' style={{paddingBottom:"1rem"}}> Employee </h3>
                                    <img alt='menu' src={employee_menu}/>
                                </div>
                            </Link>
                        </Grid>
                        <Grid 
                            item
                            xs={12}
                            sm={6}
                            lg={4}
                        >
                            <Link to="/" style={{textDecoration:"none"}}>
                                <div className='home-menu flex-container flex-column-reverse flex-align' > 
                                    <h3 className='item text-secondary' style={{paddingBottom:"1rem"}}> Dashboard </h3>
                                    <img alt='menu' src={dashboard_menu}/>
                                </div>
                            </Link>
                        </Grid>
                        <Grid 
                            item
                            xs={12}
                            sm={6}
                            lg={4}
                        >
                            <Link to="/" style={{textDecoration:"none"}}>
                                <div className='home-menu flex-container flex-column-reverse flex-align' > 
                                    <h3 className='item text-secondary' style={{paddingBottom:"1rem"}}> Accounting </h3>
                                    <img alt='menu' src={accounting_menu}/>
                                </div>
                            </Link>
                        </Grid>
                        <Grid 
                            item
                            xs={12}
                            sm={6}
                            lg={4}
                        >
                            <Link to="/" style={{textDecoration:"none"}}>
                                <div className='home-menu flex-container flex-column-reverse flex-align' > 
                                    <h3 className='item text-secondary' style={{paddingBottom:"1rem"}}> Dashboard </h3>
                                    <img alt='menu' src={schedule_menu}/>
                                </div>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    )
}

export default Home