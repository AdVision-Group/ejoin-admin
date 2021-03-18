import React from 'react'

import CustomInput from '../../components/custom-input/custom-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import {
    MainContainer,
    SectionContainer
} from './sign-in.styles'

const SignInPage = () => {
    return (
        <MainContainer>
            <SectionContainer>
                <h1>Sign in</h1>
                <form>
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
