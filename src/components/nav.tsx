import React from 'react'
import '../style/Nav.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import NavLinks from './NavLinks'
import axios from 'axios'

function Nav() {

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    checkForLogin()
  }, [loggedIn])

  const checkForLogin = () => {
    console.log('CHECKING FOR LOGIN')
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
          <p>button to signup/login etc</p>
        }
    </div>
  )

}

export default Nav
