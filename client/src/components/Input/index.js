import React, {useState, useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";


import './input.scss';

const Input = ({type, label, name, ...props}) => {
    const [inputDirty, setInputDirty] = useState(false)
    const inputRef = useRef();

    useEffect(() => {
        if ( inputRef.current.value.length > 0 ) {
            setInputDirty(true)
        }
    }, [])

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
        <div className="input">
            <input
                {...props}
                type={type}
                name={name}
                ref={inputRef}
                onFocus={(e) => onFocusInput(e)}
                onBlur={(e) => onBlurInput(e)}
                className={classNames({ 'focused': inputDirty })}
            />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string
};

Input.defaultProps = {
    type: "text"
}

export default Input