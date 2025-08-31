import axios from "axios"
import type Post from "../models/post"
import type PostDraft from "../models/post-draft"

class ProfileService {
    async getProfile(): Promise<Post[]> {
        // const profile = await fetch(`${import.meta.env.VITE_REST_SERVER_URL}/profile`).then<Post[]>(response => response.json())
        const {data} =await axios.get<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`)
        return data
    }

    async remove(id: string): Promise<boolean> {

        const response = await axios.delete(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`)
        return response.data
    }
    async newPost(draft: PostDraft): Promise<Post> {
  const response = await axios.post<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`,draft)
  return response.data
}

}

const profileService = new ProfileService()
export default profileService