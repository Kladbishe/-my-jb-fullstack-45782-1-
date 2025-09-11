import { useEffect } from 'react'
import './Following.css'


import Follow from '../Follow/Follow'
import Spinner from '../../common/spinner/Spinner'
import { useAppDispatcher, useAppSelector } from '../../../redux/hooks'
import { init} from '../../../redux/following-slice'
import useService from '../../../hooks/use-service'
import FollowingService from '../../../services/auth-aware/followingService'

export default function Following() {
    const followingService = useService(FollowingService)
    // const [following, setFollowing] = useState<User[]>([])
    const following = useAppSelector(store => store.followingSlice.following)
    const dispatch = useAppDispatcher()
    useEffect(() => {

            (async()=>{
                try{
                    const followingFromServer = await followingService.getFollowing()
                    dispatch(init(followingFromServer))
                }catch(e){
                    alert(e)
                }
                
            })()
    }, [dispatch, followingService])
    
    return (
        <div className='Following'>
            <h3>Following </h3><br />
            {following.length > 0 && <>
            
                {following.map(follow => <Follow
                 key={follow.id} user={follow}
                //  isFollowing ={true}
                 
                 />)}
            </> }
                
          {following.length === 0 && <Spinner /> }
        </div> 
    )
}