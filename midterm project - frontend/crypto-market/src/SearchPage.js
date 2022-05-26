import React from 'react';

import MutualHeader from './MutualHeader';
import SearchResultItem from './SearchResultItem';

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
                        <input type={'text'} id='search_bar' placeholder='search for one or multiple cryptocurrencies by name, e.g: bitcoin, cardano'></input>
                    </form>
                </div>
                <div id='search_results'>
                    <div id='search_results_header' className='search_results_row'>
                        <span id='searchpage_coin_span'>Coin</span>
                        <span>Price</span>
                        <span>24h Change</span>
                        <span>Market Cap</span>
                    </div>

                    <SearchResultItem />
                    <SearchResultItem />

                </div>
            </div>

        </div>
    );

}
export default SearchPage;