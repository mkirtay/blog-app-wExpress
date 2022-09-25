import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";

import './header.scss';
import actions from "../../redux/actions";

const Header = ({signup, login}) => {
    const dispatch = useDispatch()

    const onLogout = () => {
        console.log('sss')
        dispatch({type: actions.GET_LOGOUT})
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    Node Blog
                </div> 
                <div className="header__menu">
                    { login && <Link to="/sign-up">Register</Link> }
                    { signup && <Link to="/login">Login</Link> }

                    { !login && !signup && <>
                        <Link to="/all-blogs">All Blogs</Link>
                        <button onClick={() => onLogout()}>Logout</button>
                    </> }
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {
    signup: PropTypes.bool,
    login: PropTypes.bool
};

export default Header