import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import URLS from '../api/movieApi'
import serverUtils from '../api/server'

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
        const url = serverUtils.BASE + serverUtils.USER + 'find/'
        await axios.get(url + searchQuery)
            .then((res) => {
                setLoading(false)
                console.log(res.data)
                res.data.forEach((e:any) => {
                    console.log(JSON.parse(e.avatar).image)
                })
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
                    <div className="result-link-elem">
                        <div className="user-result-avi">
                            <svg className="user-result-profile-img" style={{backgroundColor: JSON.parse(user.avatar).color}} height='128px' width='128px'>
                                <image className="user-result-profile-img" href={(JSON.parse(user.avatar).image === 'https://ssl.gstatic.com/docs/common/profile/undefined_lg.png') ? 'https://ssl.gstatic.com/docs/common/profile/orangutan_lg.png' : JSON.parse(user.avatar).image}></image> 
                            </svg>
                        </div>
                        <div className="user-result-username">
                            <p>@{user.username}</p>
                        </div>
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
                <div className="user-result-block">
                    {
                        renderResults(results)
                    }
                </div>
            }

        </div>
    )


}

export default UserSearch