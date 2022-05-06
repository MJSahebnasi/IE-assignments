import React from 'react';
import { useDispatch } from "react-redux";
import { add_item, remove_item } from "./redux/cart.js";

function BriefCard(props) {

    const add_dispatch = useDispatch();

    return (
        <div className='BriefCard'>
            <div className='img_div_mainPage flex_horiz_centerd'>
                <img src={props.img_url} alt={"cannot load"} />
            </div>
            <div className='title_div_mainPage'>
                {props.title}
            </div>
            <div className='price_div_mainPage'>
                {`R$ ${props.price}.00`}
            </div>
            <div className='size_div_mainPage'>
                {props.size}
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