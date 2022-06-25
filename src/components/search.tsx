import { useState } from 'react'
import axios from 'axios'
import URLS from '../api/movieApi'


function Search() {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState({})

    const newQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
        console.log("EKHKABC???")
    }

    const renderResults = (input: Array<Object>) => {
        return input.map((movie: any, idx: number) => {
            return <li key={movie.id}>
                <p>MOVIE: {movie.original_title}</p>
            </li>
        })

    }


    const search = () => {
        console.log('Searching for title:', query)
        console.log("SEARCH DEBUG", URLS.SEARCH)
        // axios.get(URLS.SEARCH + query)
        // .then((res) => {
        //     console.log(res.data.results)
        //     renderResults(res.data.results)
        //     setSearched(true)
        //     setResults(res.data.results)
        // })
        // .catch((err) => {
        //     console.log('blah',URLS.SEARCH)
        //     console.log(err)
        // })
    }

    return (
      <div className="Search">
          <input placeholder={"Search for a title"} type={"text"} onChange={newQuery}></input>
          <button onClick={search}>Search</button> 
          <div className="searchRes">

        </div>
      </div>
    )
}

export default Search
  