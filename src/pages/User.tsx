import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import '../style/User.css'
import URLS from '../api/server'

// const TEST_URL = 'http://localhost:8080/user/'
const header = {"Access-Control-Allow-Origin": "*"}

function User() {
    const [user, setUser] = useState(Object)
    const [userLoaded, setUserLoaded] = useState(false)
    const [currUserLoggedIn, setCurrUserLoggedIn] = useState(false)
    const [currUser, setCurrUser] = useState(Object)
    const [followerCount, setFollowerCount] = useState(0)
    const [followingCount, setFollowingCount] = useState(0)
    const [avatar, setAvatar] = useState(Object)
    const [followed, setFollowed] = useState(false)
    const [ratingSelect, setRatingSelect] = useState(true) // ADD A LITTLE LINE UNDER SELECTED
    const [watchedSelect, setWatchedSelect] = useState(false)
    const [watchlistSelect, setWatchlistSelect] = useState(false)
    const [likedSelect, setLikedSelect] = useState(false)
    const location = useLocation()


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
                setFollowerCount(res.data.followers.length)
                setFollowingCount(res.data.following.length)
                checkFollow(res.data)
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
        console.log(user.ratings)
        return user.ratings.map((film:any, idx:number) => {
            return <div className="rating-item" id={`${idx}`}>
                {film.rating}

            </div>
        })
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
                                                        followed
                                                        ?
                                                        <button onClick={unfollowUser}>unfollow</button>
                                                        :
                                                        <button onClick={followUser}>follow</button>
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
                            ratings
                        </div>
                        <div className="user-watched" style={{display: watchedSelect ? 'contents' : 'none'}}>
                            watched
                        </div>
                        <div className="user-watchlist" style={{display: watchlistSelect ? 'contents' : 'none'}}>
                            watchlist
                        </div>
                        <div className="user-liked" style={{display: likedSelect ? 'contents' : 'none'}}>
                            liked
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

