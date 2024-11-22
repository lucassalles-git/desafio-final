import styled from "styled-components";

export const Cabecalho = styled.header`
padding-bottom: 5px;
height: 15vh;
display: flex;
justify-content: space-around;
align-items: end;

img{
    @media (min-width: 320px) and (max-width: 440px){
        width: 15vw;
    }
}

@media (min-width: 320px) and (max-width: 440px){
    padding: 5px;
    flex-direction: column;
    align-items: center;
}

`;

export const Nav = styled.nav`
width: 65vw;
    display: flex;
    align-items: center;
    justify-content: end;

    @media (min-width: 320px) and (max-width: 440px){
        width: 100vw;
    }
    `;

export const Ul = styled.ul`
    width: 50%;
    display: flex;
    justify-content: space-around;
    list-style: none;

    font: 400 24px "Poppins", sans-serif;

    @media (min-width: 320px) and (max-width: 440px){
        width: 100vw;
        font-size: 1rem;
    }

a{
    text-decoration: none;
    color: #1E3932;
} 

a:hover{
    padding-bottom: 3px;
    border-bottom: 3px solid #037143;
}
`;