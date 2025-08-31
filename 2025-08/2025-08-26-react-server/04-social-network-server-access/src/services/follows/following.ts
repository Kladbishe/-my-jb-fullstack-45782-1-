import type User from "../../models/user";


class FollowingService{
    async getFollowing():Promise<User[]>{
        const followingService = await fetch(`${import.meta.env.VITE_REST_SERVER_URL}/follows/following`).then<User[]>(response => response.json())
                return followingService
    }
}
const followingService = new FollowingService()
export default followingService