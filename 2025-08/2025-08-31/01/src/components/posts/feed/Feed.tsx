import { useEffect, useState } from 'react'
import './Feed.css'
import type Post from '../../../models/post'
import feedService from '../../../services/feed'


export default function Feed(){
    const [feed, setFeed] = useState<Post[]>([])
    useEffect(()=>{
             feedService.getFeed().then(setFeed).catch(alert)
    },[])
    return(
        <div className='Feed'>
            <ul>
                {feed.map(({user:{username}, id, title,body,createdAt,imageUrl})=> <li key={id}>
                     {username} 
                    <br /> 
                    <b>{title}</b>
                    <br /><br />
                    {body}
                    <br /><br />
                    <img src={imageUrl} alt="images" />
                    <br />
                    {(new Date(createdAt)).toLocaleTimeString()}
                    <br /><br />
                   
                     </li> )}
            </ul>
        </div>
    )
}