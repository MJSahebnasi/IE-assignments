import React from 'react';
import MutualHeader from './MutualHeader';

function SearchPage(props) {

    return (
        <div id='SearchPage'>

            <MutualHeader />

            <div id='searchPage_title'>
                <div>
                    <h1>Search Coin</h1>
                    get information from here
                </div>
            </div>

            <div id='searchPage_body'>
                <div><h1> Cryptocurrency Prices by Market Cap </h1></div>
                <div>
                    <form>
                        <input type={'text'}></input>
                    </form>
                </div>
                <div>
                    
                </div>
            </div>

        </div>
    );

}
export default SearchPage;