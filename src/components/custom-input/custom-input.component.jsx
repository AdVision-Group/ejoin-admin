
import React from 'react'

import { InputGroup } from './custom-input.styles'

const CustomInput = ({ handleChange, label, name, ...otherProps }) => {
    return (
        <InputGroup>
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