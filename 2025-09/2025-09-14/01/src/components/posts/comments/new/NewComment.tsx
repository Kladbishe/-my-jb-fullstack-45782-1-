import { useForm } from "react-hook-form"
import "./NewComment.css"
import type PostCommentDraft from "../../../../models/post-comment-draft"



import { useState } from "react"
import SpinnerButton from "../../../common/spinner-buttom/SpinnerButton"
import { useAppDispatcher } from "../../../../redux/hooks"
import  { newComment } from "../../../../redux/profile-slice"
import useService from "../../../../hooks/use-service"
import CommentsService from "../../../../services/auth-aware/commentsService"
interface newCommentProps{
    postId: string
}
export default function NewComment(props:newCommentProps){
    const commentsService = useService(CommentsService)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const {postId } = props

    const {register , handleSubmit, reset, formState} =useForm<PostCommentDraft>()

    const dispatch =useAppDispatcher()

    async function submit(draft:PostCommentDraft){
        try{
            setIsSubmitting(true)
            const comment = await commentsService.newComment(postId,draft)
            reset()
            dispatch(newComment(comment))
            
        }catch(e){
            alert(e)
        }finally{
            setIsSubmitting(false)
        }
    }

    return(
        <div className="NewComment">
            <form onSubmit={handleSubmit(submit)}>
                <textarea {...register('body',{
                    required:{
                        value: true,
                        message: "Body is required"
                    },
                    minLength:{
                        value: 20,
                        message: "Shot comments are not for us"
                    }
                })}></textarea>
                <div className="formError">{formState.errors.body?.message}</div>
                <SpinnerButton 
                buttonText="add comment"
                loadingText="adding comment"
                isSubmitting={isSubmitting}/>
            </form>
        </div>
    )
}