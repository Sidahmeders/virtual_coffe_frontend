import { RadioInputStyle } from './style'

export default function RadioInputElement({ label, options, changeHandler, sub }) {
    return (
        <RadioInputStyle>
            <h3>{label}</h3>
            <div className="options">
                {options.map((option, index) => (
                    <div className="option" key={index}>
                        <input
                            type="radio"
                            id={option}
                            className={sub ? `sub-radio-element` : 'radio-element'}
                            name={label}
                            value={option}
                            onChange={changeHandler}
                        />
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))}
            </div>
        </RadioInputStyle>
    )
}
