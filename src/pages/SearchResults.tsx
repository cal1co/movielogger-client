import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import URLS from '../api/movieApi'

function searchResults(){
    const [loading, setLoading] = useState(true)
    const [results, setResults] = useState({})
    const [query, setQuery] = useState('')

    const location = useLocation()
    const { searchQuery } = location.state

    useEffect(() => {
        console.log("QUERY HERE", searchQuery)
        execSearch()
        // return () => console.log("IM OUT")
    }, [searchQuery])

    const execSearch = async () => {
        setLoading(true)
        await getSearchData()
    }
    execSearch
    const getSearchData = async () => {
        // setLoading(true)
        await axios.get(URLS.SEARCH + searchQuery)
            .then((res) => {
                console.log(res.data.results)
                setLoading(false)
                setResults(res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const renderResults = (input: Array<Object>) => {
        return input.map((movie: any, idx: number) => {
            return <div className="search-element" key={movie.id} id={`${idx+1}`}>
                <div className="poster-side" key={movie.id}>
                    <img className="search-img" src={URLS.POSTER + movie.poster_path}/>
                    <div className="user-rate">
                        {movie.vote_average} rate
                    </div>
                </div>
                <div className="movie-info">
                    <Link to={`/title?id=${movie.id}`} state={{movieInfo: movie}}>
                    <p className="film-title">{movie.original_title} ({movie.release_date})</p>
                    </Link>
                        
                    <p className="overview">{movie.overview}</p>
                    <button>+ Watch list</button>
                </div>
            </div>
        })
    } 


    return (
        <div className="searchResults">
            RESULTS FOR: "{ decodeURIComponent(searchQuery) }"

            {
                loading
                ?
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                :
                <div className="result-block">
                    {
                        renderResults(results)
                    }
                </div>
            }
        </div>
    )

}

export default searchResults