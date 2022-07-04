import { useState } from 'react'
import logo from './logo.svg'
import './style/App.css'
import './style/Nav.css'
import Nav from './components/Nav'
import { HashRouter as Router } from 'react-router-dom'
import Routers from './routes'

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
