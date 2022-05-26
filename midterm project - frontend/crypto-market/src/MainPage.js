import React from 'react';


function MainPage(props) {

    return (
        <div id='MainPage'>

            <div id='MainPage_header'>
                change theme
            </div>

            <div id='MainPage_body'>
                <div id='MainPage_left' className='MainPage_body_part'>
                    <div id='mainpage_title'>
                        <h1>Search & </h1> 
                        <h1>Buy <span className='yellow_text'>Crypto</span> </h1>
                    </div>
                    <div>
                        Shahid Beheshti University 
                        <br></br>
                        IE Final Project
                    </div>
                    <div>
                        <button type='button' id='mainpage_search_button'>SEARCH MORE</button>
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