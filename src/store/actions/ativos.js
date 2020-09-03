export function editarAtivo(ativo,id) {
    console.log("1 - editAtivoAction");
    return {
        type: 'ASYNC_EDIT_ACTIVE',
        ativo,
        id
    };
}

export function deletarAtivo(gasto) {
    console.log("1 - deleteAtivoAction");
    return {
        type: 'ASYNC_DELETE_ACTIVE',
        gasto
    }
}

export function salvarAtivo(ativo) {
    console.log("1 - saveAtivoAction");
    return {
        type: 'ASYNC_SAVE_ACTIVE',
        ativo
    }
}

export function loadAtivos(){
    console.log('actionLoadAtivos');
    return {
        type: 'LOAD_ATIVOS',
    }
} 