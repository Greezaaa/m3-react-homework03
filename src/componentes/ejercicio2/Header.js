import { Link } from "react-router-dom"
const Header = () => {
    return (
        <header>
            <h3>"React Routes"</h3>
            <ul>
                <li><Link to="/"> Inicio</Link></li>
                <li><Link to="/gatos"> Gatos</Link></li>
                <li><Link to="/perros"> Perros</Link></li>
            </ul>



        </header>
    )

}

export default Header 