import React from 'react';


function MainPage(props) {

    return (
        <div id='MainPage'>

            <div id='MainPage_header'>
                change theme
            </div>

            <div id='MainPage_body'>
                <div id='MainPage_left' className='MainPage_body_part'>
                    <h1>Search & Buy Crypto</h1>
                </div>
                <div id='MainPage_right' className='MainPage_body_part'>
                    image
                </div>
            </div>

        </div>
    );

}
export default MainPage;