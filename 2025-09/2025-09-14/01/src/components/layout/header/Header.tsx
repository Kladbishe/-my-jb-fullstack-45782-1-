import {  NavLink } from 'react-router-dom'
import './Header.css'
import { useContext} from 'react'
import AutoContext from '../../auth/auth/AuthContext'

import useUserName from '../../../hooks/use-username'

export default function Header(){
    const name = useUserName()
    const authContext = useContext(AutoContext)
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