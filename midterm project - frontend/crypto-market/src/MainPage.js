import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "./redux/colorMode.js";

function MainPage(props) {

    const my_dispatch = useDispatch();
    const darkMode = useSelector((state) => state.colorMode.darkMode);

    if (document.getElementById('MainPage')) {
        if (!darkMode) {
            document.getElementById('MainPage').style.color = "black";
            document.getElementById('change_theme_button').style.color = "black";
            document.getElementById('MainPage').style.backgroundImage = "url('background_light.png')";
        }
        if (darkMode) {
            document.getElementById('MainPage').style.color = "white";
            document.getElementById('change_theme_button').style.color = "white";
            document.getElementById('MainPage').style.backgroundImage = "url('background_dark.png')";
        }
    }

    return (
        <div id='MainPage'>

            <div id='MainPage_header'>
                <button type='button' id='change_theme_button'
                    onClick={() => { my_dispatch(changeMode(!darkMode)); }}>
                    Change Theme
                </button>
            </div>

            <div id='MainPage_body'>
                <div id='MainPage_left' className='MainPage_body_part'>
                    <div id='mainpage_title'>
                        <h1>Search &</h1>
                        <h1>Buy <span className='yellow_text'>Crypto</span> </h1>
                    </div>
                    <div>
                        Shahid Beheshti University
                        <br></br>
                        IE Final Project
                    </div>
                    <div id='mainpage_search_div'>
                        <Link to={'/search'}>
                            <button type="button" id='mainpage_search_button'>SEARCH MORE</button>
                        </Link>
                    </div>
                </div>
                <div id='MainPage_right' className='MainPage_body_part'>
                    <div id='last_searches'>
                        <div> s1 </div>
                        <div> s2 </div>
                        <div> s3 </div>
                    </div>
                </div>
            </div>

        </div>
    );

}
export default MainPage;