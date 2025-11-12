import { useForm } from "react-hook-form"
import type { BookDraft } from "../../../models/Book-draft"
import "./Create.css"
import type { Author } from "../../../models/Author"
import { useEffect, useState } from "react"
import authorsService from "../../../services/Author"
import bookService from "../../../services/Book"
import { useNavigate } from "react-router-dom"

export default function Create(){
            const [author, setAuthor] = useState<Author[]>([])
    const {register, handleSubmit} = useForm<BookDraft>()

    const navigate = useNavigate()


    async function submit(draft:BookDraft){
        try{
            const newBook = await bookService.create(draft)
            alert(`book added successfuly ${newBook.bookName}`)
            console.log('API base =', import.meta.env.VITE_REST_SERVER_URL);
            navigate(`/info`)
        }catch(e){
            alert(e)
        }
    }


        useEffect(()=>{
            (async()=>{
                try{
                    const author = await authorsService.getAll()
                    setAuthor(author)
                }catch(e){
                    alert(e)
                }
            })()
        }, [])

 return(
    <div className="Create">
        <form onSubmit={handleSubmit(submit)}>
            <select {...register('authorId')}>
                    {author.map(({authorId, name,lastName})=> <option key={authorId} value={authorId}>{name} {lastName}</option>)}
            </select>
                    <input placeholder="name" {...register('bookName')} />
                <input placeholder="description" type="number" required min={5} max={1000} {...register("numOfPages")}/>
                <input placeholder="price" type="number"  min={0} required max={1000} {...register('price')} />
                <button>add</button>
            
        </form>
    </div>
 )
}