import styled from "styled-components";


export const ContainerDiv = styled.div`
    background-color: #EEEDDE;
    height:100vh;
    width: 100vw;
    min-height: 100vh;
    padding: 2rem calc((100vw - 1200px) /2);
    font-size: 25px;
    

    @media screen and (max-width:450px) {
        height:100%;
        width: 100%;
        overflow-y: hidden;
    }
    `;

export const ContainerP = styled.p`
    width: 50%;
    margin: auto;
    display: flex;
    justify-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 8vw;

    a {
        text-decoration: none;
        color: black;
    }

    @media screen and (max-width:800px) {
        font-size: 20px;
        height:100%;
        width: 70%;
    }
`
export const ContainerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin:0 auto;`

export const ContainerImg = styled.img`
    height: 300px;
    min-height: 300px;
    max-width: 100%;
    margin-left: 100px;
    margin-top: 170px;


    @media screen and (max-width:600px) {
        height: 250px;
        min-height: 250px;
        max-width: 100%;
        margin: auto;
    }
`
