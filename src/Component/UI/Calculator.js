import React, { useState } from 'react'
import style from './Calculator.module.css'
function Calculator() {
    const [value, setValue] = useState(null);
    const handleKeyDown = (event) => {
        // Check if the pressed key is a valid operator or number
        const validKeys = /[0-9+\-*/.=]/;
        if (validKeys.test(event.key)) {
            event.preventDefault(); // Prevent default behavior
            setValue((prevValue) => prevValue + event.key);
        }

        // Evaluate the expression if Enter key is pressed
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            try {
                setValue(eval(value).toString());
            } catch (error) {
                setValue('Error');
            }
        }

        // Clear the input if 'C' key is pressed
        if (event.key === 'c' || event.key === 'C') {
            event.preventDefault(); // Prevent default behavior
            setValue('');
        }

        // Remove the last character if 'Backspace' key is pressed
        if (event.key === 'Backspace') {
            event.preventDefault(); // Prevent default behavior
            setValue((prevValue) => prevValue.slice(0, -1));
            // setValue(function(prevValue){
            //  return   prevValue.slice(0, -1)
            // });
        }
    };


    return (
        <div className={style.container}>
            <div className={style.newContainer}>
                <h2>Calculator</h2>
                <input className={style.input} value={value} onKeyDown={handleKeyDown} onkey type="text" />
                <form className={style.box}>
                    <input className={style.num} type="button" value='C' onClick={(e) => setValue('')} />
                    <input className={style.num} type="button" value='Ac' onClick={(e) => setValue(value.slice(0, -1))} />
                    <input className={style.num} type="button" value='M+' />
                    <input className={style.num} type="button" value='M-' />
                    <input className={style.num} type="button" value='7' onClick={(e) => setValue(value + e.target.value)} />
                    <input className={style.num} type="button" value='8' onClick={(e) => setValue(value + e.target.value)} />
                    <input className={style.num} type="button" value='9' onClick={(e) => setValue(value + e.target.value)} />
                    <input className={style.num} type="button" value='*' onClick={(e) => setValue(value + e.target.value)} />
                    <input className={style.num} type="button" value='4' onClick={(e) => setValue(value + e.target.value)} />
                    <input className={style.num} type="button" value='5' onClick={(e) => setValue(value + e.target.value)} />
                    <input className={style.num} type="button" value='6' onClick={(e) => setValue(value + e.target.value)} />
                    <input className={style.num} type="button" value='/' onClick={(e) => setValue(value + e.target.value)} />
                    <input className={style.num} type="button" value='1' onClick={(e) => setValue(value + e.target.value)} />
                    <input className={style.num} type="button" value='2' onClick={(e) => setValue(value + e.target.value)} />
                    <input className={style.num} type="button" value='3' onClick={(e) => setValue(value + e.target.value)} />
                    <input className={style.num} type="button" value='+' onClick={(e) => setValue(value + e.target.value)} />
                    <input className={style.num} type="button" value='0' onClick={(e) => setValue(value + e.target.value)} />
                    <input className={style.num} type="button" value='.' onClick={(e) => setValue(value + e.target.value)} />
                    <input className={style.num} type="button" value='=' onClick={e => setValue(eval(value))} />
                    <input className={style.num} type="button" value='-' onClick={(e) => setValue(value + e.target.value)} />
                </form>
            </div>
        </div>
    )
}

export default Calculator
