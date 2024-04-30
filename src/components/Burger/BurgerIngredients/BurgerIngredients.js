import React from 'react';
import './BurgerIngredients.css'; // Ensure the CSS file exists and is correctly linked.

const BurgerIngredients = props => {
    let ingredient = null;

    switch (props.type) {
        case 'bread-bottom':
            ingredient = <div className="BreadBottom"></div>;
            break;
        case 'bread-top':
            ingredient = (
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
            );
            break;
        case 'Meat':
            ingredient = <div className="Meat"></div>;
            break;
        case 'Cheese':
            ingredient = <div className="Cheese"></div>;
            break;
        case 'Salad':
            ingredient = <div className="Salad"></div>;
            break;
        default:
            ingredient = null; // Consider logging an error or showing a fallback
    }

    return ingredient;
};

export default BurgerIngredients;
