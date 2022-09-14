import AllBlogsActions from './AllBlogs/actions'
import BlogDetailActions from './BlogDetail/actions'
import AddNewBlogActions from './AddNewBlog/actions'
import DeleteBlogActions from './DeleteBlog/actions'

const actions = Object.assign(
    AddNewBlogActions,
    AllBlogsActions,
    BlogDetailActions,
    DeleteBlogActions
);

export default actions;