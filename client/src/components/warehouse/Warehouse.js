import React from 'react'
import MenuNavbar from '../layout/MenuNavbar'
import WarehouseList from './WarehouseList'
import DrawerLeft from '../layout/DrawerLeft'



const Warehouse = () => {
  return (
    <div className='warehouse padding-2'>
          <MenuNavbar/>
          <DrawerLeft/>
          <WarehouseList/>
    </div>
  )
}

export default Warehouse