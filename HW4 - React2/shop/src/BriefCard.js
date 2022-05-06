import React from 'react';
import { useDispatch } from "react-redux";
import { add_item } from "./redux/cart.js";

function BriefCard(props) {

    const add_dispatch = useDispatch();

    return (
        <div className='BriefCard'>
            <div className='img_div_mainPage flex_horiz_centerd'>
                <img src={props.cardData.img} alt={"cannot load"} />
            </div>
            <div className='title_div_mainPage'>
                {props.cardData.title}
            </div>
            <div className='price_div_mainPage'>
                {`R$ ${props.cardData.price}.00`}
            </div>
            <div className='size_div_mainPage'>
                {props.cardData.size}
            </div>
            <div className='button_div_mainPage flex_horiz_centerd'>
                <button
                    onClick={() => { add_dispatch(add_item(props.cardData)); }}
                    type="button" className="add_to_cart_button">Add to Cart
                </button>
            </div>
        </div>
    );

}
export default BriefCard;