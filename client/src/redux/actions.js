import AllBlogsActions from './AllBlogs/actions'
import BlogDetailActions from './BlogDetail/actions'
import AddNewBlogActions from './AddNewBlog/actions'
import DeleteBlogActions from './DeleteBlog/actions'
import LogoutActions from './Logout/actions'

const actions = Object.assign(
    AddNewBlogActions,
    AllBlogsActions,
    BlogDetailActions,
    DeleteBlogActions,
    LogoutActions
);

export default actions;