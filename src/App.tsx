import { useState } from 'react'
import logo from './logo.svg'
import './style/App.css'
import Nav from './components/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      MOVIE DB SEARCH
    </div>
  )
}

export default App
