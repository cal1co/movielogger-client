import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import URLS from '../api/movieApi'


function searchResults(){
    const [loading, setLoading] = useState(true)
    const [results, setResults] = useState([])
    const [query, setQuery] = useState('')

    const location:any = useLocation()
    const searchQuery = location.search.slice(7)

    useEffect(() => {
        execSearch()
    }, [searchQuery])

    const execSearch = async () => {
        setLoading(true)
        await getSearchData()
    }
    // execSearch // RECENTLY COMMENTED IF SOMETHING BREAKS IT'S HERE LOL <---------
    const getSearchData = async () => {
        // setLoading(true)
        await axios.get(URLS.SEARCH + searchQuery)
            .then((res) => {
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
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="ipc-icon ipc-icon--star-inline" id="iconContext-star-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                        {movie.vote_average}  
                    </div>
                </div>
                <div className="movie-info">
                    <Link to={`/title/show?id=${movie.id}`} state={{movieInfo: movie}}>
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
            <div className="search-query">
                RESULTS FOR:
                <div>"{ searchQuery }"</div>
            </div>

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