import React from 'react';
import Auxx from '../../hoc/Auxx'
import classes from './Layout.module.css'

const Layout = ( props ) => {
    return(
        <Auxx>
            <div>
                Toolbar, SideDrawer, Backdrop
            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxx>
    )
}

export default Layout;