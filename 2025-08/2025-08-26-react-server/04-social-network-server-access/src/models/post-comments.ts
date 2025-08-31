import type User from "./user";

export default interface PostComments{
    id: string,
    postId: string,
    userId: string,
    body: string,
    createdAt: string,
    // updatedAt: string,
    user: User
}