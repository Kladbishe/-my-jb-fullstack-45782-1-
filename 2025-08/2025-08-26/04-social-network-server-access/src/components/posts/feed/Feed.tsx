import { useEffect, useState } from 'react'
import './Feed.css'
import type Post from '../../../models/post'
import feedService from '../../../services/feed'


export default function Feed(){
    const [feed, setFeed] = useState<Post[]>([])
    useEffect(()=>{
             (async()=>{
                try{
                    const feed = await feedService.getFeed()
                    setFeed(feed)
                } catch(e){
                    alert(e)
                }
             })()
        return()=>{

        }
    },[])
    return(
        <div className='Feed'>
            <ul>
                {feed.map(({user:{username}, id, title,body,createdAt,imageUrl})=> <li key={id}>
                     {username} 
                    <br /> 
                    <b>{title}</b>
                    <br />
                    {body}
                    <br />
                    <img src={imageUrl} alt="images" />
                    <br />
                    {(new Date(createdAt)).toLocaleTimeString()}
                   
                     </li> )}
            </ul>
        </div>
    )
}