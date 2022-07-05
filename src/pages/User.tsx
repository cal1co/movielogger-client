import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import '../style/User.css'

const TEST_URL = 'http://localhost:8080/user/'

function User() {
    const [username, setUsername] = useState(String)
    const [user, setUser] = useState(Object)
    const [avatar, setAvatar] = useState(Object)
    const location = useLocation()


    useEffect(() => {
        getUser()
    }, [location])

    const getUser = () => {
        let arr = location.pathname.split('')
        arr.splice(0,1)
        let currUser = arr.join('')
        axios.get(TEST_URL + currUser)
        .then((res) => {
            if (res.data){
                setUser(res.data)
                console.log("SET USER", res.data)
                const avi = JSON.parse(res.data.avatar)
                setAvatar(avi)
                console.log(avi)
            } else {
                console.log("USER NOT SET")
                setUser('')
            }

        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="userPage">
            {
                user
                ?
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
                                    0 Following
                                </div>
                                <div className="follow followers">
                                    0 Followers
                                </div>
                            </div>
                            <div className="profile-utility">
                                {
                                    (localStorage.getItem('currentUserId') === user._id)
                                    ?
                                    <button>edit profile</button>
                                    :
                                    <button>follow {user._id}, {localStorage.getItem('currentUserId')}</button>
                                }
                            </div>
                        </div>


                        <div className="section-tabs">
                            <div className="profile-ratings">
                                Ratings

                            </div>
                            <div className="profile-watched">
                                Watched
                            </div>
                            <div className="profile-watchlist">
                                Watchlist

                            </div>
                            <div className="profile-liked">
                                Liked
                            </div>
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

