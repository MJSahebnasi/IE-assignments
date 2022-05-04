import React from 'react';

class DetailedCard extends React.Component {

    render() {

        return (
            <div className='detailedCard_container'>
                <div className='detailCard'>
                    <div className='img_div_detailPage'>
                        <img src={this.props.cardData.img} alt={"cannot load"} />
                    </div>
                    <div className='title_div_detailPage'>
                        {this.props.cardData.title}
                    </div>
                    <div className='price_div_detailPage'>
                        {`R$ ${this.props.cardData.price}.00`}
                    </div>
                    <div id='button_div_detailPage'>
                        <button type="button" class="base_button buy_now_button">Buy Now</button>
                        <button type="button" class="base_button more_info_button">More Info</button>
                    </div>
                    <div id='detailPage_placeholder'></div>
                </div>
            </div>
        );
    }
}
export default DetailedCard;