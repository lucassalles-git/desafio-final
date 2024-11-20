import { Link } from "react-router-dom"
import logoMarca from "../../assets/image/logo.png"
import { Cabecalho, Nav, Ul } from "./style"

export default function Header() {
    return (
        <Cabecalho>
            <img src={logoMarca} alt="Logomarca Starbucks" />

            <Nav>
                <Ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Novidades">Novidades</Link></li>
                    <li><Link to="/Sobre">Sobre</Link></li>
                </Ul>
            </Nav>
        </Cabecalho>
    )
}