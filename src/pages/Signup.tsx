import * as react from 'React'
import axios from 'axios'
import { useState } from 'react'

const TEST_URL = 'http://localhost:8080/user/signup'
const header = {"Access-Control-Allow-Origin": "*"}

function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setEmail(event.target.value)
    }
    const passwordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setPassword(event.target.value)
    }


    const submitSignup = async () => {
        console.log("SUBMITTING SIGNUP WITH", email, password)
        const url = TEST_URL;
        return axios.post(url, {email, password}, {headers: header})
        .then((res) => {
            console.log('res:', res.data)
            const { token, id, name } = res.data
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
                <input className="email" placeholder={"email"} onChange={emailInput}/>
                <input className="email" placeholder={"password"} onChange={passwordInput}/>
                <button type="submit">login</button>
            </form>




        </div>
    )

}

export default Signup