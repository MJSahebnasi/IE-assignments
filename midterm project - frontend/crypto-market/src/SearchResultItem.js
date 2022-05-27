import React from 'react';
import { Link } from 'react-router-dom';


function SearchResultItem(props) {

    return (
        <Link to={'/'+props.coinId} style={{all:'unset'}}> 
            <div className='search_results_row SearchResultItem'>
                <span id='searchpage_coin_span'>{props.name}, {props.symbol}</span>
                <span>$ {props.price}</span>
                <span>{props.price_change_percentage_24h} %</span>
                <span>$ {Math.floor(props.market_cap / 1000000)} M</span>
            </div>
        </Link>
    );

}
export default SearchResultItem;