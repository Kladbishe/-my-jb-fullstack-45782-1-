import { useNavigate } from "react-router-dom";
import type PostModel from "../../../models/post";
import profileService from "../../../services/profile";
import "./Post.css";

interface PostProps {
  post: PostModel;
  isEditAllowed: boolean;
  removePost(id: string): void;
}

export default function Post(props: PostProps) {
  const {
    id,
    title,
    body,
    createdAt,
    imageUrl,
    comments,
    user: { username },
  } = props.post;
  const { removePost, isEditAllowed } = props;
  async function removeMe() {
    try {
      if (confirm("Are you sure?")) {
        await profileService.remove(id);
        removePost(id);
      }
    } catch (e) {
      alert(e);
    }
  }
  const navigate = useNavigate()

  function EditMe(){
    
    navigate(`/profile/edit/${id}`)
  }
  return (
    <li key={id}>
      {username}
      <br />
      <b>{title}</b>
      <br />
      <br />
      {body}
      <br />
      <br />
      {imageUrl && <img src={imageUrl} alt="images" />}
      <br />
      {new Date(createdAt).toLocaleTimeString()} ({comments.length})
      <br />
      <br />
      {isEditAllowed && <div>
        <button onClick={removeMe}>Delete</button><button onClick={EditMe}>Edit</button></div>}
    </li>
  );
}
