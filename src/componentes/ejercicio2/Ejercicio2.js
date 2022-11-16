import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./Main"
import Header from "./Header"
import Perros from "./Perros"
import Gatos from "./Gatos"

const Ejercicio2 = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes >
                <Route path="/" element={< Main />} />
                <Route path="/perros" element={< Perros />} />
                <Route path="/gatos" element={< Gatos />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Ejercicio2