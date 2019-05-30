import React from 'react'
import styled from 'styled-components'
import Title  from '../common/title'
import PriceTag  from '../common/price-tag'
import ProductCard from '../product-card'
import Button from '../common/button'

const ProductDetailContainer = styled.div`
    display: grid;
    grid-template-columns:  25% 30% 20% 25%;
    padding-top:20px;
    grid-column-gap: 20px;
    grid-template-areas: ". slider detail ."
                         ". . detail ."
                         ". . detail ."
                         ". . detail ."
                         "card card card card";

    @media (max-width: 990px) {
        grid-template-columns:  1fr;
        grid-template-areas:"slider"
                            "detail "
                            "card"
    }
    
`
const ImageSlider = styled.div`
    grid-area: slider;
`
const DetailContainer = styled.div`
    grid-area: detail;
`

const RelatedProductsCardContainer  = styled.div`
    grid-area: card;
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    grid-columns: 1 / 4;
    padding: 0px 25%;
    gap: 10px;
    @media (max-width: 990px) {
        grid-template-columns:  1fr;
        padding: 0px 5px;
    }

`
const ProductDetail = () => {
    return (
        <ProductDetailContainer>
            <ImageSlider>
                <img src='https://www.expressdancestore.com/wp-content/uploads/2018/03/greymagician-600x600.jpg' width='100%' alt=''/>
            </ImageSlider>
            <DetailContainer>
                <Title>Tango Shoes Male</Title>
                <PriceTag> £ 123</PriceTag>
                <Title>Avalilable Sizes  : 40, 41, 42</Title>
                <Button 
                    value="Buy"
                    onClick={() => console.log('some one want to buy your product')}
                ></Button>
                <Title>Details:</Title>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>

            </DetailContainer>
            <RelatedProductsCardContainer>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </RelatedProductsCardContainer>
        </ProductDetailContainer>
    )
}

export default ProductDetail