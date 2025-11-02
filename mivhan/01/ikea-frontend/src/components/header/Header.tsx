import { NavLink } from "react-router-dom"
import "./Header.css"


export default function Header(){
    return(
        <div className="Header">
            <h2>Ikea Website</h2>
            <NavLink to="/furniture">Furniture list</NavLink> | {"   "}
            <NavLink to="/add-furniture">Add Furniture</NavLink>
        </div>
    )
}