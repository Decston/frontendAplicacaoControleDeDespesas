const INITIAL_STATE = {
    ativos: [],
    ativoEdit: {},
    editing: false,
    idEdit: null,
    carregando: false
};

export default function ativos( state = INITIAL_STATE, action ) {
    switch(action.type) {
        case 'EDIT_ACTIVE':
            return {
                ...state,
                idEdit: action.id,
                ativoEdit: action.ativo,
                editing: true
            };
        case 'DELETA_ATIVO':

            state.ativos.splice(action.id, 1);    

            return {
                ...state,
                ativos: state.ativos,
                editing: false
            };
        case 'SAVE_ACTIVE':

            if(state.editing === false) {

                const ativos = [...state.ativos, action.ativo];
                
                return {
                    ...state,
                    ativos
                }
    
            } ;
        case 'CARREGANDO_ATIVO_TRUE':
            return {
                ...state,
                carregando: true
            };
        case 'LOADED_ATIVOS':
            return {
                ...state,
                ativos: action.ativos,
                carregando: false
            };
        case 'UPDATE_EDIT_ATIVO':
            state.ativos.splice(state.idEdit, 1, action.ativo);

            return {
                ...state,
                ativos: state.ativos,
                idEdit: null,
                editing: false
            };
        case 'CANCELAR_ATIVO':
            return {
                ...state,
                idEdit: null,
                editing: false,
                ativoEdit: {}
            };
        default:
            return state;
    }
}