import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Divider } from 'antd';

import { salvarAtivo } from '../store/actions/ativos';
import { salvarPassivo } from '../store/actions/passivos';

import './Form.css';

const CadastroForm = ({ estado, salvarAtivo, salvarPassivo, tipo }) => {

    const initialValue = {
        data: '',
        descricao: '',
        taxa: '',
        valor: '',
        destino: '',
        tipo: tipo
    }

    const [values, setValues] = useState(initialValue);

    function onChange(event) {
        const { name, value } = event.target;

        setValues({ ...values, [name]: value});
    }

    function onSubmit(event) {
        event.preventDefault();
   
        if(tipo === 'Ativo') {
            salvarAtivo(values);
        } else if (tipo === 'Passivo') {
            salvarPassivo(values);
        }
        
        setValues(initialValue);
    }

    function cancelar(event) {
        event.preventDefault();
        setValues(initialValue);
    }

    return (
        <div>
            <Divider orientation="left">Salvar {tipo}</Divider>
            
            <div className="containerForm">
                <h3>Preencha os dados:</h3>

                <form onSubmit={onSubmit} className="formulario">
                    <div className="cadastro-form">
                        <input id="data" name="data" placeholder="Data" type="text" value={values.data} onChange={onChange}/>
                    </div>
                    <div className="cadastro-form">
                        <input id="descricao" name="descricao" placeholder="Descrição" type="text" value={values.descricao} onChange={onChange}/>
                    </div>
                    <div className="cadastro-form">
                        <input id="taxa" name="taxa" placeholder="Taxa" type="text" value={values.taxa} onChange={onChange}/>
                    </div>
                    <div className="cadastro-form">
                        <input id="valor" name="valor" placeholder="Valor" type="number" value={values.valor} onChange={onChange}/>
                    </div>
                    <div className="cadastro-form">
                        {tipo === 'Ativo' ?
                            <input id="destino" name="destino" placeholder="Destino" type="text" value={values.destino} onChange={onChange}/>
                        : 
                            <input id="destino" name="destino" placeholder="Fonte" type="text" value={values.destino} onChange={onChange}/>
                        }
                    </div>
                    <div className="cadastro-form">
                        <input id="tipo" name="tipo" type="text" defaultValue={values.tipo} readOnly={true}/>
                    </div>
                    <div className="container-button">
                        <div> <button type="submit">Salvar</button> </div>
                        <div> <button onClick={cancelar} type="button">Cancelar</button> </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    estado: state
});

export default connect(mapStateToProps, { salvarAtivo, salvarPassivo })(CadastroForm);