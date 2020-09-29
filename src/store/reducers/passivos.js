const INITIAL_STATE = {
    passivos: [],
    passivoEdit: {},
    editing: false,
    idEdit: null,
    carregando: false
};

export default function passivos( state = INITIAL_STATE, action ) {
    if(action.type === 'EDIT_PASSIVE') {

        return {
            ...state,
            idEdit: action.id,
            passivoEdit: action.passivo,
            editing: true
        }
        
    } else if(action.type === 'DELETA_PASSIVO') {

        state.passivos.splice(action.id, 1);

        return {
            ...state,
            passivos: state.passivos,
            editing: false
        }

    } else if(action.type === 'SAVE_PASSIVE') {

        state.passivos.push(action.passivo);
        
        return {
            ...state,
            passivos: state.passivos,
        }

    } else if(action.type === 'CARREGANDO_PASSIVO_TRUE') {

        return {
            ...state,
            carregando: true
        }

    } else if(action.type === 'LOADED_PASSIVOS') {

        return {
            ...state,
            passivos: action.passivos,
            carregando: false
        }

    } else if(action.type === 'UPDATE_EDIT_PASSIVO') {

        state.passivos.splice(state.idEdit, 1, action.passivo );

        return {
            ...state,
            passivos: state.passivos,
            idEdit: null,
            editing: false
        }

    } else if(action.type === 'CANCELAR_PASSIVO') {

        return {
            ...state,
            idEdit: null,
            editing: false,
            passivoEdit: {}
        }

    }

    return state;
}