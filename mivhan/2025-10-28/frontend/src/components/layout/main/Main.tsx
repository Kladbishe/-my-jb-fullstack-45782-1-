import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import List from "../../games/list/List";
import NewGame from "../../games/new/NewGame";

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/games" />} />
            <Route path="/games" element={<List />} />
            
            <Route path="/new-game" element={<NewGame />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
