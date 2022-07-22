import React from 'react'

export const GroupRadioButtons = ({options, onChange }) => {
    return (
        options.map((option, index) => (
            <label key={index} className="radio">
                <input 
                name="radioInput1" 
                type="radio"
                onChange={() => onChange(option.value)}
                value={option.value} />
                <span className="radio__button"></span>
                <span className="radio__number">
                    {option.value} ({option.range})
                </span>
            </label>
        ))
    )
}

