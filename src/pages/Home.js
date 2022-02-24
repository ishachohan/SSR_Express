import React, { useEffect } from "react";
import "./Home.css"
import ErrorBoundary from "../ErrorBoundary";
import Header1 from "./Header1";
import { useDispatch, useSelector } from "react-redux";
import {loadMovies} from '../store/movies'
import { Router, Routes, Route, Navigate } from "react-router";
import SearchMovie from './SearchMovie';
import PageNotFound from '../PageNotFound';
import MovieDetails from './MovieDetails/MovieDetails';

function Homepage () {
    const dispatch = useDispatch();
    const moviesList = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadMovies());
    }, [dispatch]);

        return(
            <div className="Header">
                <ErrorBoundary>
                    <Router>
                        <Routes>
                            <Route path="/search" exact element={<SearchMovie />} >
                            <Route path=":searchQuery" element={ <SearchMovie />} />
                            <Route path="?genre=:genreName" element={ <SearchMovie />} />
                            <Route path="?sortBy=:sortName" element={ <SearchMovie />} />
                            <Route path="?movie=:movieId" element={ <MovieDetails />} />
                            </Route>
                            <Route path="/" exact element={<Navigate replace to="/search" />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </Router>
                    
                </ErrorBoundary>
            </div>
        );
}
export default Homepage
