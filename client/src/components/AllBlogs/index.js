import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Box, Header} from "../index";
import actions from "../../redux/actions";
import './all-blogs.scss';

const Main = () => {
    const dispatch = useDispatch();

    let blogsList = useSelector(state => state.AllBlogs.blogList);
    const deleteBlogId = useSelector(state => state.DeleteBlog.deleteBlogId);
    const [blogsListState, setBlogsListState] = useState(blogsList? blogsList : [])
    useEffect(() => {
        dispatch({type: actions.GET_BLOG_LIST})
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setBlogsListState(blogsList)
    }, [blogsList])

    useEffect(() => {
        let filteredBlogsList = blogsListState?.filter( (item) => {
            return item._id !== deleteBlogId
        } )
        setBlogsListState(filteredBlogsList)
    }, [deleteBlogId]) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <>
            <Header />
            <div className="all-blogs">
                <div className="container">
                    <h1>Blog List Page</h1>
                    {blogsListState && blogsListState.map((item, key) => {
                        return (
                            <Box key={'blogs-box-' + key} href={item._id} title={item.title} desc={item.short}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Main;