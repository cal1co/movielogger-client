import * as react from 'react'
import axios from 'axios'
import { useState } from 'react'
import URLS from '../api/server'
import { useNavigate, useLocation } from 'react-router-dom'

const header = {"Access-Control-Allow-Origin": "*"}

function Signup() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [disable, setDisable] = useState(true)
    const [errorMsg, setErrorMsg] = useState(Object)
    const navigate = useNavigate()
    const location:any = useLocation()

    const usernameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setUsername(event.target.value)
        checkDisable()
    }
    const emailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setEmail(event.target.value)
        checkDisable()
    }
    const passwordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setPassword(event.target.value)
        checkDisable()
    }
    const checkDisable = () => {
        let emailField = document.getElementById("email-box") as HTMLInputElement
        let passField = document.getElementById("pass-box") as HTMLInputElement
        let usernameField = document.getElementById("username-box") as HTMLInputElement
        // console.log(emailField.value, passField.value)
        if (emailField!.value && passField!.value && usernameField!.value){
            // console.log("DISABLE NOW")
            setDisable(false)
        } else {
            setDisable(true)
        }
    }

    const submitSignup = async () => {
        setDisable(true)
        console.log("SUBMITTING SIGNUP WITH", username, email, password)
        const url = URLS.BASE + URLS.SIGNUP;
        return axios.post(url, {username, email, password}, {headers: header})
        .then((res) => {
            // console.log('res:', res.data)
            const { token, id, name } = res.data
            // login 
            localStorage.setItem('currentUserToken', token)
            localStorage.setItem('currentUserId', id)
            localStorage.setItem('currentUserName', name)
            localStorage.setItem('currentUser', JSON.stringify(res.data))
            if (location.state.lastPage){
                navigate(location.state.lastPage)
            } else {
                navigate(`/${name}`)
            }
        })
        .catch((err) => { // how to add a response? 
            // console.error(err.response.data)
            setErrorMsg(err.response.data)
            setDisable(false)
        })
    }
    const renderError = () => {
        return <div className="error-msg">
            {
                <h3 className="">
                    {errorMsg.response}
                </h3>
            }
        </div>
    }

    return ( 
        <div className="Signup">
            <div className="error">

            {
                errorMsg 
                ? 
                renderError()
                :
                <p></p>
            }
            </div>
            <div className="login-form">

            <form className="login-form" onSubmit={submitSignup}>
                <input className="signup-elem username-box" id="username-box" placeholder={"username"} onChange={usernameInput}/>
                <input className="signup-elem email-box" id="email-box" placeholder={"email"} onChange={emailInput}/>
                <input type="password" className="signup-elem pass-box" id="pass-box" placeholder={"password"} onChange={passwordInput}/>
                <button disabled={disable} className="signup-elem" type="submit">login</button>
            </form>
            </div>




        </div>
    )

}

export default Signup