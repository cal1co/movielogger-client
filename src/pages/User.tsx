import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import '../style/User.css'
import URLS from '../api/server'
import MOVIE_URLS from '../api/movieApi'
import StarRatings from 'react-star-ratings'

const header = {"Access-Control-Allow-Origin": "*"}

function User() {
    const [user, setUser] = useState(Object)
    const [userRatings, setRatings] = useState(Array)
    const [userLoaded, setUserLoaded] = useState(false)
    const [currUserLoggedIn, setCurrUserLoggedIn] = useState(false)
    const [currUser, setCurrUser] = useState(Object)
    const [followerCount, setFollowerCount] = useState(0)
    const [followingCount, setFollowingCount] = useState(0)
    const [avatar, setAvatar] = useState(Object)
    const [followed, setFollowed] = useState(false)
    const [ratingSelect, setRatingSelect] = useState(true) 
    const [watchedSelect, setWatchedSelect] = useState(false)
    const [watchlistSelect, setWatchlistSelect] = useState(false)
    const [likedSelect, setLikedSelect] = useState(false)
    const [dmLink, setDmLink] = useState('')
    const location = useLocation()
    
    // TODO: ADD A LITTLE LINE UNDER SELECTED // TURN PROFILE BIO INTO GRID TO BETTER PLACE ITEMS

    useEffect(() => {
        getUserData()
    }, [location])

    const getUserData = async () => {
        await getUser()
        setUserLoaded(true)
        await getCurrUser()
    }
    const getCurrUser = async () => {
        const currUserData = JSON.parse(localStorage.getItem('currentUser') || '{}').name
        if (currUserData){
            setCurrUserLoggedIn(true)
            setCurrUser(currUserData)
        }
    }
    
    const getUser = async () => {
        let arr = location.pathname.split('')
        arr.splice(0,1)
        let currUser = arr.join('')
        const url = URLS.BASE + URLS.USER + currUser
        await axios.get(url)
        .then((res) => {
            if (res.data){
                // console.log("SET USER", res.data)
                const avi = JSON.parse(res.data.avatar)
                setAvatar(avi)
                setUser(res.data)
                const ratedTitles:any = []
                res.data.films.forEach((e:any) => {
                    const tempObj = {
                        id: e.id,
                        poster: e.poster,
                        rating: e.rating,
                        title: e.title
                    }
                    ratedTitles.push(tempObj)
                })
                setRatings(ratedTitles)
                setFollowerCount(res.data.followers.length)
                setFollowingCount(res.data.following.length)
                checkFollow(res.data)
                getMessageLink(res.data)
                // console.log(avi)
            } else {
                console.log("USER NOT SET")
                setUser('')
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const checkFollow = async (input:any) => {
        const currUsername = JSON.parse(localStorage.getItem('currentUser') || '{}').name
        // console.log("INPUT", input)
        if (input?.followers.length >= 0){
            const findUser = input.followers.some((elem:any) => elem.username === currUsername)
            if (findUser){
                // console.log("CURRENT USER IS FOLLOWING", user)
                setFollowed(true)
                return true
            } else {
                return false
            }
        }
    }

    const followUser = async () => {
        setFollowed(true)
        const currUserId = localStorage.getItem('currentUserId')
        const url = URLS.BASE + URLS.USER + 'follow'
        if (followed === false){
            return await axios.post(url, { id:currUserId, followId:user._id }, {headers: header})
            .then((res) => {
                console.log(res.data)
                setFollowed(true)
                setFollowerCount(followerCount + 1)
            })
            .catch((err) => {
                console.error(err.data)
            })
        }
    }
    const unfollowUser = async () => {
        setFollowed(false)
        const currUsername = JSON.parse(localStorage.getItem('currentUser') || '{}').name
        const url = URLS.BASE + URLS.USER + 'unfollow'
        if (followed && currUsername){
            return await axios.post(url, { username:currUsername, followedUsername:user.username }, {headers: header})
            .then((res) => {
                console.log(res.data)
                setFollowed(false)
                setFollowerCount(followerCount - 1)
            })
            .catch((err) => {
                console.error(err.data)
            })
        }
    }

    const renderRatings = () => {
        console.log(userRatings)
        if (userRatings.length < 1){
            // console.log("This user has no ratings")
            return <div>This user has no ratings</div>
        } else {
            return userRatings.map((elem:any, idx:number) => {
                return <div className="rating-item user-int-item" id={`${idx}`}>
                    <Link to={`/title/show?id=${elem.id}`}>
                        <img src={MOVIE_URLS.POSTER + elem.poster} className="rated-film-poster"/> 
                    </Link>
                    <StarRatings rating={elem.rating} starEmptyColor="#111111" starHoverColor="orange" starRatedColor="orange" starDimension="2.5em" starSpacing="0" svgIconViewBox="0 0 24 24"svgIconPath="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                    <Link to={`/title/show?id=${elem.id}`}>
                        {elem.title}
                    </Link>
    
                </div>
            })

        }
    }

    const renderWatchlist = () => {
        console.log()
    }

    const selectSection = (tab:number) => {
        if (tab === 0){
            setRatingSelect(true)
            setWatchedSelect(false)
            setWatchlistSelect(false)
            setLikedSelect(false)
        }
        if (tab === 1){
            setRatingSelect(false)
            setWatchedSelect(true)
            setWatchlistSelect(false)
            setLikedSelect(false)
        }
        if (tab === 2){
            setRatingSelect(false)
            setWatchedSelect(false)
            setWatchlistSelect(true)
            setLikedSelect(false)
        }
        if (tab === 3){
            setRatingSelect(false)
            setWatchedSelect(false)
            setWatchlistSelect(false)
            setLikedSelect(true)
        }
    }

    const getMessageLink = (user:any) => {
        const currId = localStorage.getItem('currentUserId') || '{}'
        let msgLink = 'hey'
        if (user._id > currId){
            msgLink = currId + '-' + user._id
        } else {
            msgLink = user._id + '-' + currId
        }
        console.log(msgLink)
        setDmLink(msgLink)
    }


    return (
        <div className="userPage">
            {
                userLoaded
                ?
                <div className="profile-page">
                    <div className="header">
                        <svg className="profile-img" style={{backgroundColor: avatar.color}} height='128px' width='128px'>
                            <image href={avatar.image}></image> 
                        </svg>
                        <div className="profile-container">
                            <div className="profile-bio">
                                <div className="profile-username">
                                    @{user.username}
                                </div>
                                <div className="profile-follow-info">
                                    <div className="follow following">
                                        {followingCount} Following
                                    </div>
                                    <div className="follow followers">
                                        {followerCount} Followers
                                    </div>
                                </div>
                                    {
                                        currUserLoggedIn
                                        ?
                                            <div className="profile-utility">
                                                {
                                                    (localStorage.getItem('currentUserId') === user._id)
                                                    ?
                                                    <button>edit profile</button>
                                                    :
                                                    
                                                
                                                <div className="follow-butts">
                                                    {
                                                        followed
                                                        ?
                                                        <div className="follow-util">
                                                        <div className="msg-link">
                                                            <abbr title="send a direct message" className="follow-util">
                                                                <Link to={`/messages/${dmLink}`}>
                                                                    <div className="msg-box-out send-dm">
                                                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="msg-box">
                                                                            <g>
                                                                                <path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path></g>
                                                                        </svg>
                                                                    </div>
                                                                </Link>
                                                            </abbr>
                                                        </div>
                                                        <button onClick={unfollowUser} className="follow-butt">unfollow</button>
                                                        </div>
                                                        :
                                                        
                                                        <button onClick={followUser} className="follow-butt">follow</button>
                                                    }
                                                </div>
                                                }
                                                </div>
                                            :
                                            <p></p>
                                        }
                            </div>


                            <div className="section-tabs">
                                <div className="profile-ratings" style={{backgroundColor: ratingSelect ? 'rgba(0, 0, 0, 0.4)' : '#111111'}} onClick={() => {selectSection(0)}}>
                                    Ratings
                                </div>
                                <div className="profile-watched" style={{backgroundColor: watchedSelect ? 'rgba(0, 0, 0, 0.4)' : '#111111'}} onClick={() => {selectSection(1)}}>
                                    Watched
                                </div>
                                <div className="profile-watchlist" style={{backgroundColor: watchlistSelect ? 'rgba(0, 0, 0, 0.4)' : '#111111'}} onClick={() => {selectSection(2)}}>
                                    Watchlist

                                </div>
                                <div className="profile-liked" style={{backgroundColor: likedSelect ? 'rgba(0, 0, 0, 0.4)' : '#111111'}} onClick={() => {selectSection(3)}}>
                                    Liked
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-contents">
                        <div className="user-ratings" style={{display: ratingSelect ? 'contents' : 'none'}}>
                        {userRatings.length} Ratings: {renderRatings()}
                        </div>
                        <div className="user-watched" style={{display: watchedSelect ? 'contents' : 'none'}}>
                        0 titles watched:
                        </div>
                        <div className="user-watchlist" style={{display: watchlistSelect ? 'contents' : 'none'}}>
                        0 watchlist items :
                        </div>
                        <div className="user-liked" style={{display: likedSelect ? 'contents' : 'none'}}>
                        0 items liked:
                        </div>
                    </div>
                </div>
                :
                <p></p>
            }
        </div>
    )

}


export default User

