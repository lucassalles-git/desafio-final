import { Link } from "react-router-dom"
import copoLaranja from "../../assets/image/laranja.png"
import copoVermelho from "../../assets/image/vermelho.png"
import copoAmarelo from "../../assets/image/amarelo.png"
import { CoposP } from "./styled"

export default function Copos() {
    return (
        <CoposP>
            <div><Link to="/"><img src={copoLaranja} alt="Copo Laranja" /></Link></div>
            <div><Link to="/Home2"><img src={copoVermelho} alt="Copo Vermelho" /></Link></div>
            <div><Link to="/Home3"><img src={copoAmarelo} alt="Copo Amarelo" /></Link></div>
        </CoposP>
    )
}