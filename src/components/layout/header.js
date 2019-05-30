import React  from 'react'
import { Menu, MenuLink } from './style'
import SearchBar from '../common/search-bar'

function Header() {
    return (
        <React.Fragment>
            <Menu>
                <img src='/img/4tango-logo.png' alt='4tango.com logo' height='30px' />
                <SearchBar />
                <MenuLink to="/">Home</MenuLink>
                <MenuLink to="/login">Login</MenuLink>
                <MenuLink to="/account">Account</MenuLink>
            </Menu>
        </React.Fragment>
    )
}

export default Header

