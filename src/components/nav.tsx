import React from 'react'
import '../style/Nav.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

function Nav() {

  return (
    <div className="Nav">
      <Link to="/">
        <button className="go-home">MOVIELOG</button>
      </Link>
        <Search />
    </div>
  )

}

export default Nav
