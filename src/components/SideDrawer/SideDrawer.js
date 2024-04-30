import React from 'react';
import './SideDrawer.css';

const SideDrawer = ({ open, closed }) => {
    let classes = ['SideDrawer', open ? 'Open' : 'Close'];
    return (
        <div className={classes.join(' ')}>
            <div className="BurgerDisplay">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                <div className="Meat"></div>
                <div className="Cheese"></div>
                <div className="Salad"></div>
                <div className="BreadBottom"></div>
            </div>
            <nav>
                <a href="/" onClick={closed}>The Burger Builder</a>
                <a href="/checkout" onClick={closed}>Checkout</a>
            </nav>
            <button onClick={closed}>Close</button>
        </div>
    );
};

export default SideDrawer;
