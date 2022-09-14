import {all} from 'redux-saga/effects'
import BlogList from './AllBlogs/sagas'
import BlogDetail from './BlogDetail/sagas'
import AddNewBlog from './AddNewBlog/sagas'
import DeleteBlog from './DeleteBlog/sagas'

export default function* rootSaga() {
    yield all([
        BlogList(),
        BlogDetail(),
        AddNewBlog(),
        DeleteBlog()
    ])
}
