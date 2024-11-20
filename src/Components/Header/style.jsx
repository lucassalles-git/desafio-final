import styled from "styled-components";

export const Cabecalho = styled.header`
padding-bottom: 5px;
height: 15vh;
display: flex;
justify-content: space-around;
align-items: end;
`;

export const Nav = styled.nav`
width: 65vw;
    display: flex;
    align-items: center;
    justify-content: end;
    `;

export const Ul = styled.ul`
    width: 50%;
    display: flex;
    justify-content: space-around;
    list-style: none;

    font: 400 24px "Poppins", sans-serif;

a{
    text-decoration: none;
    color: #1E3932;
} 

a:hover{
    padding-bottom: 3px;
    border-bottom: 3px solid #1E3932;
}
`;