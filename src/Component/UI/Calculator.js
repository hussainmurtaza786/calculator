import React, { useState } from 'react'
import style from './Calculator.module.css'
function Calculator() {
    const [value, setValue] = useState('');


    return (
        <div className={style.container}>
            <div className={style.newContainer}>
                <h2>Calculator</h2>
                <input className={style.input} value={value} type="text" />
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
