import type Card from "../models/Furniture"
import "./FurnitureCard.css"

type Props ={
    item: Card
}

export default function FurnitureCard({item}: Props){
    const {name,dimensions,color,price} = item
    return(
        <div className="FurnitureCard">
            <h2>Name: {name}</h2>
            <p>Dimensions: {dimensions}</p>
            <p>Color: {color}</p>
            <p>Price: {price}$</p>
        </div>
    )
}