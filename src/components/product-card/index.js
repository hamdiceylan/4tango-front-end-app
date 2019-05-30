import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Title from '../common/title'

const Card = styled.div`
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
    text-decoration:none;
`

const ProductCard = () => {
    return (
        <Card as={Link} to='/product-detail'>
            <img src='https://www.expressdancestore.com/wp-content/uploads/2018/03/greymagician-600x600.jpg' width='100%' alt=''/>
            <Title>Black & White / Tango Shoes</Title>
        </Card>
    )
}

export default ProductCard
