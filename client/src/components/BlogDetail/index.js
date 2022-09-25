import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import moment from 'moment'

import {Button, Header, InputAntd} from "../index";
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
            <>
                <div className="auth-box">
                    <form className="form" method='post' action={"/edit-blog/" + blogDetailS?._id}>
                        <div className="form__title">Edit Blog</div>
                        <div className="form__row">
                            <InputAntd name="title" label="Blog Title" defaultValue={blogDetailS?.title} />
                        </div>
                        <div className="form__row">
                            <InputAntd name="short" label="Blog Short" defaultValue={blogDetailS?.short} />
                        </div>
                        <div className="form__row">
                            <InputAntd name="long" label="Blog Long" defaultValue={blogDetailS?.long} />
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
            </>
        )
    }

    return (
        <>
            <Header />
            <div className="blog-detail">
                <div className="container">
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
        </>
    )
}

export default BlogListDetail;