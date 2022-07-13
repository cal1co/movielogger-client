import React from 'react'
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
        await getTrendingFilmsWeekly()
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
            // console.log(res.data.results)
            setTopData(res.data.results)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    const getTrendingFilmsWeekly = async () => {
        await axios.get(URLS.TRENDING)
        .then((res) => {
            setTrendingData(res.data.results)
        })
        .catch((err) => {
            console.error(err)
        })
    }
    const handleLoad = async (id:number) => {
        imgLoaded.push(id)
        if (imgLoaded.length === 60){
            console.log('all images ready!')
        }
    }

    const renderResults = (input: Array<Object>, group:String) => {
        return input.map((movie: any, idx: number) => {
            return <div className="home-element" key={movie.id} id={`${group}-${idx+1}`}>
            <li key={movie.id}>
                <Link to={`/title/show?id=${movie.id}`}>
                    <img className="res-img" src={URLS.POSTER + movie.poster_path} onLoad={() => handleLoad(idx)}/>
                </Link>
                <div className="movie-info">
                    <div className="user-rate">
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="ipc-icon ipc-icon--star-inline" id="iconContext-star-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                        {movie.vote_average} 
                    </div>
                    <Link to={`/title/show?id=${movie.id}`} state={{movieInfo: movie}}>
                    <p className="film-title">{movie.original_title}</p>
                    </Link>
                </div>
            </li>
            </div>
        })
    } 

    const scrollGroup = (elem:string, right:boolean) => {
        let target = document.getElementById(elem)
        // console.log(target ,document.documentElement.clientWidth)
        if (target){
            let scrollVal = (document.documentElement.clientWidth)
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
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                :
                <div className="home-results">
                    <div className="home-block"></div>

                    <div className="home-block">
                            <h1 className="title-text">
                                TODAY'S TOP PICKS ▶ 
                            </h1>
                        <div className="result-group" id='top-films'>
                            {
                                renderResults(popularData, 'top')
                            }
                        </div>
                        <button className="arrow left" onClick={() => scrollGroup('top-films', false)}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="scroll-arrow scroll-arrow--chevron-left-inline scroll-arrow--inline ipc-pager-icon" id="iconContext-chevron-left-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path></svg>

                        </button>
                        
                        <button className="arrow right" onClick={() => scrollGroup('top-films', true)}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="scroll-arrow scroll-arrow--chevron-right-inline scroll-arrow--inline ipc-pager-icon" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg>
                        </button>
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
                        <button className="arrow left" onClick={() => scrollGroup('popular-films', false)}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="scroll-arrow scroll-arrow--chevron-left-inline scroll-arrow--inline ipc-pager-icon" id="iconContext-chevron-left-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path></svg>
                        </button>
                        <button className="arrow right" onClick={() => scrollGroup('popular-films', true)}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="scroll-arrow scroll-arrow--chevron-right-inline scroll-arrow--inline ipc-pager-icon" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg>
                        </button>
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
                        <button className="arrow left" onClick={() => scrollGroup('trending-films', false)}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="scroll-arrow scroll-arrow--chevron-left-inline scroll-arrow--inline ipc-pager-icon" id="iconContext-chevron-left-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path></svg>
                        </button>
                        <button className="arrow right" onClick={() => scrollGroup('trending-films', true)}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="scroll-arrow scroll-arrow--chevron-right-inline scroll-arrow--inline ipc-pager-icon" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg>
                        </button>
                    </div>
                </div>
            }
        </div>
    )


}

export default Home 