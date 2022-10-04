import { Routes,BrowserRouter,Route } from "react-router-dom";

import Home from "../Pages/Login"
import ListaDeDados from "../Pages/Dashboard";

function RouteMananger(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/listadedados" element={<ListaDeDados/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteMananger