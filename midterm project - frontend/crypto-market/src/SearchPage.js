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
                <div id='searchPage_body_inner_title'><h1> Cryptocurrency Prices by Market Cap </h1></div>
                <div id='search_bar_div'>
                    <form>
                        <input type={'text'} id='search_bar' placeholder='search for a cryptocurrency by name or symbol ...'></input>
                    </form>
                </div>
                <div id='search_results'>
                    <div id='search_results_header' className='search_results_row'>
                        <span id='searchpage_coin_span'>Coin</span>
                        <span>Price</span>
                        <span>24h Change</span>
                        <span>Market Cap</span>
                    </div>
                </div>
            </div>

        </div>
    );

}
export default SearchPage;