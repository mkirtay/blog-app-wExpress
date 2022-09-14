import {all, takeEvery} from 'redux-saga/effects'
import actions from './actions';
import {sagaWorker} from './../../utils/http';


export default function* rootSaga() {
    yield all([
        takeEvery(actions.GET_DELETE_BLOG, (action) =>
            sagaWorker(
                "/delete-blog/" + action.payload,
                'delete',
                {},
                actions.SET_DELETE_BLOG )
        )
    ])
}
