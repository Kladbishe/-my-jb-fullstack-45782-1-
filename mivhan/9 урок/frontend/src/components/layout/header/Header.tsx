import { NavLink } from 'react-router-dom'
import './Header.css'



export default function Header() {

    return (
        <div className='Header'>
            <div>logo</div>
            <nav>
                {/* <a href="/profile">Profile</a> | <a href="/feed">Feed</a> */}
                <NavLink to="/books/create">add Book</NavLink> | <NavLink to="/books/search">Search</NavLink> | <NavLink to="/authors">Books</NavLink>

            </nav>
            <div>
                welcome Tzomet_sfarim 
            </div>
        </div>
    )
}