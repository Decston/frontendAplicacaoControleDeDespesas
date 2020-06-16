export function editarAtivo(id) {
    return {
        type: 'EDIT_ACTIVE',
        id
    };
}

export function deletarAtivo(ativo) {
    console.log("1 - deleteAction");
    return {
        type: 'ASYNC_DELETE_ACTIVE',
        ativo
    }
}