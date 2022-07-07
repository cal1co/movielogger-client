import React from 'react'
import '../style/Nav.css'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Search from './Search'
import NavLinks from './NavLinks'
import axios from 'axios'

function Nav() {
  const [loggedIn, setLoggedIn] = useState(false)
  const location = useLocation()

  useEffect(() => {
    checkForLogin()
  }, [location])

  const checkForLogin = () => {
    let currId = localStorage.getItem('currentUserId')
    if (currId){
      setLoggedIn(true)
    }
  }

  return (
    <div className="Nav">
      <Link to="/">
        <button className="go-home">MOVIELOG</button>
      </Link>
        <Search />
        {
          loggedIn
          ?
          <NavLinks/>
          : 
          <div className="login-signup">
            <Link to={'/user/login'} state={{lastPage: location.pathname + location.search}}><button className="nav-butt login-butt">Login</button></Link>
            <Link to={'/user/signup'} ><button className="nav-butt signup-butt">Signup</button></Link>
          </div>
        }
    </div>
  )

}

export default Nav
