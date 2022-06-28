import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'

function Routers (){

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/search' element={<SearchResults />} />
        </Routes>
    )

}

export default Routers