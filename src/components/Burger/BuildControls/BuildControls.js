import React from 'react';
import BuildControl from '../BuildControl/BuildControl'; // Corrected path
import './BuildControls.css';

const BuildControls = props => {
    console.log("Ingredients:", props.ingredients);

    if (!props.ingredients || Object.keys(props.ingredients).length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div className="BuildControls">
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {Object.keys(props.ingredients).map(igKey => (
                <BuildControl
                    key={igKey}
                    label={igKey}
                    added={() => props.ingredientAdded(igKey)}
                    removed={() => props.ingredientRemoved(igKey)}
                    disabled={props.disabled[igKey]}
                />
            ))}
            <button 
                className="OrderButton" 
                disabled={!props.purchasable} 
                onClick={props.ordered}>
                Order Now
            </button>
        </div>
    );
};

export default BuildControls;
