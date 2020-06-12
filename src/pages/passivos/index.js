import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as PassivosActions from '../../store/actions/passivos';

const Passivos = ({ estado, editarPassivo, deletarPassivo }) => (
    <div>
        <h2>Passivos</h2>
        <table border="1">
            <thead>
                <tr><td>Data</td><td>Descricao</td><td>Taxa</td><td>Valor</td><td>Destino</td><td>Tipo</td><td>Edite</td><td>Delete</td></tr>
            </thead>
            <tbody>
                {estado.passivos.map(passivo => {
                        return(
                            <tr key={passivo.id}>
                                <td>{passivo.data}</td>
                                <td>{passivo.descricao}</td>
                                <td>{passivo.taxa}</td>
                                <td>{passivo.valor}</td>
                                <td>{passivo.destino}</td>
                                <td>{passivo.tipo}</td>
                                <td><button onClick={() => editarPassivo(passivo)}>Editar</button></td>
                                <td><button onClick={() => deletarPassivo(passivo)}>Deletar</button></td>
                            </tr> 
                        );
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td>Passivos</td>
                </tr>
            </tfoot>
        </table>
    </div>
);

const mapStateToProps = state => ({
    estado: state.passivos
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(PassivosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Passivos);