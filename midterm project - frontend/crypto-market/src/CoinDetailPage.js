import React from 'react';
import { useState, useEffect } from 'react';

import MutualHeader from './MutualHeader';

function CoinDetailPage(props) {

    const [coinData, setCoinData] = useState();

    useEffect(() => {
        coinRequestToApi(props.coinId);
    }, []);

    const coinRequestToApi = (coinId) => {
        const url = "https://api.coingecko.com/api/v3/coins/" + coinId;

        // getting data:
        // we don't want the list of all coins, we ignore empty queries (see api docs):

        let xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", () => {
            if (xhttp.readyState === 4) {

                if (xhttp.status === 200) {
                    // request successful
                    let data = JSON.parse(xhttp.responseText);
                    setCoinData(data);
                } else {
                    // request failed
                    console.log("error getting coin data");
                }
            }
        });

        xhttp.open("GET", url);
        xhttp.send();
    }

    if (!coinData)
        return (
            <div>loading ...</div>
        );

    return (
        <div id='CoinDetailPage'>

            <MutualHeader />
            <div id='CoinDetailPage_body'>
                <div>
                    <img src={coinData.image['large']} />
                </div>
                <div>
                    <b>{coinData.name}</b>
                </div>
                <div id='description_div'>
                    {String(coinData.description['en'])}
                </div>

                <div>
                    <h1>Rank: {coinData.market_cap_rank}</h1>
                </div>
                <div>
                    <h1>Price: $ {coinData.market_data['current_price']['usd']}</h1>
                </div>
                <div>
                    <h1>Market Cap: $ {Math.floor(coinData.market_data['market_cap']['usd']/1000000) } M</h1>
                </div>

            </div>

        </div>
    );

}
export default CoinDetailPage;