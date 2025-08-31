import {  NavLink } from 'react-router-dom'
import './Header.css'

export default function Header(){
    
    return(
        <div className='Header'>
            <div>logo</div>
            <nav>
                <NavLink to="/profile">Profile</NavLink> | <NavLink to="/feed">Feed</NavLink>
            </nav>
            <div>
                welcome pavel | logout
            </div>
        </div>
    )
}