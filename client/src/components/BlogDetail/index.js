import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import moment from 'moment'

import {Button} from "../index";
import './blog-detail.scss';
import actions from "../../redux/actions";

const BlogListDetail = () => {
    const [editable, setEditable] = useState(false)
    let {id} = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actions.GET_BLOG_DETAIL, payload: id})
    }, [])     // eslint-disable-line react-hooks/exhaustive-deps


    const blogDetailS = useSelector(state => state.BlogDetail.blogDetail);
/*
    const onSaveEditBlog = (e) => {
        e.preventDefault()
        editableFormRef.submit()
        setEditable(false)
    }*/

    const EditBlogItem = () => {
        return (
            <div className="edit-blog-item box">
                <form className="form" method='post' action={"/edit-blog/" + blogDetailS?._id}>
                    <div className="form__row">
                        {/*<Input name="title" label="Blog Title" defaultValue={blogDetailS?.title} />*/}
                        <span>Blog Title:</span>
                        <input type="text" name="title" defaultValue={blogDetailS?.title}/>
                    </div>
                    <div className="form__row">
                        <span>Blog Short:</span>
                        <input type="text" name="short" defaultValue={blogDetailS?.long}/>
                    </div>
                    <div className="form__row">
                        <span>Blog Long:</span>
                        <textarea defaultValue={blogDetailS?.long} name="long" style={{resize: 'none'}}/>
                    </div>
                    <Button
                        type="submit"
                        size="small"
                        className="button--warning">
                        Save Blog
                    </Button>

                    {/*<button type="submit" onClick={(e) => onSaveEditBlog(e)}>Save</button>*/}
                </form>
            </div>
        )
    }

    return (
        <div className="blog-detail">
            <div className="container">
                <h1 className="section__title">Blogs detail page</h1>
                {!editable ? <section className="section">
                    <strong className="section__title--small">{blogDetailS?.title}</strong>
                    <p className="section__desc">{blogDetailS?.long}</p>
                    <span className="date section__desc--small">{moment(blogDetailS?.createdAt).format('MMM Do YY')}</span>
                    <Button
                        onClick={ () => setEditable(true) }
                        size="small"
                        className="button--warning">
                        Edit Blog
                    </Button>
                </section> : <EditBlogItem/>}
            </div>
        </div>
    )
}

export default BlogListDetail;