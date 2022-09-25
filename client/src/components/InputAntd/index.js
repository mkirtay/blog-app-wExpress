import React, {useState, useRef, useEffect} from 'react'
import { Input as AntdInput } from "antd";
import classNames from "classnames";

import './input.scss';

const InputAntd = ({label, value, ...props}) => {
    const [inputDirty, setInputDirty] = useState(false);
    const inputRef = useRef();


    useEffect(() => {
        console.log(inputRef.current.input.value, 'input ref')
        if ( inputRef.current.input.value.length > 0 ) {
            setInputDirty(true)
        }
    })


    const onFocusInput = (e) => {
        setInputDirty(true)
    }
    const onBlurInput = (e) => {
        if ( e.target.value.length === 0 ) {
            setInputDirty(false)
        } else {
            setInputDirty(true)
        }
    }

    return (
        <div
            className='input'
        >
            <AntdInput
                onBlur={onBlurInput}
                onFocus={onFocusInput}
                ref={inputRef}
                {...props}
                className={classNames({ 'focused': inputDirty })}
                value={value}>
            </AntdInput>
            <label>{label}</label>
        </div>
    )
}

export default InputAntd