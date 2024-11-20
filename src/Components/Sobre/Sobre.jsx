import { Section, Info, Button } from "./style"
import Loja from "../../assets/image/loja.png"

export default function Sobre() {
    return (
        <Section>
            <img src={Loja} alt="Primeira loja da StarBucks" />
            <Info>

                <p className="sobre">Sobre a Starbucks</p>

                <h2>Nosso Legado</h2>

                <p>Todos os dias esperamos fazer duas coisas: dividir um ótimo café com nossos amigos e ajudar a tornar o mundo um pouquinho melhor. Já era assim quando a primeira Starbucks abriu em 1971 e continua sendo assim até hoje.</p>

                <Button>SAIBA MAIS</Button>
            </Info>
        </Section>
    )
}