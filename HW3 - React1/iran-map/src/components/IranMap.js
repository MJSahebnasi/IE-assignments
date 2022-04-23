import React from 'react';

import './IranMap.css';

import CityModal from './CityModal';


class IranMap extends React.Component {

    state = {
        citiesData: null,
        selectedCity: null,
        isModalOpen: false,
    };


    componentDidMount(){
        // get data
        let xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", () => {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    // request successful
                    let data = JSON.parse(xhttp.responseText);
     
                    this.setState({
                        citiesData: data
                    }); 
                    
                } else {
                    // request failed
                    console.log("error getting data")
                }
            }
        });
        xhttp.open("GET", "http://localhost:9000/cities/");
        xhttp.send();
    }

    cityClicked = (id) => (event) => {

        event.preventDefault();
        // Fetch city details
        let xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", () => {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    // request successful
                    let data = JSON.parse(xhttp.responseText);
     
                    this.setState({
                        selectedCity: data
                    });          

                    //open modal
                    this.setState({
                        isModalOpen: true,
                    });
                } else {
                    // request failed
                    console.log("error getting data")
                }
            }
        });
        xhttp.open("GET", "http://localhost:9000/cities/"+id);
        xhttp.send();  
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        });
    };

    render() {
        return (
            <div>
                <div className="map-container">
                    {(this.state.citiesData || []).map((record) => (
                        <div
                            key={record.id}
                            className="city-name"
                            style={{
                                top: `${record.top}%`,
                                left: `${record.left}%`,
                            }}
                            onClick={this.cityClicked(record.id)}
                        >
                            {record.name}
                        </div>
                    ))}
                </div>
                <CityModal
                    city={this.state.selectedCity}
                    isOpen={this.state.isModalOpen}
                    onClose={this.closeModal}
                />
            </div>
        );
    }
}

export default IranMap;
