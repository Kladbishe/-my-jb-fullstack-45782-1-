import { useNavigate } from "react-router-dom";
import type PostModel from "../../../models/post";
import profileService from "../../../services/profile";
import "./Post.css";
import PostComments from "../comments/post-comments/PostComments";

import { useAppDispatcher } from "../../../redux/hooks";
import  { deletePost } from "../../../redux/profile-slice";

interface PostProps {
  post: PostModel;
  isEditAllowed: boolean;
}

export default function Post(props: PostProps) {
  const {
    id,
    title,
    body,
    createdAt,
    imageUrl,
    comments,

    user: { name },
  } = props.post;
  const {  isEditAllowed } = props;

  const dispatch = useAppDispatcher()

  async function removeMe() {
    try {
      if (confirm("Are you sure?")) {
        await profileService.remove(id);
        dispatch(deletePost(id));
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
      {name}
      <br />
      <b>{title}</b>
      <br />
      <br />
      {body}
      <br />
      <br />
      {imageUrl && <img src={imageUrl} alt="images" />}
      <br />
      {new Date(createdAt).toLocaleTimeString()}
      <br />
      <br />
      {isEditAllowed && <div>
        <button onClick={removeMe}>Delete</button><button onClick={EditMe}>Edit</button></div>}
        <PostComments 
        comments={comments}
        postId={id}
         />
    </li>
  );
}
