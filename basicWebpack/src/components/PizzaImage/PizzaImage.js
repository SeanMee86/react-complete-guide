import React from 'react';
import classes from './PizzaImage.css';
import PizzaImg from '../../assets/pizza.jpg';

const pizzaImage = (props) => {
    return(
        <div className={classes.pizzaImage}>
            <img src={PizzaImg} alt=""/>
        </div>
    )
};

export default pizzaImage;