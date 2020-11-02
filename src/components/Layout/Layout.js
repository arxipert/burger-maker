import React from 'react';
import Auxx from '../../hoc/Auxx'

const Layout = ( props ) => {
    return(
        <Auxx>
            <div>
                Toolbar, SideDrawer, Backdrop
            </div>
            <main>
                {props.children}
            </main>
        </Auxx>
    )
}

export default Layout;