import copoVermelhoG from "../../assets/image/vermelho2x.png"
import Ellipse2 from "../../assets/image/ellipse2.png"
import Copos from "../Copos/Copos"

import { Main, Info, Title, Button, SectionOne, ContainerCopoG, CopoG } from "./style"

export default function Home2() {
    return (
        <Main>
            <SectionOne>
                <Info>
                    <h3>Mais que Café</h3>
                    <Title><h2>Isso é</h2> <h1>Starbucks</h1></Title>
                    <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
                    <Button>SAIBA MAIS</Button>
                </Info>

                <ContainerCopoG>
                    <img src={Ellipse2} alt="Um Circulo Verde atrás da Bebida Laranja" />

                    <CopoG src={copoVermelhoG} alt="Um copo grande com bebiba Laranja" />
                </ContainerCopoG>
            </SectionOne>

            <Copos/>
        </Main>
    )
}