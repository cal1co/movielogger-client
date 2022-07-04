import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Title from './pages/Title'
import SearchResults from './pages/SearchResults'

function Routers (){

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/search' element={<SearchResults />} />
            <Route path='/title' element={<Title/>} />
        </Routes>
    )

}

export default Routers