import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "./redux/colorMode.js";


function MutualHeader(props) {

    const my_dispatch = useDispatch();
    const darkMode = useSelector((state) => state.colorMode.darkMode);

    console.log('darkMode:', darkMode);
    console.log('!darkMode:', !darkMode);

    return (
        <div className='mutual_header'>
            <Link to={'/'} style={{all:'unset'}}><span id='text_span'><b>IE Final Project</b></span></Link>
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