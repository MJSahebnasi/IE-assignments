import React from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { remove_item } from "./redux/cart.js";



function CartCard(props) {

    const add_dispatch = useDispatch();
    const cartData = useSelector((state) => state.cart.items);
    const cardData = cartData[props.index];

    return (
        <div className='cartCard'>
            <div className='title_div'>
                {cardData.title}
            </div >

            <div className='price_div'>
                R$ {cardData.price}.00
            </div>

            <div className='remove_div'>
                <button>X</button>
            </div>
        </div>
    );

}
export default CartCard;