import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import SearchMovie from "./pages/SearchMovie"
import App from './App'

ReactDOM.hydrate(
    <BrowserRouter>
        <Routes>
            <Route path="/search" exact element={<SearchMovie />} />
            <Route path="/search" exact element={<SearchMovie />} />
            <Route path="/" exact element={<Navigate replace to="/search" />} />
        </Routes>
    </BrowserRouter>,
    document.querySelector('#root')
);