export function editarAtivo(ativo, id) {
    return {
        type: 'EDIT_ACTIVE',
        ativo,
        id
    };
}

export function deletarAtivo(ativo, id) {
    return {
        type: 'DELETE_ATIVO',
        ativo,
        id
    }
}

export function salvarAtivo(ativo, editing) {
    return {
        type: 'SAVE_ATIVO',
        ativo,
        editing
    }
}

export function loadAtivos(){
    return {
        type: 'LOAD_ATIVOS',
    }
} 

export function editAtivo(ativo, id) {
    return {
        type: 'EDIT_ATIVO',
        ativo,
        id
    }
}

export function cancelEditAtivo() {
    return {
        type: 'CANCELAR_ATIVO'
    }
}