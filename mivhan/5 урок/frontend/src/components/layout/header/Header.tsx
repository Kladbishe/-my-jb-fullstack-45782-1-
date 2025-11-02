import { NavLink } from 'react-router-dom'
import './Header.css'


export default function Header() {

    return (
        <div className='Header'>
            <div>logo</div>
            <nav>
                {/* <a href="/profile">Profile</a> | <a href="/feed">Feed</a> */}
                <NavLink to="/site">site</NavLink> | <NavLink to="/new-site">add site</NavLink>

            </nav>
            <div>
                
            </div>
        </div>
    )
}