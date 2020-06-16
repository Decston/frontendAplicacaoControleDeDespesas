const INITIAL_STATE = {
    ativos: [
        {
            id: 1,
            data: "01/06/2020",
            descricao: "Bolsa",
            taxa: "Mensal",
            valor: 500,
            destino: "Bradesco",
            tipo: "Ativo"
        },
        {
            id: 2,
            data: "01/06/2020",
            descricao: "Passagens",
            taxa: "Mensal",
            valor: 64,
            destino: "Bradesco",
            tipo: "Ativo"
        },
        {
            id: 3,
            data: "06/2020",
            descricao: "Juros",
            taxa: "Mensal",
            valor: 35,
            destino: "Poupança",
            tipo: "Ativo"
        }
    ]
};

export default function ativos( state = INITIAL_STATE, action ) {
    if(action.type === 'EDIT_ACTIVE') {
        return {
            ...state,
            editID: action.id
        };
    } else if(action.type === 'DELETE_ACTIVE') {
        console.log("3 - deleteReducer");
        let index = state.ativos.indexOf(action.ativo);
        state.ativos.splice(index, 1); 
        return {
            ...state,
            ativos: state.ativos,
        }
    } 

    return state;
}