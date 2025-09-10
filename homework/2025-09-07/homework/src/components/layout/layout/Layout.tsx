import { useContext } from "react";
import Followers from "../../Follows/followers/Followers";
import Following from "../../Follows/following/Following";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../Main/Main";

import "./Layout.css";
import Login from "../../auth/login/Login";
import AutoContext from "../../auth/auth/AuthContext";

export default function Layout() {
    const authContext = useContext(AutoContext)
    const isLoggedIn = !!authContext?.jwt
    return (
        <div className='Layout'>

            {isLoggedIn && <>
                <header>
                    <Header />
                </header>
                <aside>
                    <Following />
                </aside>
                <aside>
                    <Followers />
                </aside>
                <main>
                    <Main />
                </main>
            </>}

            {!isLoggedIn && <Login />}
            <footer>
                <Footer />
            </footer>
        </div>
    )
}