import { useEffect, useState } from "react";
import "./Followers.css";
import type User from "../../../models/user";
import followersService from "../../../services/follows/followers";
import Follow from "../Follow/Follow";

export default function Followers() {
  const [followers, setFollowers] = useState<User[]>([]);

  useEffect(() => {
    followersService.getFollowers().then(setFollowers).catch(alert);
  }, []);

  return (
    <div className="Followers">
        {followers.map((follow) => (
          <Follow key={follow.id} user={follow} />
        ))}
    </div>
  );
}
