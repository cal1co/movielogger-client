import { useEffect, useState } from 'react'
import URLS from '../api/movieApi'
import axios from 'axios'


function Home() {
    
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {
        getPopularFilms()
        console.log(URLS.POPULAR)
    }, [loading])

    const getPopularFilms = () => {
        axios.get(URLS.POPULAR)
        .then((res) => {
            console.log(res.data)
            setLoading(false)
            setData(res.data.results)
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

    return (
        <div className="home">
            TODAYS TOP PICKS: 
            {
                loading 
                ? 
                <p>loading...</p>
                :
                <div className="popularResults">
                    {
                        renderPopularResults(data)
                    }
                </div>
            }
        </div>
    )


}

export default Home 