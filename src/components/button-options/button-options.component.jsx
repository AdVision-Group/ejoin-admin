import React from 'react'

import {
    DeligateButton,
    OptionsContainer,
    UpdateButton
} from './button-options.styles'

const ButtonOptions = ({
    top = 0,
    left = 0,
    right = 0,
    bottom = 0,
    rightRed = false,
    leftLabel = "Primary",
    rightLabel = "Secondary",
    handleLeftClick = () => {},
    handleRightClick = () => {},
}) => {
    return (
        <OptionsContainer 
            top={top}
            left={left}    
            right={right}    
            bottom={bottom}    
        >
            <UpdateButton
                whileHover={{scale: 1.02}}
                whileTap={{scale: .95}}
                onClick={handleLeftClick}
            >
                {leftLabel}
            </UpdateButton>
            <DeligateButton
                whileHover={{scale: 1.02}}
                whileTap={{scale: .95}}
                onClick={handleRightClick}
                isRed={rightRed}
            >
                {rightLabel}
            </DeligateButton>
        </OptionsContainer>
    )
}

export default ButtonOptions
