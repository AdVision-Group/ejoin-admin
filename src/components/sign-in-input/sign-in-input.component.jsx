
import React from 'react'

import { InputGroup } from './sign-in-input.styles'

const SignInInput = ({ handleChange, label, name, ...otherProps }) => {
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

export default SignInInput