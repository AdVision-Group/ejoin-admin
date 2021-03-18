import React from 'react'

import {
    CustomButtonContainer
} from './custom-button.styles'

const CustomButton = ({ children, ...otherProps }) => {
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

export default CustomButton