import '../style/Home.css'
import { useEffect, useState } from 'react'
import URLS from '../api/movieApi'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link';
let url = 'https://api.watchmode.com/v1/title/movie-238/v1/regions/AU/sources?apiKey=m41SbAcsqhiThRroL97PRr3qpdOVz16h46CfVjhS'
function Home() {
    const [loading, setLoading] = useState(true)
    const [popularData, setPopularData] = useState(Object)
    const [topData, setTopData] = useState(Object)
    const [trendingData, setTrendingData] = useState(Object)
    const [scrollCount, setScrollCount] = useState(0)

    useEffect(() => {
        getHomePageFilmData()
    }, [loading])

    const getHomePageFilmData = async () => {
        await getPopularFilms()
        await getTopFilms()
        await getTredingFilmsWeekly()
        setLoading(false)
    }
    
    const getPopularFilms = async () => {
        await axios.get(URLS.POPULAR)
        .then((res) => {
            setPopularData(res.data.results)
        })
        .catch((err) => {
            console.error(err)
        })
    }
    
    const getTopFilms = async () => {
        await axios.get(URLS.TOP_RATED)
        .then((res) => {
            console.log(res.data.results)
            setTopData(res.data.results)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    const getTredingFilmsWeekly = async () => {
        await axios.get(URLS.TRENDING)
        .then((res) => {
            setTrendingData(res.data.results)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    const renderResults = (input: Array<Object>, group:String) => {
        return input.map((movie: any, idx: number) => {
            return <div className="home-element" key={movie.id} id={`${group}-${idx+1}`}>
            <li key={movie.id}>
                <img src={URLS.POSTER + movie.poster_path} />
                <div className="movie-info">
                    <div className="user-rate">
                        {movie.vote_average} rate
                    </div>
                    <p className="film-title">{movie.original_title}</p>
                    <button>+ Watch list</button>
                </div>
            </li>
            </div>
        })
    } 

    const scrollGroup = (elem:string, right:boolean) => {
        let target = document.getElementById(elem)
        if (target){
            let scrollVal = 75 * (document.documentElement.clientWidth / 100)
            console.log(scrollVal)
            if (scrollCount === 4 && right){
                target.scrollLeft = 0
                let count = 0
                setScrollCount(count)
            } else {
                if (right){
                    target.scrollLeft += scrollVal
                    let count = scrollCount + 1 
                    setScrollCount(count)
                } else {
                    target.scrollLeft -= scrollVal

                    if (scrollCount !== 0){
                        let count = scrollCount - 1 
                        setScrollCount(count)
                    }
                }
            }
        }
    }

    return (
        <div className="home">
            {
                loading 
                ? 
                <p>loading...(import loading animation)</p>
                :
                <div className="home-results">
                    <div className="home-block">
                            TODAY'S TOP PICKS:
                        <div className="result-group" id='top-films'>
                            {
                                renderResults(popularData, 'top')
                            }
                        </div>
                        <button onClick={() => scrollGroup('top-films', false)}>L</button>
                        <button onClick={() => scrollGroup('top-films', true)}>R</button>
                    </div>
                    <div className="home-block">
                            MOST POPULAR FILMS:
                        <div className="result-group" id="popular-films">
                            {
                                renderResults(topData, 'pop')
                            }
                        </div>
                        <button onClick={() => scrollGroup('popular-films', false)}>L</button>
                        <button onClick={() => scrollGroup('popular-films', true)}>R</button>
                    </div>
                    <div className="home-block">
                            THIS WEEKS TRENDING FILMS:
                        <div className="result-group" id="trending-films">
                            {
                                renderResults(trendingData, 'trend')
                            }
                        </div>
                        <button onClick={() => scrollGroup('trending-films', false)}>L</button>
                        <button onClick={() => scrollGroup('trending-films', true)}>R</button>
                    </div>
                </div>
            }
        </div>
    )


}

export default Home 