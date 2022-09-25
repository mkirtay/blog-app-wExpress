import {combineReducers} from 'redux'
import AllBlogsReducers from "./AllBlogs/reducers";
import BlogDetailReducers from "./BlogDetail/reducers";
import AddNewBlogReducers from "./AddNewBlog/reducers";
import DeleteBlogReducers from "./DeleteBlog/reducers";
import LogoutReducers from "./Logout/reducers";


export default combineReducers({
    AllBlogs: AllBlogsReducers,
    BlogDetail: BlogDetailReducers,
    AddNewBlog: AddNewBlogReducers,
    DeleteBlog: DeleteBlogReducers,
    Logout: LogoutReducers
})
