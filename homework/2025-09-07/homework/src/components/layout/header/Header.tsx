import {  NavLink } from 'react-router-dom'
import './Header.css'
import { useContext } from 'react'
import AutoContext from '../../auth/auth/AuthContext'
import { jwtDecode } from 'jwt-decode'

export default function Header(){
    const authContext = useContext(AutoContext)
    const {name} =jwtDecode<{name:string}>(authContext!.jwt)
    function logout(){
        authContext?.newJwt('')
    }
    return(
        <div className='Header'>
            <NavLink to="/profile">logo</NavLink> 
            <nav>
                <NavLink to="/profile">Profile</NavLink> | <NavLink to="/feed">Feed</NavLink>
            </nav>
            <div>
                welcome {name} | <button onClick={logout}>logout</button>
            </div>
        </div>
    )
}