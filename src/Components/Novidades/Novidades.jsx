import { Section, Info, Button } from "./styled"
import Grao from "../../assets/image/grao-de-cafe.png"

export default function Novidades() {
    return (
        <Section>
            <Info>
                <p className="preparacao">PREPARAÇÃO</p>
                <h2>Níveis de torra</h2>
                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>

                <Button>SAIBA MAIS</Button>
            </Info>
            <img src={Grao} alt="Grão de Café" />
        </Section>
    )
}