import styled from "styled-components";


export const Main = styled.main`
height: 85vh;

@media (min-width: 320px) and (max-width: 440px){
    width: 100vw;
}
`;

export const Info = styled.section`
    margin: 12vh 0 0 7vw;
    width: 740px;
    height: 58vh;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 320px) and (max-width: 440px) {
        padding: 10px;
        margin: auto;
        width: 320px;
        height: 59.0vh;

        align-items: center;
        justify-content: center;
        gap: 0;

        text-align: justify;
    }

h3{
    font: 400 64px "Inter", sans-serif;
    color: #000000CC;

    @media (min-width: 320px) and (max-width: 440px){
        font-size: 1.2rem;
    }
}

p{
    font: 400 24px "Poppins", sans-serif;

    @media (min-width: 320px) and (max-width: 440px){
        font-size: 0.8rem;
    }
}
`;

export const Title = styled.div`
    height: 10vh;
    display: flex;
    align-items: center;
    gap: 1vw;

    h2{
        font: 400 64px "Poppins", sans-serif;

        @media (min-width: 320px) and (max-width: 440px){
        font-size: 1.5rem;
    }
    }

    h1{
        font: 700 96px "Poppins", sans-serif;
        color: #037143;

        @media (min-width: 320px) and (max-width: 440px){
        font-size: 30px;
    }
}
`;

export const Button = styled.button`
    width: 293px;
    height: 64px;
    border: none;
    border-radius: 30px;
    background-color: #037143;

    font: 700 24px "Inter", sans-serif;
    color: #FFFFFF;

    &:hover{
        background-color: #04643c;
    }

    @media (min-width: 320px) and (max-width: 440px){
        margin-top: 10px;
        width: 100px;
        height: 30px;
        font-size: 10px;
    }
`;

export const SectionOne = styled.section`
height: 85vh;
display: flex;
justify-content: space-between;

@media (min-width: 320px) and (max-width: 440px){
       display: flex;
       flex-direction: column;
    }
`;

export const ContainerCopoG = styled.div`
border: solid;
height: 85vh;
display: flex;
align-items: end;
position: relative;

@media (min-width: 320px) and (max-width: 440px){
    height: 26vh;
    justify-content: end;
    }

    img{
        @media (min-width: 320px) and (max-width: 440px){
       height: 20vh;
    }
    }
`;

export const CopoG = styled.img`
    width: 483px;
    height: 502px;

    position: absolute;
    top: 19vh;
    left: 4vw;

    @media (min-width: 320px) and (max-width: 440px){
        border: solid;
       width: 35vw;
       top: -0.01vh;
       left: 65vw;
    }
`;