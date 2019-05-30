import React from 'react'
import styled from 'styled-components'

  const SearchBarStyle = styled.input.attrs({
    type: 'text',
  })`
    box-sizing: border-box;
    background-color: #f6f6f6;
    border: none;   
    border-radius: 3px;
    font-size: 14px;
    height: 37px;
    padding-left: 40px;
    width: 405px;
    
    @media (max-width: 990px) {
        display:none;
    }

    ::placeholder {
        color: silver;
    }

    :focus{
        outline: none;
    }
`

const SearchBar = () => {
    return (
        <SearchBarStyle 
            placeholder='Search tango dress or tango shoes' 
            type='text'
        />
    )
}

export default SearchBar 
