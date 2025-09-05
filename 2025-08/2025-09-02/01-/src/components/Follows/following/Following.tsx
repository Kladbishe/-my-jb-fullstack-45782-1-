import { useEffect, useState } from 'react'
import './Following.css'
import type User from '../../../models/user'
import followingService from '../../../services/follows/following'
import Follow from '../Follow/Follow'

export default function Following() {

    const [following, setFollowing] = useState<User[]>([])

    useEffect(() => {
        followingService.getFollowing()
            .then(setFollowing)
            .catch(alert)
    }, [])

    return (
        <div className='Following'>
        
                {following.map(follow => <Follow key={follow.id} user={follow} />)}
          
        </div>
    )
}