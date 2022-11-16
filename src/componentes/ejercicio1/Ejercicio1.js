import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Main from "./Main"
import Header from "./Header"
import Nombres from "./Nombres"

const Ejercicio1 = () => {
    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/nombres" element={<Nombres />} />
            </Routes>
            <Main />
        </BrowserRouter>

    )
}

export default Ejercicio1
