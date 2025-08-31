import { useEffect, useState } from "react"
import "./Following.css"
import type User from "../../../models/user"
import followersService from "../../../services/follows/followers"

export default function Following(){
    const [following, setFollowing] = useState<User[]>([])

    useEffect(()=>{

        (async()=>{
            try{
                const following = await followersService.getFollowers()
                setFollowing(following)
            }catch(e){
                alert(e)
            }
        })()

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