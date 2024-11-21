import styled from "styled-components";

export const Section = styled.section`
padding: 2vh 5.8vw 0 5.8vw;
height: 85vh;
display: flex;
justify-content: space-between;
align-items: center;

@media (min-width: 320px) and (max-width: 440px){
    margin-top: 4vh;
    padding: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    gap: 2vh;
}

img{
    @media (min-width: 320px) and (max-width: 440px){
        width: 50vw;
        height: 27vh;
    }
}
`;

export const Info = styled.section`
    width: 32vw;

    @media (min-width: 320px) and (max-width: 440px){
        padding: 10px;
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: justify;
    }

    .sobre{
        font: 700 1.6rem "Inter", sans-serif;
        color: #1E3932;

        @media (min-width: 320px) and (max-width: 440px){
            font-size: 1rem;
        }
    }

    h2{
        font: 400 64px "Poppins", sans-serif;
        color: #1E3932;

        @media (min-width: 320px) and (max-width: 440px){
            font-size: 30px;
        }
}

    p{
        font: 400 24px "Poppins", sans-serif;
        color: #1E3932;

        @media (min-width: 320px) and (max-width: 440px){
            font-size: 0.8rem;
        }
    }
    `;

export const Button = styled.button`
    margin-top: 40px;
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
    margin-top: 20px;
    width: 100px;
    height: 30px;
    font-size: 10px;
}
`;