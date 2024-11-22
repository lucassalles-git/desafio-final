import styled from "styled-components";

export const CoposP = styled.section`
height: 13vh;
width: 19vw;
display: flex;
gap: 1vw;

position: absolute;
top: 83vh;
left: 28.9vw;

@media (min-width: 320px) and (max-width: 440px){
    height: 31vh;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    top: 69vh;
    left: 5vw;
    }

img{
    border-radius: 100%;
    transition: all 0.4s;

    @media (min-width: 320px) and (max-width: 440px){
       width: 13vw;
    }
}

img:hover{
    transform: rotate(11deg);
    transition: all 0.4s;

    &.fundoVerde{
        border-radius: 100%;
        background-color: #037143;
    }

    &.fundoVermelho{
        border-radius: 100%;
        background-color: #97090C;
    }

    &.fundoAmarelo{
        border-radius: 100%;
        background-color: #DECD13;
    }
}
`;