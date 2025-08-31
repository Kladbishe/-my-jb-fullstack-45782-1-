import { useEffect, useState } from "react"
import "./Following.css"
import type User from "../../../models/user"
import followingService from "../../../services/follows/following"


export default function Following(){
    const [following, setFollowing] = useState<User[]>([])

    useEffect(()=>{

        followingService.getFollowing().then(setFollowing).catch(alert)

        // return()=>{

        // }

    },[])

    return(
        <div
        className="Following">
               <ul>
                {following.map(({name, username, id})=>
                <li key={id}>
                    <b>{name}</b> - {username} 
                </li>
                )}
            </ul>
            
        </div>
    )
}