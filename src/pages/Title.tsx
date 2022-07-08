import '../style/Title.css'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import URLS from '../api/movieApi'
import serverURLS from '../api/server'
import StarRatings from 'react-star-ratings'


function Title() {
    const [filmData, setFilmData] = useState(Object)
    const [filmId, setFilmId] = useState(Number)
    const [loading, setLoading] = useState(true)
    const [backdropLoaded, setBackdropLoaded] = useState(false)
    const [services, setServices] = useState(Object)
    const [fetchedServices, setFetchedServices] = useState(false)
    const [userPresent, setUserPresent] = useState(false)
    const [rating, setRating] = useState(0)
    const [liked, setLiked] = useState(false)
    const [watched, setWatched] = useState(false)
    const [watchlist, setWatchlist] = useState(false)
    const [castInfo, setCastInfo] = useState(Object)
    const location:any = useLocation()


    useEffect(() => {
        getTitleData()
        if (loggedIn()){
            checkExistingRating()
            checkExistingWatchlist()
        }
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
            // console.log(movieId)
            setFilmId(movieId)
            await axios.get(URLS.HEAD + movieId + URLS.KEY)
            .then((res) => {
                // console.log(res.data)
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
            // console.log(input)
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
            // console.log(res.data)
            setCastInfo(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }
    const renderStreamingPlatforms = () => {
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
    const renderCastInfo = () => {
        console.log(castInfo)
        if (castInfo !== undefined){
            // return <div className="hi">hi</div>
            return castInfo.cast.map((person:any, idx:number) => {
                return <div className="">
                    {
                    idx < 5 
                    ? 
                    
                    <div className="cast-img-wrapper" id={`${idx}`}>
                    <img className="cast-img" src={URLS.POSTER + person.profile_path}/> 
                    </div>
                    : 
                    <p></p>
                    }
                    
                </div>
            })
            }
    }


    const loggedIn = () => {
        const user = localStorage!.getItem('currentUser') 
        if (user !== null){
            setUserPresent(true)
            return true
        } else {
            return false
        }
    }

    const checkExistingRating = () => {
        const user = JSON.parse(localStorage!.getItem('currentUser') || '{}')
        user.films.forEach((e:any) => {
            // console.log(filmId, e.film.id)
            if (e.id === filmId){
                if (e.rating){
                    setRating(e.rating)
                }
            }
        })
    }
    const rateTitle = (newRating:any) => {
        setRating(newRating)
        updateUserFilmData(newRating)
    }

    const checkExistingWatchlist = () => {
        const user = JSON.parse(localStorage!.getItem('currentUser') || '{}')
        user.films.forEach((e:any) => {
            if (e.id === filmId){
                console.log("LOOK HERE", e)
                if (e.watchlist){

                    setWatchlist(true)
                }
            }
        })
    }
    const addToWatchlist = () => {
        if (watchlist){
            setWatchlist(false)
            updateUserFilmData(rating, false)
        } else {
            setWatchlist(true)
            updateUserFilmData(rating, true)
        }
    }

    const updateUserFilmData = async (rateNum=rating, addWatchlist=watchlist) => {
        let sendRating:any = rateNum
        if (sendRating === 0){
            sendRating = false
        } 
        if (userPresent){
            const url = serverURLS.BASE + serverURLS.USER + 'film'
            const user = JSON.parse(localStorage.getItem('currentUser') || '{}')
            const filmObj = {user, rating: rateNum, filmInfo:{filmData}, liked, watched, watchlist:addWatchlist}
            console.log("FILM OBJECT!!!!", filmObj)
            await axios.post(url, filmObj)
            .then((res) => {
                localStorage.removeItem('currentUser')
                localStorage.setItem('currentUser', JSON.stringify(res.data))
            })
            .catch((err) => {
                console.error(err)
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
                    
                    <div className="title-block" key={filmData.id} style={{display: backdropLoaded ? 'grid' : 'none'}}>

                        <div className="poster-rapper">
                            <img className="title-img" src={URLS.POSTER + filmData.poster_path} alt={`poster for: ${filmData.title}`}/>
                            <abbr title="ADD TO WATCHLIST">
                                <div className="watchlist-ribbon" onClick={addToWatchlist}>


                                    <svg className="watchlist-ribbon-body" viewBox="0 0 24 34">
                                        <polygon className="watchlist-ribbon-body" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
                                        <polygon className="watchlist-ribbon-body" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
                                        <polygon className="watchlist-ribbon-body-shadow" points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"></polygon>

                                    </svg>
                                    <div className="watchlist-ribbon-icon" role="presentation" style={{display: watchlist ? 'contents' : 'none'}}>
                                        <svg width="24" height="24" className="watchlist-ribbon-icon" fill="currentColor"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9 16.2l-3.5-3.5a.984.984 0 0 0-1.4 0 .984.984 0 0 0 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7a.984.984 0 0 0 0-1.4.984.984 0 0 0-1.4 0L9 16.2z"></path></svg>
                                    </div>

                                    <div className="watchlist-ribbon-icon" role="presentation" style={{display: watchlist ? 'none' : 'contents'}}>
                                        <svg className="watchlist-ribbon-icon" viewBox="0 0 24 24" fill="currentColor" >
                                            <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </abbr>

                        </div>

                        <img className="backdrop" src={URLS.BACKDROP + filmData.backdrop_path} onLoad={() => setBackdropLoaded(true)}/>
                        
                        <div className="rating-stars">
                            <div className="user-stars">
                                {/* User Score: */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="user-star" id="iconContext-star" viewBox="0 0 24 24" fill="orange" role="presentation"><path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>
                                {filmData.vote_average / 2}/5 · {filmData.vote_count}
                            </div>
                            
                            <StarRatings changeRating={rateTitle} rating={rating} starEmptyColor="#111111" starHoverColor="orange" starRatedColor="orange" starDimension="2.5em" starSpacing="0" svgIconViewBox="0 0 24 24"svgIconPath="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/>
                        </div>
                        
                        <p className="title-name">{filmData.original_title}</p>
                        <div className="filmData-info">
                            <p className="synopsis">Synopsis:</p>
                            <p className="title-overview">{filmData.overview}</p>

                            <div className="where-to-watch">
                                <p className="where-title">
                                    Wnere to watch:
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

                    <div className="misc-info">
                        {renderCastInfo()}
                    </div>
                </div>
                // renderTitle
            }
        </div>
    )

}

export default Title