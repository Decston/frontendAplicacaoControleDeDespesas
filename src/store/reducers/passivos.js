const INITIAL_STATE = {
    passivos: [
        {
            id: 1,
            data: "01/06/2020",
            descricao: "Curso de Inglês",
            taxa: "Mensal",
            valor: 73,
            destino: "Bradesco",
            tipo: "Passivo"
        },
        {
            id: 2,
            data: "04/06/2020",
            descricao: "Futuro",
            taxa: "Mensal",
            valor: 125,
            destino: "Bradesco",
            tipo: "Passivo"
        },
        {
            id: 3,
            data: "06/2020",
            descricao: "Créditos",
            taxa: "Mensal",
            valor: 20,
            destino: "Carteira",
            tipo: "Passivo"
        }
    ]
};

export default function passivos( state = INITIAL_STATE, action ) {
    if(action.type === 'EDIT_PASSIVE') {
        return {
            ...state,
            editID: action.id
        };
    } else if(action.type === 'DELETE_PASSIVE') {
        let index = state.passivos.indexOf(action.passivo);
        state.passivos.splice(index, 1); 
        return {
            ...state,
            passivos: state.passivos,
        }
    }

    return state;
}