import {all, takeEvery} from 'redux-saga/effects';
import actions from './actions';
import {sagaWorker} from './../../utils/http';


export default function* rootSaga() {
    yield all([
        takeEvery(actions.GET_BLOG_LIST, (action) =>
            sagaWorker(
                "/all-blogs",
                'get',
                {},
                actions.SET_BLOG_LIST )
        )
    ])
}
