import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

import { checkout } from "./redux/cart.js";
import CartCard from './CartCard';

function CartCardContainer() {

    const cardComponents = [];
    const cardsData = useSelector((state) => state.cart.items);
    const priceSum = cardsData.map(item => item.price).reduce((partialSum, a) => partialSum + a, 0);

    const my_dispatch = useDispatch();
    
    for (var i = 0; i < cardsData.length; i++) {
        cardComponents.push(<CartCard index={i} key={i} />);
    }

    if (cardsData.length > 0) {
        return (
            <div className='cartCard_container'>
                {cardComponents}
                <div id='total_div'>
                    <h2>total: R$ {priceSum}.00</h2>
                </div>
                <div id='checkout_div'>
                    <button id='checkout_button'
                    onClick={() => { my_dispatch(checkout()); }}>checkout</button>
                </div>
            </div>
        );
    }
    else
        return <div className='cartCard_container'>nothing in the cart</div>

}
export default CartCardContainer;