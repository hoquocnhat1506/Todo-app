import React, { useState } from 'react';

const InputForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [submittedValues, setSubmittedValues] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setSubmittedValues([...submittedValues, inputValue]);
            setInputValue('');
        }
    };
    
    const handleClick = event => {
        if (event.target.style.textDecoration) {
            event.target.style.removeProperty('text-decoration');
        } else {
            event.target.style.setProperty('text-decoration', 'line-through');
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='add details'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {submittedValues.map((value, index) => (
                    <label>
                        <input type='checkbox'></input>
                        <p onClick={handleClick}><li key={index}>{value}</li></p>

                    </label>
                ))}
            </ul>

        </div>
    );
};

export default InputForm;
