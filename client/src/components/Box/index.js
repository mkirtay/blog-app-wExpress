import React from 'react';
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import './box.scss';
import {Button} from "../index";
import actions from '../../redux/actions'

const Box = ({title, desc, props, href}) => {
    const dispatch = useDispatch();

    const onDelete = (deleteId) => {
        dispatch( {
            type: actions.GET_DELETE_BLOG,
            payload: deleteId
        } )
    }
    return (
        <div className="box" {...props}>
            <Link to={"/all-blogs/" + href}>
                <strong className="box__title">{title}</strong>
                <p className="box__desc">{desc}</p>
            </Link>
            <Button
                className="button--error"
                size="small"
                onClick={() => onDelete(href)}>
                <span>Delete</span>
            </Button>
        </div>
    )
}
export default Box;

Box.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    href: PropTypes.string
};

Box.defaultProps = {
    href: "#"
}