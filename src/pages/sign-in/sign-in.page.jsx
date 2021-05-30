import React, { useState, useEffect } from 'react'
import { useAuthContext } from '../../context/auth/auth.context'
import { useHistory } from 'react-router-dom'
import {useLoadingModal} from '../../hooks/useLoadingModal'


import SignInInput from '../../components/sign-in-input/sign-in-input.component'
import SignInButton from '../../components/sign-in-button/sign-in-button.component'
import LoadingModal from '../../components/modals/loading-modal/loading-modal.component'

import {ReactComponent as EjoinLogo} from '../../images/logo/ejoin-logo.svg';
import BgImage from '../../images/sign-in/bg.png'

import {useMutation} from '@apollo/client'
import {LOGIN_USER} from '../../utils/mutations'


import {
    MainContainer,
    SectionContainer,
    LogoContainer,
    BackgroundImage,
} from './sign-in.styles'

const SignInPage = (props) => {
    const history = useHistory()
    const { getToken, isAuthenticated } = useAuthContext()
    const [login, {data, loading, error}] = useMutation(LOGIN_USER, { 
        errorPolicy: 'all',
        onCompleted: (data) => {

            if(data.login) {
                getToken(data.login.accessToken)

                setStatus("SUCCESS")
                setMessage("Úspesne prihlásenie")
    
                setTimeout(() => {
                    resetModal()
                    history.push('/dashboard')
                }, 1000);
                return
            }
            
            if(!data.login) {
                setStatus("ERROR")
                setMessage("Nesprávné prihlasovacie údaje")
    
                setTimeout(() => {
                    resetModal()
                    // history.push('/dashboard')
                }, 1000);
                return
            }


        },
        onError: (data) => {
            console.log(data)

            setStatus("ERROR")
            setMessage("Error")
        } 
    })

    const [authData, setAuthData] = useState({
        email: "",
        password: ""
    })

    const {
        isLoading,
        message,
        status,
        toggleLoading,
        setStatus,
        setMessage,
        resetModal
    } = useLoadingModal()

    const handleChange = e => {
        const {name, value} = e.target

        setAuthData(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }    

    const handleSubmit = async (e) => {
        e.preventDefault()
        toggleLoading(true)
        if(authData.email === '') {
            // alert("E-mail je prázdny")
            setStatus("ERROR")
            setMessage("E-mail nie je vyplnený")
            setTimeout(() => {
                resetModal()
            }, 1000);
            return 
        }
        if(authData.password === '') {
            // alert("Heslo je prázdne")
            setStatus("ERROR")
            setMessage("Heslo nie je vyplnené")
            setTimeout(() => {
                resetModal()
            }, 1000);
            return 
        }

        login({
            variables: authData,
        })
    }


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

                {isLoading && (
                    <LoadingModal
                        loading={loading}
                        status={status}
                        message={message}
                    />
                )}

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
            </SectionContainer>
            <BackgroundImage
                src={BgImage}
                alt="background mountains"
            />
        </MainContainer>
    )
}

export default SignInPage
