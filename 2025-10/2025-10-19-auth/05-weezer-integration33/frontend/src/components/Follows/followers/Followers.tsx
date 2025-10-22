import { useEffect } from "react";
import "./Followers.css";

import Follow from "../Follow/Follow";
import Spinner from "../../common/spinner/Spinner";
import { useAppDispatcher, useAppSelector } from "../../../redux/hooks";
import { init } from "../../../redux/followers-slice";
import useService from "../../../hooks/use-service";
import FollowersService from "../../../services/auth-aware/followersService";

export default function Followers() {
  const followersService = useService(FollowersService)
  const followers = useAppSelector(store => store.followersSlice.followers)
    const dispatch = useAppDispatcher()

  useEffect(() => {
    (async()=>{
      try{
        const followers = await followersService.getFollowers() 
        // setFollowers(followers)
        dispatch(init(followers))
      }catch(e){
        alert(e)
      }
      
    })()
  }, [dispatch, followersService]);

  return (
    <div className="Followers">
      <h3>Followers </h3><br />
      {followers.length > 0 && <> 
      
       {followers.map((follow) => (
          <Follow key={follow.id} user={follow} />
        ))}
      </>}
       {followers.length ===0 && <Spinner /> }
    </div>
  );
}
