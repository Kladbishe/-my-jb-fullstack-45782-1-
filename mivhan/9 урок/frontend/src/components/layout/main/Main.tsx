import { Navigate, Route, Routes } from "react-router-dom";

import NotFound from "../not-found/NotFound";
import Books from "../../books/list/Book";
import Create from "../../books/create/Create";
import Search from "../../books/search/Search";
import Rashi from "../../Rashi/Rashi";


export default function Main() {
    return (
        <Routes>
            {/* <Route path="/" element={<Profile />} /> */}
            <Route path="/" element={<Navigate to="/info" />} />
            <Route path="/info" element={<Rashi />} />
            <Route path="/authors" element={<Books />} />
            <Route path="/books/create" element={<Create />} />
            <Route path="/books/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
