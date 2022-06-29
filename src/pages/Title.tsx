import '../style/Title.css'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import URLS from '../api/movieApi'

function Title() {
    const [filmData, setFilmData] = useState(Object)
    const [filmId, setFilmId] = useState(Number)
    const [loading, setLoading] = useState(true)
    const [backdropLoaded, setBackdropLoaded] = useState(false)
    const [services, setServices] = useState(Object)
    const [fetchedServices, setFetchedServices] = useState(false)
    const location = useLocation()


    useEffect(() => {
        getTitleData()
    }, [filmId])

    const getTitleData = async () => {
        if (location.state !== null){
            const { movieInfo } = location.state
            // console.log("MOVIE INFO", movieInfo.backdrop_path)
            setFilmId(movieInfo.id)
            setFilmData(movieInfo)
            // console.log(filmData.backdrop_path, "PATH")
        } else {
            let arr = location.search.split('')
            arr.splice(0,4)
            let movieId = parseInt(arr.join(''))
            setFilmId(movieId)
            console.log('location', movieId)
            await axios.get(URLS.HEAD + movieId + URLS.KEY)
            .then((res) => {
                console.log(res.data)
                setFilmData(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
        }
        await getServices(filmId)
        setLoading(false)
    }
   
    const getServices = async (input:number) => {
        if (input !== 0){

            console.log(input)
            await axios.get(URLS.HEAD + input + URLS.SERVICES)
            .then((res) => {
                console.log("RESULTS!!!", res.data.results.AU)
                setServices(res.data.results.AU)
            })
            .catch((err) => {
                console.error(err)
            })
            console.log('SERVICES:', services)
            setFetchedServices(true)
        }
    }

    const renderStreamingPlatforms = () => {
        console.log(services.flatrate)
        // let streaming = services.flatrate
        return services.flatrate.map((service: any, idx: number) => {
            return <div className="service-element" key={service.id} id={`${idx+1}`}>
                <abbr title={service.provide_name}>
                <img className="service-platform" src={URLS.POSTER + service.logo_path} />
                </abbr>
            </div>
        })
    }

    const renderPurchasePlatforms = () => {
        return services.rent.map((service: any, idx: number) => {
            return <div className="service-element" key={service.id} id={`${idx+1}`}>
                <abbr title={service.provide_name}>
                <img className="service-platform" src={URLS.POSTER + service.logo_path} />
                </abbr>
            </div>
        })
    }

    return (
        <div className="film-page">
            {
                loading 
                ?
                <div className="loading-msg">
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    <div>Fetching data...</div>
                </div>
                :
                <div>
                    <div className="loading-msg" style={{display: backdropLoaded ? 'none' : 'inline-block'}}>
                        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                        <div>Loading resources...</div>
                    </div>
                    
                    <div className="">
                    </div>
                    <div className="title-block" key={filmData.id} style={{display: backdropLoaded ? 'grid' : 'none'}}>
                        <img className="title-img" src={URLS.POSTER + filmData.poster_path}/>
                        <img className="backdrop" src={URLS.BACKDROP + filmData.backdrop_path} onLoad={() => setBackdropLoaded(true)}/>

                        <div className="filmData-info">
                            <p className="title-name">{filmData.original_title}</p>
                            <p className="synopsis">Synopsis:</p>
                            <p className="title-overview">{filmData.overview}</p>

                            <div className="where-to-watch">
                                <p className="where-title">
                                    Available to watch:
                                </p>
                                <div className="where-stream">
                                    {
                                        fetchedServices
                                        ?
                                        <div className="platforms">
                                            <div className="streaming-platforms">
                                                Stream:
                                                {
                                                    services.flatrate
                                                    ?
                                                    renderStreamingPlatforms()
                                                    :
                                                    <p>No streaming data found</p>
                                                    
                                                }
                                            </div>
                                            <div className="purchase-platforms">
                                                Rent:
                                                {
                                                    services.rent
                                                    ?
                                                    renderPurchasePlatforms()
                                                    :
                                                    <p>No data found</p>
                                                    
                                                }
                                            </div>
                                        </div>
                                        :
                                        <p className=""></p>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                // renderTitle
            }
        </div>
    )

}

export default Title