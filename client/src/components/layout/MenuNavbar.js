import React from 'react'
import bell_fill from '../images/bell_fill.png'
import AccountBtn from './AccountBtn'
import { Badge } from '@mui/material'
import logo_text from '../images/logo_text.svg'
import { Link } from 'react-router-dom'

const MenuNavbar = () => {
  return (
    <div className='flex-container flex-row flex-align' style={{justifyContent:"space-between"}}>
      <Link to="/">
        <img alt='#' style={{height:"3rem"}} src={logo_text}></img>
      </Link>
      <div 
        className='flex-container flex-row-reverse flex-align gap-1'
        style={{minHeight:"4rem"}}
      >
        <AccountBtn/>
        <a href='#!'>
            <Badge badgeContent={0} color="primary">
                <img height={"24px"} src={bell_fill} alt='#'/>
            </Badge>
        </a>
      </div>
    </div>
  )
}

export default MenuNavbar