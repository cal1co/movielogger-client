import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Title from './pages/Title'
import User from './pages/User'
import SearchResults from './pages/SearchResults'

function Routers (){

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<User />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/signup" element={<Signup />} />
            <Route path='/title/search' element={<SearchResults />} />
            <Route path='/title/show' element={<Title/>} />
        </Routes>
    )

}

export default Routers