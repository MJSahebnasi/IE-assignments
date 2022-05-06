import React from 'react';
import { useSelector } from "react-redux";

import BriefCard from './BriefCard';
import CartCard from './CartCard';

function CartCardContainer() {

    const cardComponents = [];
    const cardsData = useSelector((state) => state.cart.items);

    for (var i = 0; i < cardsData.length; i++) {
        cardComponents.push(<CartCard index={i} key={i} />);
    }

    if (cardsData.length > 0) {
        return (
            <div className='cartCard_container'>
                {cardComponents}
            </div>
        );
    }
    else
        return <div className='cartCard_container'>nothing in the cart</div>

}
export default CartCardContainer;