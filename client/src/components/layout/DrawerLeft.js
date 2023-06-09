import React, { Fragment } from 'react'
import { Button, Drawer } from '@mui/material';
const DrawerLeft = props => {
    const [left, setLeft] = React.useState(false);
    const toggleDrawer = (open) => (event) => {
        setLeft(!left)
    };
    return (  
        <Fragment>
            <Button onClick={toggleDrawer(true)}>left button</Button>
            <Drawer
                anchor={'left'}
                open={left}
                onClose={toggleDrawer(false)}
            >
                data here
            </Drawer>
        </Fragment>
    )
}

export default DrawerLeft