import '../style/Home.css'
import { useEffect, useState } from 'react'
import URLS from '../api/movieApi'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link';

function Home() {
    const [loading, setLoading] = useState(true)
    const [popularData, setPopularData] = useState(Object)
    const [topData, setTopData] = useState(Object)
    const [trendingData, setTrendingData] = useState(Object)
    const [scrollCount, setScrollCount] = useState(0)
    const [imgLoaded, setImgLoaded] = useState(Array<Number>)

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

    const incLoad = (num:Number) => {
        // let newArr = [...imgLoaded]
        // newArr.push(num)
        // setImgLoaded(newArr)
        // // if (imgLoaded.length === 60){
        // //     console.log('PAGE READY!!')
        // // }
        // console.log(newArr.length, num)
    }

    const renderResults = (input: Array<Object>, group:String) => {
        return input.map((movie: any, idx: number) => {
            return <div className="home-element" key={movie.id} id={`${group}-${idx+1}`}>
            <li key={movie.id}>
                <img src={URLS.POSTER + movie.poster_path} onLoad={() => incLoad(movie.id)}/>
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
        console.log(imgLoaded)
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
        // TODO: REFACTOR CODE TO COUNT LOADING OF EACH IMAGE. ADD LOADING SPINNER TO EACH BLOCK AND ONLY SHOW WHEN ALL IMAGES ARE READY
        // TODO: ADD A FADE IN EFFECT WHEN FINISHED LOADING
        // TODO: LINK TO A PAGE WITH MORE INFO ABOUT THE MOVIE
        // TODO: ALLOW USERS TO SEARCH FOR A FILM 
        // TODO: GET STARTED ON USERS AND BACKEND.
        <div className="home">
            {
                loading 
                ? 
                // <p>loading...(import loading animation)</p>
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                :
                <div className="home-results">
                    <div className="home-block">
                            <h1 className="title-text">
                                TODAY'S TOP PICKS ▶ 
                            </h1>
                        <div className="result-group" id='top-films'>
                            {
                                renderResults(popularData, 'top')
                            }
                        </div>
                        <button onClick={() => scrollGroup('top-films', false)}>L</button>
                        <button onClick={() => scrollGroup('top-films', true)}>R</button>
                    </div>
                    <div className="home-block">
                        <h1 className="title-text">
                            MOST POPULAR FILMS ▶ 
                        </h1>
                        <div className="result-group" id="popular-films">
                            {
                                renderResults(topData, 'pop')
                            }
                        </div>
                        <button onClick={() => scrollGroup('popular-films', false)}>L</button>
                        <button onClick={() => scrollGroup('popular-films', true)}>R</button>
                    </div>
                    <div className="home-block">
                        <h1 className="title-text">
                            THIS WEEKS TRENDING FILMS ▶ 
                        </h1>
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