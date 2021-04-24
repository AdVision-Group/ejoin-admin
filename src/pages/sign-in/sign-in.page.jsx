import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { useHistory } from 'react-router-dom'

import SignInInput from '../../components/sign-in-input/sign-in-input.component'
import SignInButton from '../../components/sign-in-button/sign-in-button.component'

import {ReactComponent as EjoinLogo} from '../../images/logo/ejoin-logo.svg';
import BgImage from '../../images/sign-in/bg.png'

import {
    MainContainer,
    SectionContainer,
    LogoContainer,
    BackgroundImage
} from './sign-in.styles'

const SignInPage = (props) => {
    const { login } = useContext(AuthContext)
    const history = useHistory()

    const [authData, setAuthData] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        const {name, value} = e.target

        setAuthData(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }    

    const handleSubmit = e => {
        e.preventDefault()

        login((user) => {
            if (user) {
                history.push("/dashboard")
            }
        })
    }

    return (
        <MainContainer>
            <SectionContainer>
                <LogoContainer>
                    <EjoinLogo/>
                </LogoContainer>
                <form onSubmit={handleSubmit}>
                    <SignInInput
                        label='Meno'
                        type='text'
                        name="username"
                        value={authData.username}
                        handleChange={handleChange}
                    />
                    <SignInInput
                        label="Heslo"
                        type='password'
                        name="password"
                        value={authData.password}
                        handleChange={handleChange}
                    />
                    <SignInButton fullWidth>Prihlásiť sa</SignInButton>
                </form>
            </SectionContainer>
            <BackgroundImage
                src={BgImage}
                alt="background mountains"
            />
        </MainContainer>
    )
}

export default SignInPage
