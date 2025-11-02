import { Navigate, Route, Routes } from "react-router-dom";

import Regions from "../../regions/Regions";
import NewSite from "../../site/NewSite";
import NotFound from "../not-found/NotFound";


export default function Main() {
    return (
        <Routes>
            {/* <Route path="/" element={<Profile />} /> */}
            <Route path="/" element={<Navigate to="/site" />} />
            <Route path="/site" element={<Regions />} />
            <Route path="/new-site" element={<NewSite />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
