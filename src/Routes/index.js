import { Routes,BrowserRouter,Route } from "react-router-dom";

import ListaDeDados from "../Pages/Dashboard";

function RouteMananger(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListaDeDados/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteMananger