import axios from "axios"
import type { Book } from "../models/Book"
import type { BookDraft } from "../models/Book-draft"


class BookService{

    async search(query: string): Promise<Book[]> {
        const { data } = await axios.get<Book[]>(`${import.meta.env.VITE_REST_SERVER_URL}/books/search?q=${query}`)
        return data
    }

    async create(draft: BookDraft): Promise<Book> {
    const { data } = await axios.post<Book>(`${import.meta.env.VITE_REST_SERVER_URL}/books/create`, draft)
    return data
    }

    async delete(id: string): Promise<void> {
    const {data} =await axios.delete(`${import.meta.env.VITE_REST_SERVER_URL}/books/${id}`)
    return data
}
}
const bookService = new BookService()
export default bookService