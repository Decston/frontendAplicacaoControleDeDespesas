import { put, takeLatest, call } from 'redux-saga/effects';

//Funções para requisição para API
async function enviaSaveAtivo(ativo) {
    const resposta = await fetch('http://localhost:8080/api/gasto', {
        method: 'POST',
        body: JSON.stringify(ativo),
        headers: {
            'Content-type': 'application/json;' 
        }
    });
    const gasto = await resposta.json();

    return gasto;
}

async function enviaSavePassivo(passivo) {
    const resposta = await fetch('http://localhost:8080/api/gasto', {
        method: 'POST',
        body: JSON.stringify(passivo),
        headers: {
            'Content-type': 'application/json;' 
        }
    });
    const gasto = await resposta.json();

    return gasto;
}

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

async function enviaEditAtivo(ativo) {
    const resposta = await fetch('http://localhost:8080/api/gasto', {
        method: 'PUT',
        body: JSON.stringify(ativo),
        headers: {
            'Content-type': 'application/json;' 
        }
    });
    const gasto = await resposta.json();

    return gasto;
}

async function enviaEditPassivo(passivo) {
    const resposta = await fetch('http://localhost:8080/api/gasto', {
        method: 'PUT',
        body: JSON.stringify(passivo),
        headers: {
            'Content-type': 'application/json;' 
        }
    });
    const gasto = await resposta.json();

    return gasto;
}

async function enviaDeleteAtivo(ativo) {
    const resposta = fetch('http://localhost:8080/api/gasto', {
        method: 'DELETE',
        body: JSON.stringify(ativo),
        headers: {
            'Content-type': 'application/json;' 
        }
    })
    const gasto = await (await resposta).ok;

    return gasto;
}

async function enviaDeletePassivo(passivo) {
    const resposta = fetch('http://localhost:8080/api/gasto', {
        method: 'DELETE',
        body: JSON.stringify(passivo),
        headers: {
            'Content-type': 'application/json;' 
        }
    })
    const gasto = await (await resposta).ok;

    return gasto;
}

//Salva um Ativo no Banco.
function* saveAtivo(action) {
    try {
        const ativo = yield call(enviaSaveAtivo,action.ativo);

        yield put({
            type: 'SAVE_ACTIVE',
            ativo: ativo
        })
    } catch (err) {
        yield put({
            type: 'SAVE_ATIVO_FAIL',
            message: err.message
        })
    }
}

//Salva um Passivo no Banco.
function* savePassivo(action) {
    try {
        const passivo = yield call(enviaSavePassivo, action.passivo);

        yield put({
            type: 'SAVE_PASSIVE',
            passivo
        })
    } catch (err) {
        yield put({
            type: 'SAVE_PASSIVO_FAIL',
            message: err.message
        })
    }
}

//Edita um Ativo no Banco.
function* editAtivo(action) {
    try {
        
        const ativo = {id: action.ativo.key, ...action.ativo};
        delete ativo.key;
        
        yield call(enviaEditAtivo,ativo);
    
        yield put({
            type: 'UPDATE_EDIT_ATIVO',
            ativo
        })
    } catch (err) {
        yield put({
            type: 'UPDATE_EDIT_ATIVO_FAIL',
            messsage: err.message
        })
    }
}

//Edita um Passivo no Banco.
function* editPassivo(action) {
    try {

        const passivo = {id: action.passivo.key, ...action.passivo};
        delete passivo.key;
        
        yield call(enviaEditPassivo,passivo);

        yield put({
            type: 'UPDATE_EDIT_PASSIVO',
            passivo
        })
    } catch (err) {
        yield put({
            type: 'UPDATE_EDIT_PASSIVO_FAIL',
            messsage: err.message
        })
    }
}

//Deleta um Passivo do Banco.
function* deletePassivo(action) {
    try {

        const passivo = {id: action.passivo.key, ...action.passivo};
        delete passivo.key;
        
        yield call(enviaDeletePassivo, passivo);

        yield put({
            type: 'DELETA_PASSIVO',
            passivo,
            id: action.id
        })
    } catch (err) {
        yield put({
            type: 'DELETA_PASSIVO_FAIL',
            message: err.message
        })
    }
}

//Deleta um Ativo do Banco.
function* deleteAtivo(action) {
    try {
        
        const ativo = {id: action.ativo.key, ...action.ativo};
        delete ativo.key;

        yield call(enviaDeleteAtivo, ativo);

        yield put({
            type: 'DELETA_ATIVO',
            ativo,
            id: action.id
        })
    } catch (err) {
        yield put({
            type: 'DELETA_ATIVO_FAIL',
            message: err.message
        })
    }
}

//Carrega Dados das Tabelas Ativos
function* carregaAtivos() {
    try {
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

//Carrega Dados das Tabelas Passivos
function* carregaPassivos() {
    try {
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
    yield takeLatest('LOAD_ATIVOS', carregaAtivos);
    yield takeLatest('LOAD_PASSIVOS', carregaPassivos);
    yield takeLatest('SAVE_ATIVO', saveAtivo);
    yield takeLatest('SAVE_PASSIVO', savePassivo);
    yield takeLatest('EDIT_ATIVO', editAtivo);
    yield takeLatest('EDIT_PASSIVO', editPassivo);
    yield takeLatest('DELETE_PASSIVO', deletePassivo);
    yield takeLatest('DELETE_ATIVO', deleteAtivo);
}