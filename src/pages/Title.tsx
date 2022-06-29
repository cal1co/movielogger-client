import '../style/Title.css'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import URLS from '../api/movieApi'

function Title() {
    const [filmData, setFilmData] = useState(Object)
    const [filmId, setFilmId] = useState(Number)
    const [loading, setLoading] = useState(true)
    const [backdropLoaded, setBackdropLoaded] = useState(false)
    const location = useLocation()


    useEffect(() => {
        getTitleData()
    }, [filmId])

    const getTitleData = () => {
        if (location.state !== null){
            const { movieInfo } = location.state
            // console.log("MOVIE INFO", movieInfo.backdrop_path)
            setFilmId(movieInfo.id)
            setFilmData(movieInfo)
            // console.log(filmData.backdrop_path, "PATH")
        } else {
            let arr = location.search.split('')
            arr.splice(0,4)
            let movieId = parseInt(arr.join(''))
            setFilmId(movieId)
            console.log('location', movieId)
            axios.get(URLS.HEAD + movieId + URLS.KEY)
            .then((res) => {
                console.log(res.data)
                setFilmData(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
        }
        setLoading(false)
    }
    // let filmData = 
    // {   "adult": false,   "backdrop_path": "/sd4xN5xi8tKRPrJOWwNiZEile7f.jpg",   "belongs_to_collection": {     "id": 87118,     "name": "Cars Collection",     "poster_path": "/ooYvY9DMEdUHH2dOPHbZmyfMENy.jpg",     "backdrop_path": "/A8DqaTGwZ8iCEjWMNRsZumzfKLw.jpg"   },   "budget": 120000000,   "genres": [     {       "id": 16,       "name": "Animation"     },     {       "id": 12,       "name": "Adventure"     },     {       "id": 35,       "name": "Comedy"     },     {       "id": 10751,       "name": "Family"     }   ],   "homepage": "http://disney.go.com/disneyvideos/animatedfilms/cars/",   "id": 920,   "imdb_id": "tt0317219",   "original_language": "en",   "original_title": "Cars",   "overview": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",   "popularity": 83.826,   "poster_path": "/qa6HCwP4Z15l3hpsASz3auugEW6.jpg",   "production_companies": [     {       "id": 2,       "logo_path": "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",       "name": "Walt Disney Pictures",       "origin_country": "US"     },     {       "id": 3,       "logo_path": "/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png",       "name": "Pixar",       "origin_country": "US"     }   ],   "production_countries": [     {       "iso_3166_1": "US",       "name": "United States of America"     }   ],   "release_date": "2006-06-08",   "revenue": 461983149,   "runtime": 117,   "spoken_languages": [     {       "english_name": "English",       "iso_639_1": "en",       "name": "English"     },     {       "english_name": "Italian",       "iso_639_1": "it",       "name": "Italiano"     },     {       "english_name": "Japanese",       "iso_639_1": "ja",       "name": "日本語"     },     {       "english_name": "Yiddish",       "iso_639_1": "yi",       "name": ""     }   ],   "status": "Released",   "tagline": "Ahhh... it's got that new movie smell.",   "title": "Cars",   "video": false,   "vote_average": 6.9,   "vote_count": 11709 }

    return (
        <div className="film-page">
            {
                loading 
                ?
                <div className="loading-msg">
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    <div>Fetching data...</div>
                </div>
                :
                <div>
                    <div className="loading-msg" style={{display: backdropLoaded ? 'none' : 'inline-block'}}>
                        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                        <div>Loading resources...</div>
                    </div>
                    
                    <div className="search-element">
                    </div>
                    <div className="search-element" key={filmData.id} style={{display: backdropLoaded ? 'inline-block' : 'none'}}>
                        <img className="title-img" src={URLS.POSTER + filmData.poster_path}/>
                        <img className="backdrop" src={URLS.BACKDROP + filmData.backdrop_path} onLoad={() => setBackdropLoaded(true)}/>
                        <div className="user-rate">
                            {filmData.vote_average} rate
                        </div>
                        <div className="filmData-info">
                            <p className="title-name">{filmData.original_title}</p>
                                
                            <p className="overview">{filmData.overview}</p>
                            <button>+ Watch list</button>
                        </div>
                    </div>
                </div>
                // renderTitle
            }
        </div>
    )

}

export default Title