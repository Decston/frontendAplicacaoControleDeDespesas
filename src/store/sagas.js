import { put, takeEvery, takeLatest, call } from 'redux-saga/effects';

async function buscaAtivos() {
    const response = await fetch('http://localhost:8080/api/gastos');
    const data = await response.json();
    const ativos = data.filter((data) => {
        return data.tipo === "Ativo";
    })

    return ativos;
}

async function buscaPassivos() {
    const response = await fetch('http://localhost:8080/api/gastos');
    const data = await response.json();
    const passivos = data.filter((data) => {
        return data.tipo === "Passivo";
    })

    return passivos;
}

//ACTIONS ATIVOS
function* asyncDeleteActive(action) {
    console.log('2 - deleteAtivoSaga');
    yield put({
        type: 'DELETE_ACTIVE',
        ativo: action.gasto
    })
}

function* asyncEditActive(action) {
    console.log('2 - editAtivoSaga');
    yield put({
        type: 'EDIT_ACTIVE',
        ativo: action.ativo,
        id: action.id
    })
}

function* asyncSaveActive(action) {
    console.log('2 - saveAtivoSaga');
    yield put({
        type: 'SAVE_ACTIVE',
        ativo: action.ativo
    })
}

//ACTIONS PASSIVOS
function* asyncDeletePassive(action) {
    console.log('2 - deletePassivoSaga');
    yield put({
        type: 'DELETE_PASSIVE',
        passivo: action.passivo
    })
}

function* asyncEditPassive(action) {
    console.log('2 - editPassivoSaga');
    yield put({
        type: 'EDIT_PASSIVE',
        passivo: action.passivo,
        id: action.id
    })
}

function* asyncSavePassive(action) {
    console.log('2 - savePassivoSaga');
    yield put({
        type: 'SAVE_PASSIVE',
        passivo: action.passivo
    })
}

//GASTOS
function* carregaAtivos() {
    try {
        console.log('sagaLoadAtivos');
        const ativos = yield call(buscaAtivos);

        yield put({
            type: 'LOADED_ATIVOS',
            ativos
        })
    } catch (err) {
        yield put({
            type: 'LOAD_ATIVOS_FAIL',
            message: err.message
        })
    }
}

function* carregaPassivos() {
    try {
        console.log('sagaLoadPassivos');
        const passivos = yield call(buscaPassivos);

        yield put({
            type: 'LOADED_PASSIVOS',
            passivos
        })
    } catch (err) {
        yield put({
            type: 'LOAD_PASSIVOS_FAIL',
            message: err.message
        })
    }
}

export default function* mySaga() {
    yield takeEvery('ASYNC_DELETE_ACTIVE', asyncDeleteActive);
    yield takeEvery('ASYNC_EDIT_ACTIVE', asyncEditActive);
    yield takeEvery('ASYNC_SAVE_ACTIVE', asyncSaveActive);
    yield takeEvery('ASYNC_DELETE_PASSIVE', asyncDeletePassive);
    yield takeEvery('ASYNC_EDIT_PASSIVE', asyncEditPassive);
    yield takeEvery('ASYNC_SAVE_PASSIVE', asyncSavePassive);
    yield takeLatest('LOAD_ATIVOS', carregaAtivos);
    yield takeLatest('LOAD_PASSIVOS', carregaPassivos);

}