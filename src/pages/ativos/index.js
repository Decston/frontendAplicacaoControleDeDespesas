import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as AtivosActions from '../../store/actions/ativos';

const Ativos = ({ estado, editarAtivo, deletarAtivo }) => (
    <div>
        <h2>Ativos</h2>
        <table border="1">
            <thead>
                <tr><td>Data</td><td>Descricao</td><td>Taxa</td><td>Valor</td><td>Destino</td><td>Tipo</td><td>Edite</td><td>Delete</td></tr>
            </thead>
            <tbody>
                {estado.ativos.map(ativo => {
                        return(
                            <tr key={ativo.id}>
                                <td>{ativo.data}</td>
                                <td>{ativo.descricao}</td>
                                <td>{ativo.taxa}</td>
                                <td>{ativo.valor}</td>
                                <td>{ativo.destino}</td>
                                <td>{ativo.tipo}</td>
                                <td><button onClick={() => editarAtivo(ativo)}>Editar</button></td>
                                <td><button onClick={() => deletarAtivo(ativo)}>Deletar</button></td>
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

const mapStateToProps = state => ({
    estado: state.ativos
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(AtivosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Ativos);