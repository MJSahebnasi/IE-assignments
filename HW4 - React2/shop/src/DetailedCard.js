import React from 'react';
import Modal from 'react-modal';
// import { useState } from 'react';

class DetailedCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { modalOpen: false };
    }

    render() {

        // const [modalOpen, setModalOpen] = useState(false);

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
                        <button type="button" class="base_button_detailPage buy_now_button">Buy Now</button>
                        <button type="button" class="base_button_detailPage more_info_button" onClick={() => this.setState({ modalOpen: true })}>More Info</button>
                    </div>
                    <div id='detailPage_placeholder'></div>
                </div>
                <Modal id='modal' isOpen={this.state.modalOpen} onRequestClose={() => this.setState({ modalOpen: false })}>
                    <h2>Details</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
                        lacus finibus, varius tortor commodo, rutrum diam. Etiam eu dictum
                        metus. Aliquam ullamcorper eros nec orci feugiat aliquam. Aliquam
                        venenatis aliquet imperdiet. Ut condimentum tincidunt erat. Etiam
                        eget tempor dolor. Praesent non dolor in tortor aliquam
                        sollicitudin et at urna. Aenean ante turpis, accumsan a
                        hendrerit eget, imperdiet vitae enim. Sed dictum magna in risus convallis porta. Morbi
                        non vestibulum enim, et auctor mi. Proin velit diam, feugiat et
                        commodo a, rhoncus non neque. Vestibulum laoreet tincidunt urna.
                        Nunc ornare fringilla turpis, quis volutpat tortor tempus ultricies.
                        Maecenas egestas ut dolor eget pulvinar.
                    </p>
                    <div id='modal_close'>
                        <button className='base_button_detailPage' onClick={() => this.setState({ modalOpen: false })}>close</button>
                    </div>
                </Modal>
            </div>
        );
    }
}
export default DetailedCard;