import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as AtivosActions from '../../store/actions/ativos';
import CadastroForm from '../../components/Form';
import FormEditar from '../../components/FormEditar';
import TableAtivo from '../../components/TableGastos';

function Ativos({ estado }) {
    const [editing, setEditing] = useState(false);
    
    useEffect(() => {
        setEditing(estado.editing);
    },[estado.editing]);

    return(
        <>
            <div>
                {editing ? (
                    <FormEditar tipo="Ativo" editando={editing} />    
                ):(
                    <CadastroForm tipo="Ativo" />
                )}

                <TableAtivo tipo="Ativos" />
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    estado: state.ativos
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(AtivosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Ativos);