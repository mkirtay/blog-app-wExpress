import {all, takeEvery} from 'redux-saga/effects';
import actions from './actions';
import {sagaWorker} from './../../utils/http';


export default function* rootSaga() {
    yield all([
        takeEvery(actions.GET_BLOG_DETAIL, (action) =>
            sagaWorker(
                "/all-blogs/" + action.payload,
                'get',
                {},
                actions.SET_BLOG_DETAIL )
        )
    ])
}
