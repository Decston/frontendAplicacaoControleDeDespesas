const INITIAL_STATE = {
    ativos: [],
    ativoEdit: {},
    editing: false,
    idEdit: null
};

export default function ativos( state = INITIAL_STATE, action ) {
    if(action.type === 'EDIT_ACTIVE') {
        
        return {
            ...state,
            idEdit: action.id,
            ativoEdit: action.ativo,
            editing: true
        }

    } else if(action.type === 'DELETA_ATIVO') {

        state.ativos.splice(action.id, 1);

        return {
            ...state,
            ativos: state.ativos,
            editing: false
        }

    } else if(action.type === 'SAVE_ACTIVE') {
        
        if(state.editing === false) {

            const ativos = [...state.ativos, action.ativo];
            
            return {
                ...state,
                ativos
            }

        } 

    } else if(action.type === 'LOADED_ATIVOS') {

        return {
            ...state,
            ativos: action.ativos
        }
        
    } else if(action.type === 'UPDATE_EDIT_ATIVO') {

        state.ativos.splice(state.idEdit, 1, action.ativo);

        return {
            ...state,
            ativos: state.ativos,
            idEdit: null,
            editing: false
        }

    } else if(action.type === 'CANCELAR_ATIVO') {

        return {
            ...state,
            idEdit: null,
            editing: false,
            ativoEdit: {}
        }

    }

    return state;
}