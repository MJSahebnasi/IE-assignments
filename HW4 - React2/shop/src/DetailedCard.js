import React from 'react';

class DetailedCard extends React.Component {

    render() {

        return (
            <div className='detailedCard_container'>
                <div className='img_div'>
                    <img src={this.props.img_url} alt={"cannot load"} />
                </div>
                <div className='title_div'>
                    {this.props.title}
                </div>
                <div className='price_div'>
                    {`R$ ${this.props.price}.00`}
                </div>
                <div className='button_div'>
                    <button type="button" className="button add_to_cart_button">Buy Now</button>
                    <button type="button" className="button more_info_button">More Info</button>
                </div>
            </div>
        );
    }
}
export default DetailedCard;