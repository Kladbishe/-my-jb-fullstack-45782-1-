import type PostModel from '../../../models/post'
import profileService from '../../../services/profile'
import './Post.css'

interface PostProps {
    post: PostModel,
    removePost(id:string): void
}

export default function Post(props: PostProps) {
    const { id, title, body, createdAt, imageUrl, comments, user: { username } } = props.post
    const {removePost} = props
   async function removeMe(){
        try{
            if(confirm('Are you sure?')){
                await profileService.remove(id)
                removePost(id)
            }
            
        }catch(e){
            alert(e)
        }
    }

    return (
        <li key={id}>
            {username}
            <br />
            <b>{title}</b>
            <br /><br />
            {body}
            <br /><br />
            {imageUrl && <img src={imageUrl} alt="images" />}
            <br />
            {(new Date(createdAt)).toLocaleTimeString()} ({comments.length})
            <br /><br />
            <button onClick={removeMe}>Delete</button>
        </li>
    )
}

