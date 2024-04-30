import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICES = {
    Salad: 0.5,
    Cheese: 0.4,
    Meat: 1.3
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            Salad: 0,
            Cheese: 0,
            Meat: 0
        },
        totalPrice: 0,
        purchasable: false,
        purchasing: false
    };

    updatePurchaseState(ingredients) {
        const sum = Object.values(ingredients).reduce((sum, el) => sum + el, 0);
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        this.setState(prevState => {
            const updatedCount = prevState.ingredients[type] + 1;
            const updatedIngredients = {
                ...prevState.ingredients,
                [type]: updatedCount
            };
            const priceAddition = INGREDIENT_PRICES[type];
            return {
                ingredients: updatedIngredients,
                totalPrice: prevState.totalPrice + priceAddition
            };
        }, () => this.updatePurchaseState(this.state.ingredients));
    };

    removeIngredientHandler = (type) => {
        this.setState(prevState => {
            if (prevState.ingredients[type] <= 0) {
                return;
            }
            const updatedCount = prevState.ingredients[type] - 1;
            const updatedIngredients = {
                ...prevState.ingredients,
                [type]: updatedCount
            };
            const priceDeduction = INGREDIENT_PRICES[type];
            return {
                ingredients: updatedIngredients,
                totalPrice: prevState.totalPrice - priceDeduction
            };
        }, () => this.updatePurchaseState(this.state.ingredients));
    };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    ingredients={this.state.ingredients}
                />
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <h3>Your Order</h3>
                    <p>A delicious burger with the following ingredients:</p>
                    <ul>
                        {Object.keys(this.state.ingredients).map(ingredientKey => (
                            <li key={ingredientKey}>
                                {ingredientKey}: {this.state.ingredients[ingredientKey]}
                            </li>
                        ))}
                    </ul>
                    <p><strong>Total Price: ${this.state.totalPrice.toFixed(2)}</strong></p>
                    <p>Continue to Checkout?</p>
                    <button onClick={this.purchaseCancelHandler}>Cancel</button>
                    <button onClick={() => alert('Continue')}>Continue</button>
                </Modal>
            </div>
        );
    }
}

export default BurgerBuilder;
