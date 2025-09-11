import { useNavigate } from "react-router-dom";
import type PostModel from "../../../models/post";

import "./Post.css";
import PostComments from "../comments/post-comments/PostComments";

import { useAppDispatcher } from "../../../redux/hooks";
import { deletePost } from "../../../redux/profile-slice";
import SpinnerButton from "../../common/spinner-buttom/SpinnerButton";
import { useState } from "react";
import useService from "../../../hooks/use-service";
import ProfileService from "../../../services/auth-aware/ProfileService";

interface PostProps {
  post: PostModel;
  isEditAllowed: boolean;
  isNew?: boolean;
}

export default function Post(props: PostProps) {
  const profileService = useService(ProfileService)
  const {
    id,
    title,
    body,
    createdAt,
    imageUrl,
    comments,

    user: { name },
  } = props.post;
  const { isEditAllowed, isNew } = props;
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const dispatch = useAppDispatcher();

  async function removeMe() {
    try {
      if (confirm("Are you sure?")) {
        setIsSubmitting(true);
        await profileService.remove(id);
        dispatch(deletePost(id));
      }
    } catch (e) {
      alert(e);
    } finally {
      setIsSubmitting(false);
    }
  }
  const navigate = useNavigate();

  function EditMe() {
    navigate(`/profile/edit/${id}`);
  }

  const className = `Post ${isNew? "new-post": ''}`

  return (
    <div className={className}>
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
      {isEditAllowed && (
        <div>
          <SpinnerButton
            onClick={removeMe}
            buttonText="Delete"
            loadingText="deleting"
            isSubmitting={isSubmitting}
          />{" "}
          <button onClick={EditMe}>Edit</button>
        </div>
      )}
      <PostComments comments={comments} postId={id} />
    </div>
  );
}
