import * as react from 'React'
import axios from 'axios'
import { useState } from 'react'
import URLS from '../api/server'

// const TEST_URL = 'http://localhost:8080/user/signup'
const header = {"Access-Control-Allow-Origin": "*"}

function Signup() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const usernameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setUsername(event.target.value)
    }
    const emailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setEmail(event.target.value)
    }
    const passwordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    const submitSignup = async () => {
        console.log("SUBMITTING SIGNUP WITH", username, email, password)
        const url = URLS.BASE + URLS.SIGNUP;
        return axios.post(url, {username, email, password}, {headers: header})
        .then((res) => {
            console.log('res:', res.data)
            const { token, id, name } = res.data
            // login 
            localStorage.setItem('currentUserToken', token)
            localStorage.setItem('currentUserId', id)
            localStorage.setItem('currentUserName', name)
            localStorage.setItem('currentUser', JSON.stringify(res.data))
        })
        .catch((err) => { // how to add a response? 
            console.error(err.response.data)
        })
    }

    return ( 
        <div className="Login">
            <form className="login-form" onSubmit={submitSignup}>
                <input className="singup username" placeholder={"username"} onChange={usernameInput}/>
                <input className="signup email" placeholder={"email"} onChange={emailInput}/>
                <input className="signup password" placeholder={"password"} onChange={passwordInput}/>
                <button type="submit">login</button>
            </form>




        </div>
    )

}

export default Signup