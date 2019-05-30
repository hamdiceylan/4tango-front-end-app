import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Menu = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr .5fr .5fr .5fr;
    padding: 20px;
    box-shadow: 0px 5px 5px -3px rgba(234, 233, 233, 0.58);
    align-items: center;
    padding-left: 70px;
    @media (max-width: 990px) {
        grid-template-columns: 1fr;
        justify-items:center;
        padding:0px;
    }
`

export const MenuLink = styled(Link)`
    text-decoration: none;
    color: black;
    place-self:center;
    @media (max-width: 990px) {
        display:none;
    }
`