import React, { useState, useEffect } from 'react'
import { useAuthContext } from '../../context/auth/auth.context'
import { useHistory } from 'react-router-dom'


import SignInInput from '../../components/sign-in-input/sign-in-input.component'
import SignInButton from '../../components/sign-in-button/sign-in-button.component'
import Spinner from '../../components/spinner/spinner.component'

import {ReactComponent as EjoinLogo} from '../../images/logo/ejoin-logo.svg';
import BgImage from '../../images/sign-in/bg.png'

import {useMutation} from '@apollo/client'
import {LOGIN_USER} from '../../utils/mutations'

import {
    MainContainer,
    SectionContainer,
    LogoContainer,
    BackgroundImage,
    LoadingContainer
} from './sign-in.styles'

const SignInPage = (props) => {
    const history = useHistory()
    const { getToken, isAuthenticated } = useAuthContext()
    const [login, {data, loading, error}] = useMutation(LOGIN_USER, { errorPolicy: 'all' })

    const [authData, setAuthData] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const {name, value} = e.target

        setAuthData(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }    

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(authData.email === '') return alert("E-mail je prázdny")
        if(authData.password === '') return alert("Heslo je prázdne")

        login({
            variables: authData,
        })
    }

    useEffect(() => {
        if(loading) return
        if(error) return alert(error)
        if(!data?.login) return

        getToken(data.login.accessToken)
        history.push('/dashboard')
    }, [loading])

    useEffect(() => {
        if(!isAuthenticated) return
        history.push('/dashboard')

    }, [isAuthenticated])

    return (
        <MainContainer>
            <SectionContainer>
                <LogoContainer>
                    <EjoinLogo/>
                </LogoContainer>
                {loading && (
                    <LoadingContainer>
                        <Spinner/>
                    </LoadingContainer>
                )}
                {!loading && (
                    <form onSubmit={handleSubmit}>
                        <SignInInput
                            label='E-mail'
                            type='text'
                            name="email"
                            value={authData.email}
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
                )}
            </SectionContainer>
            <BackgroundImage
                src={BgImage}
                alt="background mountains"
            />
        </MainContainer>
    )
}

export default SignInPage
