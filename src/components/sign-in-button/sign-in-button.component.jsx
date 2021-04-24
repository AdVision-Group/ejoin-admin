import React from 'react'

import {
    CustomButtonContainer
} from './sign-in-button-styles'

const SignInButton = ({ children, ...otherProps }) => {
    return (
        <CustomButtonContainer
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: .9 }}
            {...otherProps}
        >
            {children}
        </CustomButtonContainer>
    )
}

export default SignInButton