import * as react from 'react'
import axios from 'axios'
import { useState } from 'react'
import URLS from '../api/server'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disable, setDisable] = useState(true)
    const [errorMsg, setErrorMsg] = useState(Object)

    const emailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setEmail(event.target.value)
        checkDisable()
    }
    const passwordInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setPassword(event.target.value)
        checkDisable()
    }

    const checkDisable = () => {
        let emailField = document.getElementById("email-box")
        let passField = document.getElementById("pass-box")
        // console.log(emailField.value, passField.value)
        if (emailField.value && passField.value){
            console.log("DISABLE NOW")
            setDisable(false)
        } else {
            setDisable(true)
        }
    }
    const submitLogin = async () => {
        const url = URLS.BASE + URLS.LOGIN;
        const setHeader = {"Access-Control-Allow-Origin": location.origin}
        return axios.post(url, {email, password}, {headers: setHeader})
        .then((res) => {
            console.log('res:', res.data)
            const { token, id, name } = res.data
            localStorage.setItem('currentUserToken', token)
            localStorage.setItem('currentUserId', id)
            localStorage.setItem('currentUsername', name)
            localStorage.setItem('currentUser', JSON.stringify(res.data))
        })
        .catch((err) => { // how to add a response? 
            console.error(err.response.data)
            setErrorMsg(err.response.data)
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

    return ( // ADD REMEMBER ME RADIO BUTTON
        <div className="Login">
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

                <form className="login-form" onSubmit={submitLogin}>
                    <input className="email" id="email-box" placeholder={"email"} onChange={emailInput}/>
                    <input className="password" id="pass-box" placeholder={"password"} onChange={passwordInput}/>
                    <button disabled={disable}type="submit">login</button>
                </form>
            </div>
        </div>
    )

}

export default Login