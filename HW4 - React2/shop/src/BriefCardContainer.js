import React from 'react';
import BriefCard from './BriefCard';

class BriefCardContainer extends React.Component {

    render() {

        const cardComponents = [];
        const cardsData = this.props.cardsData;

        // TODO: keep cardData, remove the rest props:

        for (var i = 0; i < cardsData.length; i++) {
            cardComponents.push(<BriefCard cardData={cardsData[i]} key={i} />);
        }

        return (
            <div className='briefCard_container'>
                {cardComponents}
            </div>
        );
    };
}
export default BriefCardContainer;