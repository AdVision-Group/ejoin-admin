import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {useAuthContext} from '../../context/auth/auth.context'
import {useHistory} from 'react-router-dom'


import EjoinLogo from '../../images/logo/ejoin-logo.png'

import { FaUserAlt } from 'react-icons/fa'
import { RiLogoutCircleLine } from 'react-icons/ri'

import {useQuery} from '@apollo/client'
import {GET_USER_NAME} from '../../graphql/queries/user.queries'

import {
    AsideContainer,
    Header,
    LoginContainer,
    Navbar,
    MenuItem,
    LogoutContainer
} from './aside-navbar.styles'

const AsideNavbar = ({ navItems, light }) => {
    const history = useHistory()
    const {logout, userID} = useAuthContext()
    const { pathname } = useLocation()

    const {data, loading} = useQuery(GET_USER_NAME, {
        variables: {
            id: userID
        }
    })

    const checkIfIsActive = slug => {
        if (pathname === slug) return true
        return false
    }

    const handleLogout = () => {
        logout(() => {
            history.push('/')
        })
    }

    console.log(data)

    return (
        <AsideContainer isLight={light}>
            <Link to='/'>
                <Header isLight={light}>
                    <img
                        src={light ? "https://res.cloudinary.com/coderkin/image/upload/v1622059602/ejoin-product/admin/logo_png_white_2x_vyqcog.png" : EjoinLogo}
                        alt="ejoin logo"
                    />
                </Header>
            </Link>
            <LoginContainer>
                <p><span>Prihlásený:</span>
                    <FaUserAlt /> {data?.account && data.account.name}
                </p>
            </LoginContainer>

            <Navbar>
                {navItems.map(({ slug, name, Icon }, idx) => (
                    <Link key={idx} to={slug}>
                        <MenuItem isLight={light} isActive={checkIfIsActive(slug)}>
                            <Icon />
                            <p>
                                {name}
                            </p>
                        </MenuItem>
                    </Link>
                ))}
            </Navbar>
            <LogoutContainer isLight={light} onClick={handleLogout}>
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
