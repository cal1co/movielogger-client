import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import URLS from '../api/movieApi'


function UserSearch() {
    const [loading, setLoading] = useState(true)
    const [results, setResults] = useState([])

    const location:any = useLocation()
    const searchQuery = location.search.slice(7)

    useEffect(() => {
        execSearch()
    }, [searchQuery])

    const execSearch = async () => {
        setLoading(true)
        await getSearchData()
    }

    const getSearchData = async () => {
        // setLoading(true)
        await axios.get('http://localhost:8080/user/find/' + searchQuery)
            .then((res) => {
                setLoading(false)
                setResults(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const renderResults = (input: Array<Object>) => {
        return input.map((user:any, idx:number) => {
            return <div className="user-result-element">
                <Link to={`/${user.username}`}>

                    <div className="user-result-avi">
                        <svg className="user-result-profile-img" style={{backgroundColor: JSON.parse(user.avatar).color}} height='128px' width='128px'>
                            <image href={JSON.parse(user.avatar).image}></image> 
                        </svg>
                    </div>
                    <div className="user-result-username">
                        {user.username}
                    </div>
                </Link>

            </div>
        })
    }
    return (
        <div className="user-search-results">

            <div className="search-query">
                RESTULS FOR USER QUERY:
                <div>"@{ decodeURIComponent(searchQuery) }"</div>
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

export default UserSearch