import React from 'react';
import BriefCard from './BriefCard';

class BriefCardContainer extends React.Component {

    render() {

        const cards = [];
        const cardsData = this.props.cardsData;

        // TODO: keep cardData, remove the rest props:

        for (var i = 0; i < cardsData.length; i++) {
            cards.push(<BriefCard cardData={cardsData[i]} key={i} title={cardsData[i].title} img_url={cardsData[i].img} price={cardsData[i].price} size={cardsData[i].size} />);
        }

        return (
            <div className='briefCard_container'>
                {cards}
            </div>
        );
    };
}
export default BriefCardContainer;