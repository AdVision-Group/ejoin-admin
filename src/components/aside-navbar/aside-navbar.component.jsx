import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {useAuthContext} from '../../context/auth/auth.context'
import {useHistory} from 'react-router-dom'


import EjoinLogo from '../../images/logo/ejoin-logo.png'

import { FaUserAlt } from 'react-icons/fa'
import { RiLogoutCircleLine } from 'react-icons/ri'

import {
    AsideContainer,
    Header,
    LoginContainer,
    Navbar,
    MenuItem,
    LogoutContainer
} from './aside-navbar.styles'

const AsideNavbar = ({ navItems }) => {
    const history = useHistory()
    const {logout} = useAuthContext()
    const { pathname } = useLocation()

    const checkIfIsActive = slug => {
        if (pathname === slug) return true
        return false
    }

    const handleLogout = () => {
        logout(() => {
            history.push('/')
        })
    }

    return (
        <AsideContainer>
            <Header>
                <img
                    src={EjoinLogo}
                    alt="ejoin logo"
                />
            </Header>
            <LoginContainer>
                <p><span>Prihlásený:</span><FaUserAlt /> Meno Priezvisko</p>
            </LoginContainer>

            <Navbar>
                {navItems.map(({ slug, name, Icon }, idx) => (
                    <Link key={idx} to={slug}>
                        <MenuItem isActive={checkIfIsActive(slug)}>
                            <Icon />
                            <p>
                                {name}
                            </p>
                        </MenuItem>
                    </Link>
                ))}
            </Navbar>
            <LogoutContainer onClick={handleLogout}>
                {/* <Link to='/'> */}
                    <MenuItem>
                        <RiLogoutCircleLine />
                        <p>
                            Odhlásiť
                        </p>
                    </MenuItem>
                {/* </Link> */}
            </LogoutContainer>
        </AsideContainer>
    )
}

export default AsideNavbar