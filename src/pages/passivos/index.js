import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as PassivosActions from '../../store/actions/passivos';
import CadastroForm from '../../components/Form';
import FormEditar from '../../components/FormEditar';
import TableAtivo from '../../components/TableGastos';

function Passivos({ estado }) {
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        setEditing(estado.editing);
    },[estado.editing]);

    return(
        <>
            <div>
                {editing ? (
                    <FormEditar tipo="Passivo" editando={editing}/>    
                ):(
                    <CadastroForm tipo="Passivo" />
                )}

                <TableAtivo tipo="Passivos" />
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    estado: state.passivos
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(PassivosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Passivos);