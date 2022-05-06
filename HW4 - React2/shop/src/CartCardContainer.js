import React from 'react';
import { useSelector } from "react-redux";

import BriefCard from './BriefCard';
import CartCard from './CartCard';

function CartCardContainer() {

    const cardComponents = [];
    const cardsData = useSelector((state) => state.cart.items);
    console.log('cardsData:', cardsData);
    console.log('len:',cardsData.length);

    // for (var i = 0; i < cardsData.length; i++) {
    //     cardComponents.push(<BriefCard cardData={cardsData[i]} key={i} />);
    // }

    if (cardsData.length > 0) {
        // console.log('cardsData[0]', cardsData[0]);
        // console.log('title', cardsData[0].title);
        return (
            <div className='cartCard_container'>
                {/* {cardComponents} */}

                <CartCard index={0} />
                {/* <CartCard />
                <CartCard /> */}
            </div>
        );
    }
    else
        return <div className='cartCard_container'>nothing in the cart</div>

}
export default CartCardContainer;