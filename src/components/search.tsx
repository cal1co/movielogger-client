import { useState } from 'react'
import axios from 'axios'
import SEARCH_URL from '../api/movieApi'


function Search() {
    const [query, setQuery] = useState("")

    const newQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

    const search = () => {
        console.log('Searching for title:', query)

        axios.get(SEARCH_URL + query)
        .then((res) => {
            console.log(res.data.results)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
      <div className="Search">
          <input placeholder={"Search for a title"} type={"text"} onChange={newQuery}></input>
          <button onClick={search}>Search</button> 
      </div>
    )
  }
  
  export default Search
  