import React, { Component } from 'react'

import SearchBar from './SearchBar';
import MovieList from "./MovieList";
import AddMovie from './AddMovie';

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import axios from 'axios';






class App extends Component {
    state = {
        movies: [],
        searchQuery: ""
    }

    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies");
        this.setState({ movies: response.data })
    }
    //DELETE MOVİE
    deleteMovie = (movie) => {

        axios.delete(`http://localhost:3002/movies/${movie.id}`)


        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );


        this.setState(state => ({
            movies: newMovieList
        }))
        /*     this.setState({
                movies: newMovieList
            })
         */


    }

    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value })
    }
    //ADD MOVİE
    addMovie = async (movie) => {
        await axios.post(`http://localhost:3002/movies/`, movie)
        this.setState(state => ({
            movies: state.movies.concat([movie])
        }))
    }
    render() {
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )
        return (
            <BrowserRouter>
                <div className='container '>
                    <Routes>
                        <Route path="/" element={
                            <div className='row' >

                                <div className='col-lg-12'>
                                    <SearchBar
                                        searhMovieProp={this.searchMovie} />
                                </div>
                                <MovieList
                                    movies={filteredMovies}
                                    deleteMovieProp={this.deleteMovie} />

                            </div>

                        } />
                        <Route path="/add" element={
                            <AddMovie
                                onAddMovie={(movie) => {
                                    this.addMovie(movie)

                                }}

                            />} />



                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}
export default App;


