import styled from "styled-components";

export const Section = styled.section`
padding: 2vh 5.8vw 0 5.8vw;
height: 85vh;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Info = styled.section`
    width: 32vw;

    .sobre{
        font: 700 1.6rem "Inter", sans-serif;
        color: #1E3932;
    }

    h2{
        font: 400 64px "Poppins", sans-serif;
        color: #1E3932;
}

    p{
        font: 400 24px "Poppins", sans-serif;
        color: #1E3932;
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
`;