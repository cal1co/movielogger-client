import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
// import URLS from '../api/MovieApi'
import React from 'react'
import '../style/Search.css'
import movieImg from '../images/film.png'
import user from '../images/user.png'

function Search() {
    const [query, setQuery] = useState("")
    const [searchSelected, setSearchSelected] = useState(true)
    const [optionSelected, setOptionSelected] = useState(false)

    const newQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setQuery(encodeURIComponent(event.target.value))
    }

    const toggleSearchType = () => {
        if (searchSelected){
            setSearchSelected(false)
        } else {
            setSearchSelected(true)
        }
    }

    return (
      <div className="Search">
        <div className="navSearch">

        <button className="search-option title-opt" style={{display: searchSelected ? 'block' : 'none'}} onClick={toggleSearchType}>
            <img src={movieImg} className="search-opt-img" style={{display: searchSelected ? 'block' : 'none'}}/>
        </button>

        <button className="search-option user-opt" style={{display: searchSelected ? 'none' : 'block'}} onClick={toggleSearchType}>
            <img src={user} className="search-opt-img" style={{display: searchSelected ? 'none' : 'block'}}/>
        </button>

        
        <form className="searchform">
            <input name="search" className="search-input" placeholder={"Search for a title"} type={"text"} onChange={newQuery}></input>
            <Link to={searchSelected ? `/title/search?query=${encodeURIComponent(query)}` : `/user/search?query=${encodeURIComponent(query)}`} state={{searchQuery: decodeURIComponent(query)}}>
                <button type="submit" className="search-butt">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="magnify" id="iconContext-magnify" viewBox="0 0 24 24" fill="black" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                </button> 

            </Link>
        </form>
        </div>
      </div>
    )
    
}

export default Search
  