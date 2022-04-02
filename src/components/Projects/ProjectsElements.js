import styled from "styled-components";

export const ProjectContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1200px) /2);
    background: #E0DDAA;
    color: #141E27;
`;

export const ProjectsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content:space-around;
    /* TALVEZ PRECISE DE ALTERAÇÃO NO FUTURO 
    justift-content:center */

`;

export const ProjectsCard = styled.div`
    line-height: 2;
    width: 300px;
`;

export const ProjectsImg = styled.img`
    height: 300px;
    min-height: 300px;
    max-width: 100%;
`;

export const ProjectsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    text-transform: uppercase;
`;

export const ProjectsTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;

export const ProjectsInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`;

export const ProjectsDesc = styled.p`
    margin-bottom: 1rem;
`;

export const ProjectsButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #141E27;
    color: #fff;
    transition: 0.2s ease-out;
    

    &:hover {
        background: #EEEDDE;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }

`;