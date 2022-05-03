import { useState, useEffect } from 'react';


function F() {
    const [data, setData] = useState(require('./data/data.json'));
    useEffect(() => {
        setData(require('./data/data.json'));
    }, []);

    // let [productsData, setProductsData] = useState();

    // useEffect(() => {
    //     console.log('strt');
    //     fetch('./data/data.json'
    //         , {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function (response) {
    //             console.log('resp', response);

    //             return response.json();
    //         })
    //         .then(function (myJson) {
    //             setProductsData(myJson);
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    //     // setProductsData(JSON.parse('data/data.json'));
    //     // console.log();
    // }, []);

    // console.log(data);
    // console.log(typeof data);

    // if (!data) {
    //     return <p>Loading...</p>;
    // }

    // return (
    //     <div>{data.id}</div>
    //     // <div>a</div>
    // );
}

export default F;