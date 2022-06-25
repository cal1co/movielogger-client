import { useState } from 'react'
import logo from './logo.svg'
import './style/App.css'
import Nav from './components/nav'
import { HashRouter as Router } from 'react-router-dom'
import Routers from './routers'

function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routers />
      </Router>
    </div>
  )
}

export default App
