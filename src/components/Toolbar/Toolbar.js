import React from 'react';
import './Toolbar.css'; // Make sure to import your CSS

const Toolbar = props => (
    <header className="Toolbar">
        <div className="DrawerToggle" onClick={props.drawerToggleClicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="Logo">
            <a href="/">The Burger Builder</a>
        </div>
        <div className="Logo2">
            <a href="/">Checkout</a>
        </div>
        <nav>
            {/* Navigation items here */}
        </nav>
    </header>
);

export default Toolbar;
