import axios from "axios"
import type { Game } from "../models/Game"
import type { GameDraft } from "../models/Game-draft"

class GameService {
    async getByAudienceId(audienceId: string): Promise<Game[]> {
        const { data } = await axios.get<Game[]>(`${import.meta.env.VITE_REST_SERVER_URL}/games/by-audience/${audienceId}`)
        return data
    }
    async getByMaxPrice(maxPrice: number): Promise<Game[]> {
        const { data } = await axios.get<Game[]>(`${import.meta.env.VITE_REST_SERVER_URL}/games/by-max-price?maxPrice=${maxPrice}`)
        return data
    }
    async create(draft: GameDraft): Promise<Game> {
        const { data } = await axios.post<Game>(`${import.meta.env.VITE_REST_SERVER_URL}/games`, draft)
        return data
    }
}

const gameService = new GameService()
export default gameService