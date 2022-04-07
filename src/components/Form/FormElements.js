import styled from "styled-components";


export const FormWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1200px) /2);
    background: #EEEDDE;
    color: #141E27;
    
    

    @media screen and (max-width:450px) {
        height:100%;
        width: 100%;
        overflow-y: hidden;
       
    }
    `;


export const FormForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 10px;
    align-items: flex-end;
    


    h2 {
        font-size: clamp(2rem, 1.5vw, 3rem);
        text-align: center;
        text-transform: uppercase;

    }

    @media screen and (max-width:450px) {
            margin-left:15px;
    }
    `;


export const FormButton = styled.a`
    font-size: 1rem;
    padding: 1rem 4.2rem;
    border: none;
    background: #141E27;
    color: #fff;
    transition: 0.2s ease-out;
    text-decoration: none;
    

    &:hover {
        background: #E0DDAA;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`;


export const FormInput = styled.input`
    display: block;
    width: 300px;
    height: 30px;

`;

export const FormMessage = styled.input`
    display: block;
    width: 300px;
    height: 150px;

`