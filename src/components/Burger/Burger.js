import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngridient/BurgerIngridient'

const burger = ( props ) => {

    let ingredientsArr = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
               return <BurgerIngredient key={ingKey + i} type={ingKey} />
            })
        }
    ).flatMap(el => el);

    if ( ingredientsArr.length === 0) {
        ingredientsArr = <p>Please choose the ingredients</p>;
    }


    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={'BreadTop'}/>
            {ingredientsArr}
            <BurgerIngredient type={'BreadBottom'}/>
        </div>
    );
}

export default burger;