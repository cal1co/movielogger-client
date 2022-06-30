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
    const location:any = useLocation()


    useEffect(() => {
        getTitleData()
    }, [filmId])

    const getTitleData = async () => {
        if (location.state !== null){
            const { movieInfo } = location.state
            // console.log("MOVIE INFO", movieInfo.backdrop_path)
            setFilmId(movieInfo.id)
            await getCredits(movieInfo.id)
            setFilmData(movieInfo)
            // console.log(filmData.backdrop_path, "PATH")
        } else {
            let arr = location.search.split('')
            arr.splice(0,4)
            let movieId = parseInt(arr.join(''))
            setFilmId(movieId)
            await axios.get(URLS.HEAD + movieId + URLS.KEY)
            .then((res) => {
                setFilmData(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
            await getCredits(movieId)
        }
        await getServices(filmId)
        setLoading(false)
    }
   
    const getServices = async (input:number) => {
        if (input !== 0){
            console.log(input)
            await axios.get(URLS.HEAD + input + URLS.SERVICES)
            .then((res) => {
                if (res.data.results.AU !== undefined){
                    setServices(res.data.results.AU)
                    setFetchedServices(true)
                }
            })
            .catch((err) => {
                console.error(err)
            })
        }
    }

    const getCredits = async (input:number) => {
        await axios.get(URLS.HEAD + input + URLS.CREDITS + URLS.KEY)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }


    const renderStreamingPlatforms = () => {
        console.log(services.flatrate)
        // let streaming = services.flatrate
        if (services !== undefined){
            return services.flatrate.map((service: any, idx: number) => {
                return <div className="service-element" key={service.id} id={`${idx+1}`}>
                    <abbr title={service.provide_name}>
                    <img className="service-platform" src={URLS.POSTER + service.logo_path} />
                    </abbr>
                </div>
            })
        }
    }

    const renderPurchasePlatforms = () => {
        if (services !== undefined){
            return services.rent.map((service: any, idx: number) => {
                return <div className="service-element" key={service.id} id={`${idx+1}`}>
                    <abbr title={service.provide_name}>
                    <img className="service-platform" src={URLS.POSTER + service.logo_path} />
                    </abbr>
                </div>
            })

        }
    }

    return (
        <div className="film-page">
            {
                loading 
                ?
                <div className="loading-msg">
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    <div className="load-msg">Fetching data...</div>
                </div>
                :
                <div>
                    <div className="loading-msg" style={{display: backdropLoaded ? 'none' : 'contents'}}>
                        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                        <div className="load-msg">Loading resources...</div>
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
                                                <div>Stream:</div>
                                            <div className="streaming-platforms">
                                                {
                                                    services.flatrate
                                                    ?
                                                    renderStreamingPlatforms()
                                                    :
                                                    <p>No streaming data found</p>
                                                    
                                                }
                                            </div>
                                                <div>Rent:</div>
                                            <div className="purchase-platforms">
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