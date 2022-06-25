import { useEffect, useState } from 'react'
import URLS from '../api/movieApi'
import axios from 'axios'


function Home() {
    
    const [loading, setLoading] = useState(true)
    const [popularData, setPopularData] = useState(Object)
    const [topData, setTopData] = useState(Object)
    const [trendingData, setTrendingData] = useState(Object)

    useEffect(() => {
        getPopularFilms()
        getTopFilms()
        getTrendingFilms()
        console.log(URLS.POPULAR)
    }, [loading])

    const getPopularFilms = () => {
        axios.get(URLS.POPULAR)
        .then((res) => {
            console.log(res.data)
            setLoading(false)
            setPopularData(res.data.results)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    const getTopFilms = () => {
        axios.get(URLS.TOP_RATED)
        .then((res) => {
            console.log(res.data)
            setLoading(false)
            setTopData(res.data.results)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    const getTrendingFilms = () => {
        axios.get(URLS.TRENDING)
        .then((res) => {
            console.log(res.data)
            setLoading(false)
            setTrendingData(res.data.results)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    const renderPopularResults = (input: Array<Object>) => {
        return input.map((movie: any, idx: number) => {
            return <li key={movie.id}>
                <p>MOVIE: {movie.original_title}</p>
                <img src={URLS.POSTER + movie.poster_path}></img>
            </li>
        })
    }
    const renderTopResults = (input: Array<Object>) => {
        return input.map((movie: any, idx: number) => {
            return <li key={movie.id}>
                <p>MOVIE: {movie.original_title}</p>
                <img src={URLS.POSTER + movie.poster_path}></img>
            </li>
        })
    }
    const renderTrendingResults = (input: Array<Object>) => {
        return input.map((movie: any, idx: number) => {
            return <li key={movie.id}>
                <p>MOVIE: {movie.original_title}</p>
                <img src={URLS.POSTER + movie.poster_path}></img>
            </li>
        })
    }

    return (
        <div className="home">
            {
                loading 
                ? 
                <p>loading...(import loading animation)</p>
                :
                <div>
                    <div className="popularResults">
                        TODAY'S TOP PICKS:
                        {
                            renderPopularResults(popularData)
                        }
                    </div>
                    <div className="popularResults">
                        MOST POPULAR FILMS:
                        {
                            renderTopResults(topData)
                        }
                    </div>
                    <div className="trendingResults">
                        THIS WEEKS TRENDING FILMS:
                        {
                            renderTrendingResults(trendingData)
                        }
                    </div>
                </div>
            }
        </div>
    )


}

export default Home 