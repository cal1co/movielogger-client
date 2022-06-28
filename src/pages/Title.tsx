import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import URLS from '../api/movieApi'

function Title() {

    const location = useLocation()
    if (location.state !== null){
        const { movieInfo } = location.state
        console.log("MOVIE INFO", movieInfo)
    } else {
        let arr = location.search.split('')
        arr.splice(0,4)
        let movieId = arr.join('')
        console.log('location', movieId)
        axios.get(URLS.HEAD + movieId + URLS.KEY)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    return (
        <div className="film-page">
            FILM INFO GOES HERE
        </div>
    )

}

export default Title