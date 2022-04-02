import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const NavContainer = styled.nav`
    background-color: #141e27;
    margin-left: 10px;
    margin-top: 10px;
`

export const Nav = styled.nav`
    font-weight: 700;
    padding: 20px 12px;
    `
export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    text-decoration: none;
    justify-content: left;
    max-width: fit-content;
    cursor: pointer;
    
    
    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;           
        font-size:25px;
}`


