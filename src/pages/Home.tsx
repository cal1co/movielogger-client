import { useEffect, useState } from 'react'
import URLS from '../api/movieApi'
import axios from 'axios'


function Home() {
    const [loading, setLoading] = useState(true)
    const [popularData, setPopularData] = useState(Object)
    const [topData, setTopData] = useState(Object)
    const [trendingData, setTrendingData] = useState(Object)

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

    const renderResults = (input: Array<Object>) => {
        return input.map((movie: any, idx: number) => {
            return <li key={movie.id}>
                <p>#{idx + 1} {movie.original_title}</p>
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
                            renderResults(popularData)
                        }
                    </div>
                    <div className="popularResults">
                        MOST POPULAR FILMS:
                        {
                            renderResults(topData)
                        }
                    </div>
                    <div className="trendingResults">
                        THIS WEEKS TRENDING FILMS:
                        {
                            renderResults(trendingData)
                        }
                    </div>
                </div>
            }
        </div>
    )


}

export default Home 