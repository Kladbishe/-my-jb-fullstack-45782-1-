import { useForm } from "react-hook-form"
import "./NewGame.css"
import type { GameDraft } from "../../../models/Game-draft"
import { useEffect, useState } from "react"
import type { Audience } from "../../../models/Audience"
import audienceService from "../../../services/audience"
import gameService from "../../../services/game"
import { useNavigate } from "react-router-dom"

export default function NewGame(){

        const [audiences, setAudiences] = useState<Audience[]>([])
    const {register, handleSubmit} = useForm<GameDraft>()
        const navigate = useNavigate()
    async function submit(draft:GameDraft){
        try{
            const newGame = await gameService.create(draft)
            alert(`game added successfuly ${newGame}`)
            console.log('API base =', import.meta.env.VITE_REST_SERVER_URL);
            navigate(`/games`)
        }catch(e){
            alert(e)
        }
    }

    useEffect(()=>{
            (async()=>{
                try{
                    const audiences = await audienceService.getAll()
                    setAudiences(audiences)
                }catch(e){
                    alert(e)
                }
            })()
        }, [])

    return(
        <div className="NewGame">
            <form onSubmit={handleSubmit(submit)}>
                <select {...register('audienceId')}>
                    {audiences.map(({id, name})=> <option key={id} value={id}>{name}</option>)}
                </select>
                <input placeholder="name" {...register('name')} />
                <textarea placeholder="description" {...register("description")}></textarea>
                <input placeholder="price" type="number" {...register('price')} />
                <button>add</button>
            </form>
        </div>
    )
}