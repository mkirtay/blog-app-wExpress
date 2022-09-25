import {all, takeEvery} from 'redux-saga/effects'
import actions from './actions';
import {sagaWorker} from './../../utils/http';


export default function* rootSaga() {
    yield all([
        takeEvery(actions.GET_LOGOUT, (action) =>
            sagaWorker(
                "/logout",
                'get',
                {},
                actions.SET_LOGOUT )
        )
    ])
}
