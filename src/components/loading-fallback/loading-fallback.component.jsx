import React from 'react'

import Spinner from '../spinner/spinner.component'

import {
    ModalBackground
} from './loading-fallback-styles'

const LoadingFallback = () => {
    return (
        <ModalBackground>
            <Spinner />
        </ModalBackground>
    )
}

export default LoadingFallback
