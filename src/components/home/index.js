import React from 'react'
import ProductCard from '../product-card'
import styled from 'styled-components'

const HomeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    align-items: center;
    padding: 0px 15%;
    @media (max-width: 990px) {
        padding: 10px;
    }
`

const ProductDetail = () => {
    return (
        <HomeContainer>
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </HomeContainer>
    )
}

export default ProductDetail
