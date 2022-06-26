import React from 'react'

export const RadioButton = ({id, value}) => {
    return (
        <label key={id} className="radio">
            <input name="radioInput1" type="radio" />
            <span className="radio__button"></span>
            <span className="radio__number">
                {value}
            </span>
        </label>
    )
}

