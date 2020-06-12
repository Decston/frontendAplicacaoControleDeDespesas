export function editarPassivo(id) {
    return {
        type: 'EDIT_PASSIVE',
        id
    };
}

export function deletarPassivo(ativo) {
    return {
        type: 'DELETE_PASSIVE',
        ativo
    }
}