import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function NavLinks() {

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState(Object)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('currentUser') || '{}')
        setName(user.name)
        setAvatar(user.avatar)
        console.log(user.avatar)
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
                <svg className="nav-img" style={{backgroundColor: avatar.color}} height='128px' width='128px'>
                        <image className="nav-img" href={avatar.image}></image> 
                </svg>
            </Link>
                {/* <div className="nav-name">
                    @{name}
                </div> */}

            <button className="logout-butt nav-butt" onClick={logout}>
                LOGOUT
            </button>

        </div>
    )
}

export default NavLinks