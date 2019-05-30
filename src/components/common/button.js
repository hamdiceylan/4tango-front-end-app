import React from 'react'
import styled from 'styled-components'

const ButtonStyle =  styled.button`
    width: 100%;
    color: white;
    background-color: black;
    height: 50px;
    font-size: 14px;
    font-weight: 500;
`

const Button = ({value, onClick}) => {
    return (
        <ButtonStyle>
            {value}
        </ButtonStyle>
    )
}

export default Button
