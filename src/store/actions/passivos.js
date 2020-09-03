export function editarPassivo(passivo, id) {
    console.log('1 - editPassivoAction');
    return {
        type: 'ASYNC_EDIT_PASSIVE',
        passivo,
        id
    };
}

export function deletarPassivo(passivo) {
    console.log('1 - deletePassivoAction');
    return {
        type: 'ASYNC_DELETE_PASSIVE',
        passivo
    }
}

export function salvarPassivo(passivo) {
    console.log("1 - savePassivoAction");
    return {
        type: 'ASYNC_SAVE_PASSIVE',
        passivo
    }
}

export function loadPassivos(){
    console.log('actionLoadPassivos');
    return {
        type: 'LOAD_PASSIVOS',
    }
} 