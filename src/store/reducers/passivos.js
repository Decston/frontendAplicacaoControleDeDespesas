import axios from 'axios';

const INITIAL_STATE = {
    passivos: [],
    passivoEdit: {},
    editing: false,
    idEdit: null
};

export default function passivos( state = INITIAL_STATE, action ) {
    if(action.type === 'EDIT_PASSIVE') {
        console.log('3 - editPassivoReduce');
        console.log(action.id);
        
        return {
            ...state,
            idEdit: action.id,
            passivoEdit: action.passivo,
            editing: true
        }
        
    } else if(action.type === 'DELETE_PASSIVE') {

        console.log('3 - deletePassivoReduce');
        
        fetch('http://localhost:8080/api/gasto', {
            method: 'DELETE',
            body: JSON.stringify(action.passivo),
            headers: {
                'Content-type': 'application/json;' 
            }
        })
        .then (function(response) {
            return response.ok;
        })

        let index = state.passivos.indexOf(action.passivo);
        state.passivos.splice(index, 1); 

        return {
            ...state,
            passivos: state.passivos,
            editing: false
        }

    } else if(action.type === 'SAVE_PASSIVE') {
        console.log(state.editing);

        if(state.editing === false) {

            console.log('3 - savePassivoReduce');

            axios.post('http://localhost:8080/api/gasto', action.passivo)
            .then((response) => {
                
            });

            const newPassivo = { id: Math.round(Math.random()*100), ...action.passivo};
            state.passivos.push(newPassivo);
            
            return {
                ...state,
                passivos: state.passivos,
            }

        } else {

            console.log('Editando...');
            console.log(state.idEdit);

            state.passivos.splice(state.idEdit, 1, action.passivo );

            axios.put('http://localhost:8080/api/gasto', action.passivo)
            .then((response) => {
                console.log(response.status);    
            });

            return {
                ...state,
                passivos: state.passivos,
                idEdit: null,
                editing: false
            }

        }

    } else if(action.type === 'LOADED_PASSIVOS') {
        console.log('reduceLoadPassivos');

        return {
            ...state,
            passivos: action.passivos
        }
    }

    return state;
}