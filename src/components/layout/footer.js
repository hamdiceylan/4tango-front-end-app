import React from 'react'
import styled from 'styled-components'
import { SubTitle } from '../common/title' 

const FooterContainer = styled.div`
    display grid;
    padding: 20px;
    grid-auto-flow: column;
    background-color:#f6f6f6;
    @media (max-width: 990px) {
        grid-auto-flow: dense;
    }
`

const FooterItem = styled.div`
    justify-self: center;
    padding: 0px;
    @media (max-width: 990px) {
        justify-self: left;
    }
`

const Ul = styled.ul`
    list-style: none;
    margin-left:-40px;

`
const Li = styled.li`
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterItem>
                <SubTitle>Woman Shoes
                    <Ul>
                        <Li>Item 1</Li>
                        <Li>Item 2</Li>
                    </Ul>
                </SubTitle>
            </FooterItem>
            <FooterItem>
                <SubTitle>Man Shoes
                    <Ul>
                        <Li>Item 1</Li>
                        <Li>Item 2</Li>
                    </Ul>
                </SubTitle>
            </FooterItem>
            <FooterItem>
                <SubTitle>Man Trousers
                    <Ul>
                        <Li>Item 1</Li>
                        <Li>Item 2</Li>
                    </Ul>
                </SubTitle>
            </FooterItem>
            <FooterItem>
                <SubTitle>Woman Dresses
                    <Ul>
                        <Li>Item 1</Li>
                        <Li>Item 2</Li>
                    </Ul>
                </SubTitle>
            </FooterItem>
            <FooterItem>
                <SubTitle>Skirts
                    <Ul>
                        <Li>Item 1</Li>
                        <Li>Item 2</Li>
                    </Ul>
                </SubTitle>
            </FooterItem>
            <FooterItem>
                <SubTitle>Accessories
                    <Ul>
                        <Li>Item 1</Li>
                        <Li>Item 2</Li>
                    </Ul>
                </SubTitle>
            </FooterItem>
            <FooterItem>
                <SubTitle>Evening Wear
                    <Ul>
                        <Li>Item 1</Li>
                        <Li>Item 2</Li>
                    </Ul>
                </SubTitle>
            </FooterItem>
        </FooterContainer>
    )
}

export default Footer
