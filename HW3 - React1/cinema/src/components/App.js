import React from 'react';
import MovieCard from './MovieCard';
import MovieDetail from './MovieDetail';
import NotFound from './NotFound';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// I've used some of the techniques of this tutorial:
// https://www.youtube.com/watch?v=Law7wfdg_ls

export default function App() {

    useEffect(() => {
        fetchMovies();
    }, []);

    let [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const data = await fetch(
            "http://localhost:9000/movies/"
        )
        const dataObj = await data.json();
        setMovies(dataObj);
    }

    return (
        <div className='card-list'>
            <Router>
                {movies.map(movie => (
                    <Switch key={movie.id}>
                        <Route path={'/'} exact render={(props) => <MovieCard movie={movie} />} />
                        <Route path={`/movies/${movie.id}`} exact render={(props) => <MovieDetail id={movie.id} />} />
                        {/* <Route path={'/'} component={NotFound} /> */}
                    </Switch>
                ))}
            </Router>
        </div>
    );
}
