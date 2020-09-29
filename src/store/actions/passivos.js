export function editarPassivo(passivo, id) {
    return {
        type: 'EDIT_PASSIVE',
        passivo,
        id
    };
}

export function deletarPassivo(passivo, id) {
    return {
        type: 'DELETE_PASSIVO',
        passivo,
        id
    }
}

export function salvarPassivo(passivo, editing) {
    return {
        type: 'SAVE_PASSIVO',
        passivo,
        editing
    }
}

export function loadPassivos(){
    return {
        type: 'LOAD_PASSIVOS',
    }
}

export function carregandoPassivos(){
    return {
        type: 'CARREGANDO_PASSIVO_TRUE',
        carregando: true
    }
}

export function editPassivo(passivo, id) {
    return {
        type: 'EDIT_PASSIVO',
        passivo,
        id
    }
}

export function cancelEditPassivo() {
    return {
        type: 'CANCELAR_PASSIVO'
    }
}