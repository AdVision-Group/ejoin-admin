
import React from 'react'

import { InputGroup } from './custom-input.styles'

const CustomInput = ({ light, handleChange, label, name, ...otherProps }) => {
    return (
        <InputGroup isLight={light}>
            <input
                className='form-input'
                name={name}
                onChange={handleChange}
                {...otherProps}
            />
            {label ? (
                <label htmlFor={name} className={`${otherProps?.value?.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            ) : null
            }
        </InputGroup>
    )
}

export default CustomInput