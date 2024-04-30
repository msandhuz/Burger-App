import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'; // Make sure this path is correct.
import './Burger.css'; // Ensure the CSS path is correct.

const Burger = props => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => [...Array(props.ingredients[igKey])].map((_, i) =>
            <BurgerIngredients key={igKey + i} type={igKey} />))
        .reduce((arr, el) => arr.concat(el), []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className="Burger">
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
};

export default Burger;
