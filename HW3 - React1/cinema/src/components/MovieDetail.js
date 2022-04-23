import React from 'react';
// import { Link } from 'react-router-dom';

export default class MovieDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: {}
        }
    }

    componentDidMount(){
        let xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", () => {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    // request successful
                    let data = JSON.parse(xhttp.responseText);
                    // console.log('data', data);
     
                    this.setState({
                        movie: data
                    });          
                } else {
                    // request failed
                    console.log("error getting data")
                }
            }
        });
        // console.log('detail',this.props.id);
        xhttp.open("GET", "http://localhost:9000/movies/"+this.props.id);
        xhttp.send();  
    }

    render() {
        return (
            <div className='movie-detail container'>
                <img className='movie-banner' src={this.state.movie.banner} alt=""/>
                <div className="detail-body">
                    <div>
                        <h2 className="card-title">{this.state.movie.title}
                            <span className='release-year'> {this.state.movie.release_year}</span>
                        </h2>
                        <div className='detail-description'>
                            <p className='card-description'>{this.state.movie.description}</p>
                        </div>
                    </div>
                    <div className='images'>
                        <img className='detail-img' src={this.state.movie.image} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
