import React, {Component} from 'react';
import Auxx from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';

class BurgerMaker extends Component {
    state = {
        ingredients: {
            Salad: 1,
            Bacon: 0,
            Cheese: 0,
            Meat: 0
        }
    }

    render() {
        return (
            <Auxx>
                <Burger ingredients={this.state.ingredients}/> 
                <div>Build Controls</div>
            </Auxx>
        );
    }
}

export default BurgerMaker;