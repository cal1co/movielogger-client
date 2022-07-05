import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const TEST_URL = 'http://localhost:8080/user/'

function User() {
    const [username, setUsername] = useState('')
    const [user, setUser] = useState({})
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
            console.log(res.data)
            if (res.data){
                setUser(res.data)
                console.log("SET USER")
            } else {
                console.log("USER NOT SET")
            }

        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="userPage">
            THIS IS THE USER PAGE FOR {username}

        </div>
    )

}


export default User

