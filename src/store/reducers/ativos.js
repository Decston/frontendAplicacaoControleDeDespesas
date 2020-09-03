import axios from 'axios';

const INITIAL_STATE = {
    ativos: [],
    ativoEdit: {},
    editing: false,
    idEdit: null
};

export default function ativos( state = INITIAL_STATE, action ) {
    if(action.type === 'EDIT_ACTIVE') {
        console.log('3 - editAtivoReduce');

        return {
            ...state,
            idEdit: action.id,
            ativoEdit: action.ativo,
            editing: true
        }

    } else if(action.type === 'DELETE_ACTIVE') {

        console.log('3 - deleteAtivoReduce');

        fetch('http://localhost:8080/api/gasto', {
            method: 'DELETE',
            body: JSON.stringify(action.ativo),
            headers: {
                'Content-type': 'application/json;' 
            }
        })
        .then (function(response) {
            return response.ok;
        })

        let index = state.ativos.indexOf(action.ativo);
        state.ativos.splice(index, 1);        
        
        return {
            ...state,
            ativos: state.ativos,
            editing: false
        }

    } else if(action.type === 'SAVE_ACTIVE') {

        if(state.editing === false) {

            console.log('3 - saveAtivoReduce');

            axios.post('http://localhost:8080/api/gasto', action.ativo)
            .then((response) => {
                
            });

            const newAtivo = { id: Math.round(Math.random()*100), ...action.ativo};
            state.ativos.push(newAtivo);
            
            return {
                ...state,
                ativos: state.ativos,
            }

        } else {

            console.log('Editando...');

            state.ativos.splice(state.idEdit, 1, action.ativo );

            axios.put('http://localhost:8080/api/gasto', action.ativo)
            .then((response) => {
                console.log(response.ok);    
            });

            return {
                ...state,
                ativos: state.ativos,
                idEdit: null,
                editing: false
            }

        }

    } else if(action.type === 'LOADED_ATIVOS') {
        console.log('reduceLoadAtivos');

        return {
            ...state,
            ativos: action.ativos
        }
    }

    return state;
}