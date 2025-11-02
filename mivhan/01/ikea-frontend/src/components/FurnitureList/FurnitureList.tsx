import FurnitureCard from "../common/FurnitureCard"
import type Furniture from "../models/Furniture"

import "./FurnitureList.css"

export default function FurnitureList(){
      const furniture: Furniture[] = [
    { id: 1, name: "Chair", dimensions: "100 x 50 x 40", color: "Brown", price: 199 },
    { id: 2, name: "Table", dimensions: "150 x 80 x 70", color: "White", price: 499 },
    { id: 3, name: "Table", dimensions: "150 x 80 x 70", color: "White", price: 499 },
    { id: 4, name: "Table", dimensions: "150 x 80 x 70", color: "White", price: 499 },
    { id: 5, name: "Table", dimensions: "150 x 80 x 70", color: "White", price: 499 }
  ]
    return(
        
        <div className="FurnitureList">
            {furniture.map((item)=>(
                <FurnitureCard key={item.id} item={item} />
            ))}
        </div>
    )
}