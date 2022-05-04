import React from 'react';

class BriefCard extends React.Component {

    render() {

        return (
            <div className='BriefCard'>
                <div className='img_div_mainPage flex_horiz_centerd'>
                    <img src={this.props.img_url} alt={"cannot load"}/>
                </div>
                <div className='title_div_mainPage'>
                    {this.props.title}
                </div>
                <div className='price_div_mainPage'>
                    {`R$ ${this.props.price}.00`}
                </div>
                <div className='size_div_mainPage'>
                    {this.props.size}
                </div>
                <div className='button_div_mainPage flex_horiz_centerd'>
                    <button type="button" className="add_to_cart_button">Add to Cart</button>
                </div>
            </div>
        );
    }
}
export default BriefCard;