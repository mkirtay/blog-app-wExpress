import axios from "axios";
import {call, put} from "redux-saga/effects";

const http = (url, type, data)=> {
    return axios({
        method: type,
        url: url,
        data: data
    })
        .then((res) => res)
        .catch((error) => error);
}

export function* sagaWorker(url, type, data, action) {
    const res = yield call(http, url, type, data)

    yield put({
        type: action,
        payload: res.data,
    });
}
