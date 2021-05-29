import React from 'react'

import {TipboxContainer} from './tipbox.styles'

const Tipbox = ({children}) => {
    return (
        <TipboxContainer>({children})</TipboxContainer>
    )
}

export default Tipbox
