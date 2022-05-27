import React from 'react';


function SearchResultItem(props) {

    return (
        <div className='search_results_row SearchResultItem'>
            <span id='searchpage_coin_span'>{props.name}, {props.symbol}</span>
            <span>$ {props.price}</span>
            <span>{props.price_change_percentage_24h} %</span>
            <span>$ {Math.floor(props.market_cap / 1000000)} M</span>
        </div>
    );

}
export default SearchResultItem;