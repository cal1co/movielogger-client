import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function NavLinks() {

    const [name, setName] = useState('')

    useEffect(() => {
        const username = localStorage.getItem('currentUsername')
        setName(username || '{}')
        console.log(JSON.parse(localStorage.getItem('currentUser') || '{}'))
    }, [name])

    const logout = () => {
        console.log("LOGGING OUT", name)
        localStorage.removeItem('currentUserToken')
        localStorage.removeItem('currentUserId')
        localStorage.removeItem('currentUserName')
        localStorage.removeItem('currentUser')
        location.reload()
    }
    return (
        <div className="nav-links">
            
            <Link to={`/${name}`} className="prof-link">
                @{name}
            </Link>

            <button className="logout-butt" onClick={logout}>
                logout
            </button>

        </div>
    )
}

export default NavLinks