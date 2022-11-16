import { Link } from "react-router-dom";
const Header = ({ peliculas }) => {

    return (
        <ul>
            {peliculas.map((pelicula, i) => {
                return (

                    <li key={i}> <Link to={"/peli" + i} >{pelicula.titulo}</Link></li>
                )
            })}
        </ul>
    )
}

export default Header