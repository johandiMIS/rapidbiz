import React, { Fragment, useEffect, useState } from 'react'
import { Button, Drawer } from '@mui/material';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo_text from '../images/logo_text.svg'
import dashboard_color from '../images/drawer_icon/dashboard_color.png'
import dashboard_plain from '../images/drawer_icon/dashboard_plain.png'
import warehouse_color from '../images/drawer_icon/warehouse_color.png'
import warehouse_plain from '../images/drawer_icon/warehouse_plain.png'
import employee_color from '../images/drawer_icon/employee_color.png'
import employee_plain from '../images/drawer_icon/employee_plain.png'
import schedule_color from '../images/drawer_icon/schedule_color.png'
import schedule_plain from '../images/drawer_icon/schedule_plain.png'
import transaction_color from '../images/drawer_icon/transaction_color.png'
import transaction_plain from '../images/drawer_icon/transaction_plain.png'
import accounting_color from '../images/drawer_icon/accounting_color.png'
import accounting_plain from '../images/drawer_icon/accounting_plain.png'

const DrawerLeft = ({selected}) => {
    const loc = useLocation()
    const [left, setLeft] = React.useState(false);
    const [currentPage, setCurrentPage] = useState("")

    useEffect(()=>{
        setCurrentPage(loc.pathname.split("/")[1])
    }, [loc.pathname])
    const toggleDrawer = () => (e) => {
        setLeft(!left)
    };
    return (  
        <Fragment>
            <Button onClick={toggleDrawer(true)}>Menu</Button>
            <Drawer
                anchor={'left'}
                open={left}
                onClose={toggleDrawer(false)}
                sx={{width:"100rem"}}
            >
                <div 
                    className='flex-container flex-column gap-2'
                    style={{width:"18rem", paddingLeft:"2rem", paddingTop:"2rem"}}
                >
                    <Link to="/">
                        <img alt='#' style={{height:"3rem"}} src={logo_text}></img>
                    </Link>
                    <NavLink className="flex-container flex-row gap-2" style={{textDecoration:"none", height:"fit-content"}} to="">
                        <img className='item' height={"24px"} src={currentPage==="transaction"? transaction_color:transaction_plain} alt='#'/>
                        <p className={`item text-secondary ${currentPage==="transaction"?"bold":""}`} >Transaction</p>
                    </NavLink>
                    <NavLink className="flex-container flex-row gap-2" style={{textDecoration:"none", height:"fit-content"}} to="/warehouse">
                        <img className='item' height={"24px"} src={currentPage==="warehouse"? warehouse_color:warehouse_plain} alt='#'/>
                        <p className={`item text-secondary ${currentPage==="warehouse"?"bold":""}`} >Warehouse</p>
                    </NavLink>
                    <NavLink className="flex-container flex-row gap-2" style={{textDecoration:"none", height:"fit-content"}} to="">
                        <img className='item' height={"24px"} src={currentPage==="employee"? employee_color:employee_plain} alt='#'/>
                        <p className={`item text-secondary ${currentPage==="employee"?"bold":""}`} >Employee</p>
                    </NavLink>
                    <NavLink className="flex-container flex-row gap-2" style={{textDecoration:"none", height:"fit-content"}} to="">
                        <img className='item' height={"24px"} src={currentPage==="dashboard"? dashboard_color:dashboard_plain} alt='#'/>
                        <p className={`item text-secondary ${currentPage==="dashboard"?"bold":""}`} > Dashboard</p>
                    </NavLink>
                    <NavLink className="flex-container flex-row gap-2" style={{textDecoration:"none", height:"fit-content"}} to="">
                        <img className='item' height={"24px"} src={currentPage==="accounting"? accounting_color:accounting_plain} alt='#'/>
                        <p className={`item text-secondary ${currentPage==="accounting"?"bold":""}`} >Accounting</p>
                    </NavLink>
                    <NavLink className="flex-container flex-row gap-2" style={{textDecoration:"none", height:"fit-content"}} to="">
                        <img className='item' height={"24px"} src={currentPage==="schedule"? schedule_color:schedule_plain} alt='#'/>
                        <p className={`item text-secondary ${currentPage==="schedule"?"bold":""}`} >Schedule</p>
                    </NavLink>
                </div>
            </Drawer>
        </Fragment>
    )
}

export default DrawerLeft