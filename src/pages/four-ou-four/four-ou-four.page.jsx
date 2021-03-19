import React from 'react'
import { Link } from 'react-router-dom'

import {
    MainContainer
} from './four-ou-four.styles'

const FourOhFour = () => {
    return (
        <MainContainer>
            <section>
                <h1>Stránka sa nenašla.</h1>
                <Link to='/'>Vrátiť sa domov</Link>
            </section>
        </MainContainer>
    )
}

export default FourOhFour
