import { all, call, takeEvery, put } from 'redux-saga/effects';

import * as actions from './slice'
import * as api from './api';

export function* fetchPhotosRequest() {
    try {
        const photos = yield call(api.fetchPhotos);
        yield put(actions.fetchPhotosSuccess({photos}));
    } catch (e) {
        yield put(actions.fetchPhotosError({message: e}));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(
            actions.fetchPhotos,
            fetchPhotosRequest
        )
    ]);
}