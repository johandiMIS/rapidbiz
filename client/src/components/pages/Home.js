import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Grid, Button, Popover, Divider, Avatar, Badge } from '@mui/material'
import bell_fill from '../images/bell_fill.png'
import arrow_down from '../images/Arrow_drop_down_big.png'
import avatar from '../images/avatar.png'
import logo_text from '../images/logo_text.svg'
import warehouse_menu from '../images/warehouse_menu.png'
import transaction_menu from '../images/transaction_menu.png'
import accounting_menu from '../images/accounting_menu.png'
import dashboard_menu from '../images/dashboard_menu.png'
import employee_menu from '../images/employee_menu.png'
import schedule_menu from '../images/schedule_menu.png'
const Home = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Grid className='home'>
            <Grid 
                item
                xs={12}
            >
                <div 
                    className='flex-container flex-row-reverse flex-align gap-1'
                    style={{minHeight:"4rem"}}
                >
                    <Button 
                        className='account-btn' aria-describedby={id} variant="text" onClick={handleClick}
                        sx={{marginRight:"2rem"}}
                    >
                        <Avatar alt="Remy Sharp" sx={{height:"2rem", width:"2rem"}} src={avatar}/>
                        <p className=' text-secondary bold'>Johandi</p>
                        <img height={"24px"} alt='#' src={arrow_down}/>
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                    >
                        <Link to='/register' className='flex-container text-secondary flex-row flex-align' 
                            style={{textDecoration:"none", height:"2rem", width:"10rem", paddingLeft:"1rem"}}
                        >
                            <p>
                                Help
                            </p>
                        </Link>
                        <Divider />
                        <Link to='/' className='flex-container text-secondary flex-row flex-align' 
                            style={{textDecoration:"none", height:"2rem", width:"10rem", paddingLeft:"1rem"}}
                        >
                            <p>
                                Setting
                            </p>
                        </Link>
                        <Divider />
                        <Link to='/login' className='flex-container text-secondary flex-row flex-align' 
                            style={{textDecoration:"none", height:"2rem", width:"10rem", paddingLeft:"1rem"}}
                        >
                            <p>
                                Logout
                            </p>
                        </Link>
                    </Popover>
                    
                    <a href='#!'>
                        <Badge badgeContent={0} color="primary">
                            <img height={"24px"} src={bell_fill} alt='#'/>
                        </Badge>
                    </a>
                </div>
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
                            xs={4}
                        >
                            <Link to="/login" style={{textDecoration:"none"}}>
                                <div className='home-menu flex-container flex-column-reverse flex-align' > 
                                    <h3 className='item text-secondary' style={{paddingBottom:"1rem"}}> Transaction </h3>
                                    <img alt='menu' src={transaction_menu}/>
                                </div>
                            </Link>
                        </Grid>
                        <Grid 
                            item
                            xs={4}
                        >
                            <Link to="/login" style={{textDecoration:"none"}}>
                                <div className='home-menu flex-container flex-column-reverse flex-align' > 
                                    <h3 className='item text-secondary' style={{paddingBottom:"1rem"}}> Warehouse </h3>
                                    <img alt='menu' src={warehouse_menu}/>
                                </div>
                            </Link>
                        </Grid>
                        <Grid 
                            item
                            xs={4}
                        >
                            <Link to="/login" style={{textDecoration:"none"}}>
                                <div className='home-menu flex-container flex-column-reverse flex-align' > 
                                    <h3 className='item text-secondary' style={{paddingBottom:"1rem"}}> Employee </h3>
                                    <img alt='menu' src={employee_menu}/>
                                </div>
                            </Link>
                        </Grid>
                        <Grid 
                            item
                            xs={4}
                        >
                            <Link to="/login" style={{textDecoration:"none"}}>
                                <div className='home-menu flex-container flex-column-reverse flex-align' > 
                                    <h3 className='item text-secondary' style={{paddingBottom:"1rem"}}> Dashboard </h3>
                                    <img alt='menu' src={dashboard_menu}/>
                                </div>
                            </Link>
                        </Grid>
                        <Grid 
                            item
                            xs={4}
                        >
                            <Link to="/login" style={{textDecoration:"none"}}>
                                <div className='home-menu flex-container flex-column-reverse flex-align' > 
                                    <h3 className='item text-secondary' style={{paddingBottom:"1rem"}}> Accounting </h3>
                                    <img alt='menu' src={accounting_menu}/>
                                </div>
                            </Link>
                        </Grid>
                        <Grid 
                            item
                            xs={4}
                        >
                            <Link to="/login" style={{textDecoration:"none"}}>
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