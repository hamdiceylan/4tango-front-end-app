import React from 'react'
import Title, { SubTitle } from '../common/title'
import styled from 'styled-components'
import Button from '../common/button'

const LoginForm = styled.form`
    display: grid;
    grid-column-templates: 1fr;
    padding: 0 30%;
    margin-top : 10%;
    @media (max-width: 990px) {
        padding: 0 2%;
    }
`

const PasswordInput = styled.input.attrs({
    type: "password"
})`
    height:30px;
    margin-bottom: 30px;
`

const EmailInput = styled.input.attrs({
    type: "text"
})`
    height:30px;
`
  

const Login = () => {
    return (
        <LoginForm>
            <Title>Login</Title>
            <SubTitle>User Name</SubTitle>
            <EmailInput/>

            <SubTitle>Password</SubTitle>
            <PasswordInput />

            <Button value="Login"></Button>
        </LoginForm>
    )
}

export default Login
