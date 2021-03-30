import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { useHistory } from 'react-router-dom'

import CustomInput from '../../components/custom-input/custom-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import {
    MainContainer,
    SectionContainer
} from './sign-in.styles'

const SignInPage = (props) => {
    const { login } = useContext(AuthContext)
    const history = useHistory()

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
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <CustomInput
                        label='Meno'
                        type='text'
                    />
                    <CustomInput
                        label="Heslo"
                        type='text'
                    />
                    <CustomButton pill>Prihlasit sa</CustomButton>
                </form>
            </SectionContainer>
        </MainContainer>
    )
}

export default SignInPage
