import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table, Divider } from 'antd';

import {editarAtivo, deletarAtivo, loadAtivos, carregandoAtivos} from '../store/actions/ativos';
import {editarPassivo, deletarPassivo, loadPassivos, carregandoPassivos} from '../store/actions/passivos';

const TableGastos = ({ estado, tipo, editarAtivo, deletarAtivo, editarPassivo, deletarPassivo, loadAtivos, loadPassivos, carregandoAtivos, carregandoPassivos }) => {

    useEffect(() => {
        if(tipo === "Ativos") {
            loadAtivos();
            carregandoAtivos();
        } else {
            loadPassivos();
            carregandoPassivos();
        }
    },[loadAtivos, loadPassivos, carregandoAtivos, carregandoPassivos, tipo]);

    let gastos;
    let edit;
    let del;
    if (tipo === "Ativos") {
        gastos = estado.ativos.ativos;
        edit = editarAtivo;
        del = deletarAtivo;
    }else  if(tipo === "Passivos") {
        gastos = estado.passivos.passivos;
        edit = editarPassivo;
        del = deletarPassivo;
    }

    const columns = [
        {
            title: 'Data',
            width: 100,
            dataIndex: 'data',
            key: 'id',
            fixed: 'left',
        },
        {
            title: 'Descrição',
            width: 100,
            dataIndex: 'descricao',
            key: 'id',
            fixed: 'left',
        },
        {
            title: 'Taxa',
            width: 100,
            dataIndex: 'taxa',
            key: 'id',
            fixed: 'left',
        },
        {
            title: 'Valor (R$)',
            width: 100,
            dataIndex: 'valor',
            key: 'id',
            fixed: 'left',
        },
        {
            title: 'Destino',
            width: 100,
            dataIndex: 'destino',
            key: 'id',
            fixed: 'left',
        },
        {
            title: 'Tipo',
            width: 100,
            dataIndex: 'tipo',
            key: 'id',
            fixed: 'left',
        },
        {
            title: 'Editar',
            dataIndex: 'editar',
            key: 'id',
            fixed: 'right',
            width: 100,
            render: (_, record, rowIndex) =>  <button onClick={() => edit(record, rowIndex)}>Editar</button>,
        },
        {
            title: 'Deletar',
            dataIndex: 'deletar',
            key: 'id',
            fixed: 'right',
            width: 100,
            render: (_,record, rowIndex) =>  <button onClick={() => del(record, rowIndex)}>Deletar</button>,
        },
    ];

    let data = [];
    gastos.forEach(gasto => {
        data.push({
            key: gasto.id,
            data: gasto.data,
            descricao: gasto.descricao,
            taxa: gasto.taxa,
            valor: gasto.valor,
            destino: gasto.destino,
            tipo: gasto.tipo,
        });
    });

    return (
        <div>
            <Divider orientation="left">Tabela de {tipo}</Divider>
            <Table loading={estado.ativos.carregando || estado.passivos.carregando} columns={columns} dataSource={data} />
        </div>
    );
}

const mapStateToProps = state => ({
    estado: state
});

export default connect(mapStateToProps, { editarAtivo , deletarAtivo, editarPassivo, deletarPassivo, loadAtivos, loadPassivos, carregandoAtivos, carregandoPassivos})(TableGastos);