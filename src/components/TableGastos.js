import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {editarAtivo} from '../store/actions/ativos';
import {deletarAtivo} from '../store/actions/ativos';
import {editarPassivo} from '../store/actions/passivos';
import {deletarPassivo} from '../store/actions/passivos';
import {loadAtivos} from '../store/actions/ativos';
import {loadPassivos} from '../store/actions/passivos';

const TableGastos = ({ estado, tipo, editarAtivo, deletarAtivo, editarPassivo, deletarPassivo, loadAtivos, loadPassivos }) => {
    //const [varGastos, setVarGastos] = useState([]);
    //const [funcEditar, setFuncEditar] = useState();
    //const [funcDeletar, seFunctDeletar] = useState();

    useEffect(() => {
        if(tipo === "Ativos") {
            loadAtivos();
        } else {
            loadPassivos();
        }
    },[loadAtivos, loadPassivos, tipo]);

    let gastos;
    let edit;
    let del;
    if (tipo === "Ativos") {
        gastos = estado.ativos.ativos;
        edit = editarAtivo;
        del = deletarAtivo;
      } else {
        gastos = estado.passivos.passivos;
        edit = editarPassivo;
        del = deletarPassivo;
      }
    
    function convertEmReal(valor) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return (
        <div>
            <h2> Tabela de {tipo}</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <td>Data</td>
                            <td>Descricao</td>
                            <td>Taxa</td>
                            <td>Valor</td>
                            <td>Destino</td>
                            <td>Tipo</td>
                            <td>Edite</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {gastos.map(ativo => {
                            return(
                                <tr key={ativo.id}>
                                    <td>{ativo.data}</td>
                                    <td>{ativo.descricao}</td>
                                    <td>{ativo.taxa}</td>
                                    <td>{convertEmReal(ativo.valor)}</td>
                                    <td>{ativo.destino}</td>
                                    <td>{ativo.tipo}</td>
                                    <td><button onClick={() => edit(ativo, gastos.indexOf(ativo))}>Editar</button></td>
                                    <td><button onClick={() => del(ativo)}>Deletar</button></td>
                                </tr> 
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Ativos</td>
                        </tr>
                    </tfoot>
                </table>
        </div>
    );
}

const mapStateToProps = state => ({
    estado: state
});

export default connect(mapStateToProps, { editarAtivo , deletarAtivo, editarPassivo, deletarPassivo, loadAtivos, loadPassivos })(TableGastos);