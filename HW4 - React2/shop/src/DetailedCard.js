import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

import { add_item } from "./redux/cart.js";


function DetailedCard(props) {

    const [modalOpen, setModalOpen] = useState(false);

    const add_dispatch = useDispatch();

    return (
        <div className='detailedCard_container'>
            <div className='detailCard'>
                <div className='img_div_detailPage'>
                    <img src={props.cardData.img} alt={"cannot load"} />
                </div>
                <div className='title_div_detailPage'>
                    {props.cardData.title}
                </div>
                <div className='price_div_detailPage'>
                    {`R$ ${props.cardData.price}.00`}
                </div>
                <div id='button_div_detailPage'>
                    <Link style={{ all: "unset", width: "500px" }} to={"/cart"}>
                        <button
                            onClick={() => { add_dispatch(add_item(props.cardData)); }}
                            type="button" className="base_button_detailPage buy_now_button">Buy Now</button>
                    </Link>
                    <button type="button" className="base_button_detailPage more_info_button" onClick={() => setModalOpen(true)}>More Info</button>
                </div>
                <div id='detailPage_placeholder'></div>
            </div>
            <Modal id='modal' isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
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
                    <button className='base_button_detailPage' onClick={() => setModalOpen(false)}>close</button>
                </div>
            </Modal>
        </div>
    );

}
export default DetailedCard;