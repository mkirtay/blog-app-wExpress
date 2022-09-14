import React from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";

import './button.scss';

const Button = ({size, ...props}) => {
    return (
        <div className={
            classNames('button',
                props.className,
                {
                    'button--small' : size === 'small'
                }
                )}>
            <button
                {...props}>
                {props.children}
            </button>
        </div>
    )
}

export default Button;

Button.propTypes = {
    classNames: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.any
}