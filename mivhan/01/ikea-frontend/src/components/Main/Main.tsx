import { Navigate, Route,  Routes } from "react-router-dom";
import FurnitureList from "../FurnitureList/FurnitureList";
import AddFurniture from "../addFurniture/AddFurniture";

export default function Main(){
    return(
        <Routes>
            <Route path="/" element={<Navigate to='/furniture' />} />
            <Route path="/furniture" element= {<FurnitureList />} />
            <Route path="/add-furniture" element={<AddFurniture /> } />
        </Routes>
    )
}