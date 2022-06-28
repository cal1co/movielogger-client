import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import URLS from '../api/movieApi'

function searchResults(){
    const [loading, setLoading] = useState(true)
    const [results, setResults] = useState({})

    const location = useLocation()
    const { searchQuery } = location.state

    useEffect(() => {
        getSearchData()
    }, [loading])

    const getSearchData = async () => {
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



    return (
        <div className="searchResults">
            RESULTS FOR: "{ decodeURIComponent(searchQuery) }"

            {
                loading
                ?
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                :
                <div>
                    query loaded 
                </div>
            }
        </div>
    )

}

export default searchResults