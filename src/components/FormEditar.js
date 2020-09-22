import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { salvarAtivo, editAtivo, cancelEditAtivo } from '../store/actions/ativos';
import { salvarPassivo, editPassivo, cancelEditPassivo } from '../store/actions/passivos';

const CadastroForm = ({ estado, salvarAtivo, editAtivo, cancelEditAtivo, salvarPassivo, editPassivo, cancelEditPassivo, tipo, editando }) => {

    const initialValue = {
        data: '',
        descricao: '',
        taxa: '',
        valor: '',
        destino: '',
        tipo: tipo
    }

    const [values, setValues] = useState(initialValue);

    
    useEffect(() => {
        if(tipo === "Ativo") {
            setValues(estado.ativos.ativoEdit);
        }else{
            setValues(estado.passivos.passivoEdit);
        }
    }, [estado.ativos.ativoEdit, estado.passivos.passivoEdit, tipo]);
    

    function onChange(event) {
        const { name, value } = event.target;

        setValues({ ...values, [name]: value});
    }

    function onSubmit(event) {
        event.preventDefault();
        console.log(tipo, editando);

        if(tipo === 'Ativo' & editando === false) {
            salvarAtivo(values);
        } else if(tipo === 'Ativo' & editando === true) {
            editAtivo(values, estado.ativos.idEdit);
        } else if(tipo === 'Passivo' & editando === false) {
            salvarPassivo(values);
        } else if(tipo === 'Passivo' & editando === true) {
            editPassivo(values, estado.passivos.idEdit);
        }
        
        setValues(initialValue);
    }

    function cancelar(event) {
        event.preventDefault();

        if(tipo === 'Ativo') {
            cancelEditAtivo();
        } else {
            cancelEditPassivo();
        }

        setValues(initialValue);
    }

    return (
        <div>
            <h2>Editar {tipo}</h2>
        
            <h3>Preencha os dados:</h3>

            <form onSubmit={onSubmit}>
                <div className="cadastro-form">
                    <label htmlFor="data">Data</label>
                    <br />
                    <input id="data" name="data" type="text" value={values.data} onChange={onChange}/>
                </div>
                <div className="cadastro-form">
                    <label htmlFor="descricao">Descrição</label>
                    <br />
                    <input id="descricao" name="descricao" type="text" value={values.descricao} onChange={onChange}/>
                </div>
                <div className="cadastro-form">
                    <label htmlFor="taxa">Taxa</label>
                    <br />
                    <input id="taxa" name="taxa" type="text" value={values.taxa} onChange={onChange}/>
                </div>
                <div className="cadastro-form">
                    <label htmlFor="valor">Valor</label>
                    <br />
                    <input id="valor" name="valor" type="number" value={values.valor} onChange={onChange}/>
                </div>
                <div className="cadastro-form">
                    {tipo === 'Ativo' ? <label htmlFor="destino">Destino</label> : <label htmlFor="destino">Fonte</label> }
                    <br />
                    <input id="destino" name="destino" type="text" value={values.destino} onChange={onChange}/>
                </div>
                <div className="cadastro-form">
                    <label htmlFor="tipo">Tipo</label>
                    <br />
                    <input id="tipo" name="tipo" type="text" defaultValue={values.tipo} readOnly={true}/>
                </div>
                <div>
                    <button type="submit">Salvar</button>
                </div>
                <br />
                <div>
                    <button onClick={cancelar} type="button">Cancelar</button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    estado: state
});

export default connect(mapStateToProps, { salvarAtivo, editAtivo, cancelEditAtivo, salvarPassivo, editPassivo, cancelEditPassivo })(CadastroForm);