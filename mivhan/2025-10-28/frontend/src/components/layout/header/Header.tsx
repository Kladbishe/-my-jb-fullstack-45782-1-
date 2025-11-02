
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header() {

    return ( 
        <div className='Header'>
            logo | <Link to="/games">Games</Link>   <Link to="/new-game">add Game</Link>
        </div>
    )
}