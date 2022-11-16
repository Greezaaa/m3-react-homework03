import { Route, Routes } from "react-router-dom";
import Pelicula from "./Pelicula";

const Peliculas = ({ peliculas }) => {

    return (
        <Routes>
            {peliculas.map((pelicula, i) => {
                return (
                    <Route key={i} path={"/peli" + i} element={<Pelicula pelicula={pelicula} />} />
                )
            })}
        </Routes>
    )
}

export default Peliculas