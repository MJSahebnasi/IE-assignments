import React from 'react';
import { useState } from 'react';

import MutualHeader from './MutualHeader';
import SearchResultItem from './SearchResultItem';

function SearchPage(props) {

    const [searchResults, setSearchResults] = useState([]);
    let [pageBottom, setPageBottom] = useState();

    const searchRequestToApi = (query) => {
        const url = "https://api.coingecko.com/api/v3/coins/markets";
        const params = "vs_currency=usd&ids=" + query;

        // getting data:
        // we don't want the list of all coins, we ignore empty queries (see api docs):
        if (query || query.length > 0) {
            let xhttp = new XMLHttpRequest();
            xhttp.addEventListener("readystatechange", () => {
                if (xhttp.readyState === 4) {

                    console.log("inside");

                    if (xhttp.status === 200) {
                        // request successful
                        let data = JSON.parse(xhttp.responseText);

                        setSearchResults(data);
                    } else {
                        // request failed
                        console.log("error getting data");
                    }
                }
            });

            xhttp.open("GET", url + "?" + params);
            xhttp.send();
        }
        else {
            setSearchResults([]);
        }
        console.log("data: ", searchResults);
    }

    // when results are recieved, we scroll to the bottom of the page:
    const scrollToBottom = () => {
        let div = document.getElementById("scroll_div");
        div.scrollIntoView({ behavior: "smooth" });
    }

    // whenever input in searchbar is changed:
    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log("input: ", value);
        searchRequestToApi(value);
    }

    const searchResultItems = [];
    for (let i = 0; i < searchResults.length; i++) {
        searchResultItems.push(<SearchResultItem 
            key={i}
            name={searchResults[i].name}
            price={searchResults[i].current_price}
            price_change_percentage_24h={searchResults[i].price_change_percentage_24h}
            market_cap={searchResults[i].market_cap}
            symbol={searchResults[i].symbol}
        />)
    }

    if (searchResultItems.length > 0){
        if (pageBottom)
            scrollToBottom();

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
                            <input type={'text'} id='search_bar'
                                placeholder='one or more coin names (comma separated) - e.g: bitcoin, cardano'
                                onChange={handleChange}>
                            </input>
                        </form>
                    </div>
                    <div id='search_results'>
                        <div id='search_results_header' className='search_results_row'>
                            <span id='searchpage_coin_span'>Coin</span>
                            <span>Price</span>
                            <span>24h Change</span>
                            <span>Market Cap</span>
                        </div>

                        {searchResultItems}

                        {/* I use this dummy div to scroll to bottom of the page: */}
                        <div id='scroll_div' ref={(el) => { setPageBottom(el); }}></div>

                    </div>

                </div>

            </div>
        );
    }

    // when nothin is searched:
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
                        <input type={'text'} id='search_bar'
                            placeholder='one or more coin names (comma separated) - e.g: bitcoin, cardano'
                            onChange={handleChange}>
                        </input>
                    </form>
                </div>
            </div>
        </div>
    );

}
export default SearchPage;