import axios from "axios"

import type { Author } from "../models/Author";


class AuthorsService {
    
    async getAll(): Promise<Author[]> {
        const { data } = await axios.get<Author[]>(`${import.meta.env.VITE_REST_SERVER_URL}/authors`);
        return data;
    }
}

const authorsService = new AuthorsService()
export default authorsService
