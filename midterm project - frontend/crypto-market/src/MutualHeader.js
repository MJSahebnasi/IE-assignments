import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "./redux/colorMode.js";

function MutualHeader(props) {

    const my_dispatch = useDispatch();
    const darkMode = useSelector((state) => state.colorMode.darkMode);

    if (document.getElementById('mutual_header_id')) {
        if (document.getElementById('change_theme_button')) {

            if (document.getElementById('searchPage_body')) {
                if (!darkMode) {
                    document.getElementById('searchPage_body').style.color = "black";
                    document.getElementById('searchPage_body').style.backgroundColor = "white";
                }
                if (darkMode) {
                    document.getElementById('searchPage_body').style.color = "white";
                    document.getElementById('searchPage_body').style.backgroundColor = "black";
                }
            }

            if (document.getElementById('mutual_header_id')) {
                if (!darkMode) {
                    document.getElementById('mutual_header_id').style.backgroundColor = "white";
                    document.getElementById('change_theme_button').style.color = "black";

                }
                if (darkMode) {
                    document.getElementById('mutual_header_id').style.backgroundColor = "black";
                    document.getElementById('change_theme_button').style.color = "white";

                }
            }

            if (document.getElementById('CoinDetailPage_body')) {
                if (!darkMode) {
                    document.getElementById('CoinDetailPage').style.backgroundColor = "white";
                    document.getElementById('CoinDetailPage_body').style.color = "black";

                }
                if (darkMode) {
                    document.getElementById('CoinDetailPage').style.backgroundColor = "black";
                    document.getElementById('CoinDetailPage_body').style.color = "white";

                }
            }
        }
    }

    return (
        <div id='mutual_header_id'>
            <Link to={'/'} style={{ all: 'unset' }}><span id='text_span'><b>IE Final Project</b></span></Link>
            <span id='button_span'>
                {/* this button's style is in MainPage.css (I've put the same button there too)
                I knew it's better to make it a component to avoid duplicate code,
                but I didn't have enough time for that */}
                <button type='button' id='change_theme_button'
                    onClick={() => { my_dispatch(changeMode(!darkMode)); }}>
                    Change Theme
                </button>
            </span>
        </div>
    );

}
export default MutualHeader;