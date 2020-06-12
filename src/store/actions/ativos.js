export function editarAtivo(id) {
    return {
        type: 'EDIT_ACTIVE',
        id
    };
}

export function deletarAtivo(ativo) {
    return {
        type: 'DELETE_ACTIVE',
        ativo
    }
}