import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Ilustration } from '../../images/ilustrations/in-progress-illustration.svg'

import {
    MainContainer,
    SectionContainer,
    ImageContainer,
    Title
} from './under-construction.styles'

const UnderConstructionPage = () => {
    return (
        <MainContainer>
            <SectionContainer>
                <Title>Vo výstavbe</Title>
                <ImageContainer>
                    <Ilustration />
                </ImageContainer>
                <Link to='/'>Vrátiť sa na hlavnú stránku</Link>
            </SectionContainer>
        </MainContainer>
    )
}

export default UnderConstructionPage
