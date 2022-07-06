import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function NavLinks() {

    const [name, setName] = useState('')

    useEffect(() => {
        const username = localStorage.getItem('currentUsername')
        setName(username || '{}')
        console.log(JSON.parse(localStorage.getItem('currentUser') || '{}'))
    }, [name])



    return (
        <div className="nav-links">
            
            <Link to={`/${name}`} className="prof-link">
                @{name}
            </Link>

        </div>
    )
}

export default NavLinks