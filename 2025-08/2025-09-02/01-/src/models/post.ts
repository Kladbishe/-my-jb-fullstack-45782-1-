import type PostComments from "./post-comments";
import type PostDraft from "./post-draft";
import type User from "./user";

export default interface PostModel extends PostDraft{
  id: string;
  userId: string;
  imageUrl: string;
  createdAt: string;
  user: User;
  comments: PostComments[];
}
