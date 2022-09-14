import {all, takeEvery} from 'redux-saga/effects';
import actions from './actions';
import {sagaWorker} from './../../utils/http';


export default function* rootSaga() {
    yield all([
        takeEvery(actions.GET_ADD_NEW_BLOG, (actionData) =>
            sagaWorker(
                "/add-new-blog",
                'post',
                actionData.payload,
                actions.SET_ADD_NEW_BLOG,
            )
        )
    ])
}
