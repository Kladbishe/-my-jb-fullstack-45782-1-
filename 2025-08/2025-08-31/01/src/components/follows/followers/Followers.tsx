import { useEffect, useState } from "react"
import "./Followers.css"
import type User from "../../../models/user"
import followersService from "../../../services/follows/followers"

export default function Followers(){

    const [followers, setFollowers] = useState<User[]>([])

    useEffect(()=>{

        followersService.getFollowers().then(setFollowers).catch(alert)
    },[])


    return(
        <div
        className="Followers">
            <ul>
                {followers.map(({name, username, id})=>
                <li key={id}>
                    <b>{name}</b> - {username} 
                </li>
                )}
            </ul>
            
        </div>
    )
}