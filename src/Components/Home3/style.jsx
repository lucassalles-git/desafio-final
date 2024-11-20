import styled from "styled-components";


export const Main = styled.main`
height: 85vh;
`;

export const Info = styled.section`
    margin: 12vh 0 0 7vw;
    width: 740px;
    height: 58vh;
    display: flex;
    flex-direction: column;
    gap: 20px;

h3{
    font: 400 64px "Inter", sans-serif;
    color: #000000CC;
}

p{
    font: 400 24px "Poppins", sans-serif;
}
`;

export const Title = styled.div`
    height: 10vh;
    display: flex;
    align-items: center;
    gap: 1vw;

    h2{
        font: 400 64px "Poppins", sans-serif;
    }

    h1{
        font: 700 96px "Poppins", sans-serif;
        color: #037143;
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
`;

export const SectionOne = styled.section`
height: 80vh;
display: flex;
justify-content: space-between;
`;

export const ContainerCopoG = styled.div`
height: 85vh;
display: flex;
align-items: end;
position: relative;

.circuloAmarelo{
    width: 587px;
    height: 502px;
}
`;

export const CopoG = styled.img`
    width: 483px;
    height: 502px;

    position: absolute;
    top: 19vh;
    left: 4vw;
`;