import { useEffect, useState } from "react"
import "./Search.css"
import type { Author } from "../../../models/Author"

import authorsService from "../../../services/Author"
import { useForm } from "react-hook-form"
import type { Book } from "../../../models/Book"
import bookService from "../../../services/Book"

export default function Search(){
    interface SearchBook{
        searchBook: string
    }
    const [author, setAuthor] = useState<Author[]>([])
    const [book, setBook] = useState<Book[]>([])
    const {register, handleSubmit} = useForm<SearchBook>()

     useEffect(()=>{
        (async()=>{
               try{
                const authors = await authorsService.getAll()
                setAuthor(authors)
            
               }catch(e){
                alert(e)
               }
            
        })()
    }, [])

        async function filterBook(draft: SearchBook){

        try{
             const book = await bookService.search(draft.searchBook)
             setBook(book)
        }catch(e){
            alert(e)
        }

    }


    return(
        <div className="Search">
            <ul>
                {author.map(({authorId,name, lastName})=> <li key={authorId}> {lastName} {name}</li>)}
            </ul>
            <form onSubmit={handleSubmit(filterBook)}>
                <input placeholder="book" {...register("searchBook")}/>
                 <button>filter</button>
            </form>
            <ul>
                {book.map(({bookName,numOfPages,price,id,})=> <li key={id}>{bookName}- {numOfPages} pages- {price}$</li>)}
            </ul>
        </div>
    )
}