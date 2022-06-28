import '../style/Nav.css'
import { useState } from 'React'
import { Link } from 'react-router-dom'
import Search from './Search'

function Nav() {

  return (
    <div className="Nav">
      <Link to="/">
        <button className="go-home">HOME</button>
      </Link>
        <Search />
    </div>
  )

}

export default Nav
