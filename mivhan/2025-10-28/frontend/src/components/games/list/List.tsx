import { useEffect, useState, type ChangeEvent } from "react"
import "./List.css"
import type { Audience } from "../../../models/Audience"
import audienceService from "../../../services/audience"
import type { Game } from "../../../models/Game"
import gameService from "../../../services/game"
import { useForm } from "react-hook-form"


export default function List(){

    interface MaxPrice{
        maxPrice: number
    }

    const [audiences, setAudiences] = useState<Audience[]>([])
    const [selectedAudienceId, setSelectAudienceId] = useState<string>('')
    const [games, setGames] = useState<Game[]>([])

    const {register, handleSubmit} = useForm<MaxPrice>()


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

function audienceChanged(event: ChangeEvent<HTMLSelectElement>){
    setSelectAudienceId(event.currentTarget.value)
}



    useEffect(()=>{
        (async()=>{
            if(selectedAudienceId){
                try{
                const games = await gameService.getByAudienceId(selectedAudienceId)
                setGames(games)
            }catch(e){
                alert(e)
            }
            }
            
        })()
    }, [selectedAudienceId])

    async function filterMaxPrice(draft: MaxPrice){

        try{
             const games = await gameService.getByMaxPrice(draft.maxPrice)
             setGames(games)
        }catch(e){
            alert(e)
        }

    }

    return(
        <div className="List">
            <div>
                <select onChange={audienceChanged}>
                    {audiences.map(({id, name})=> <option key={id} value={id}>{name}</option>)}
                </select>

                <form onSubmit={handleSubmit(filterMaxPrice)}>
                    <input placeholder="max price" {...register("maxPrice")}/>
                    <button>filter</button>
                </form>

                <ul>
                    {games.map(({id, name, price})=> <li key={id}>{name} - {price}$</li> )}
                </ul>
                 
            </div>
        </div>
    )
}