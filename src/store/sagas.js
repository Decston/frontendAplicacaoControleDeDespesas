import { put, takeEvery } from 'redux-saga/effects';

function* asyncDeleteActive(action) {
    console.log("2 - deleteSaga");
    yield put({
        type: 'DELETE_ACTIVE',
        ativo: action.ativo
    })
}

export default function* mySaga() {
    yield takeEvery('ASYNC_DELETE_ACTIVE', asyncDeleteActive)
}