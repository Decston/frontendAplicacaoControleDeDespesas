import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Divider } from 'antd';

import {loadAtivos} from '../../store/actions/ativos';
import {loadPassivos} from '../../store/actions/passivos';

import './styles.css';

function Home ({ ativos, passivos, loadAtivos, loadPassivos }) {
    const [saldoAtivos, setSaldoAtivos] = useState(0);
    const [saldoPassivos, setSaldoPassivos] = useState(0);

    useEffect(() => {
        loadAtivos();
        loadPassivos();
    }, [loadAtivos, loadPassivos]);

    useEffect(() => {
        setSaldoAtivos(ativos.reduce((soma, ativo) => ( soma+ativo.valor ), 0));
    }, [ativos])

    useEffect(() => {
        setSaldoPassivos(passivos.reduce((soma, passivo) => ( soma+passivo.valor ), 0));
    }, [passivos])

    return(
        <div>
            <Divider className='saldo-total' orientation="left">Saldos</Divider>
            <div className='saldo'>
                <h3>Saldo de Ativos: </h3>
                <b> {saldoAtivos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b>
                <h3>Saldo de Passivos: </h3>
                <b> {saldoPassivos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b>

                <Divider className='saldo-total' orientation="left">Saldo:</Divider>

                <h2>
                    {((saldoAtivos-saldoPassivos)>=0) ? ( 
                        <b className='saldoPositivo'>{(saldoAtivos-saldoPassivos).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b>
                    ):(
                        <b className='saldoNegativo'>{(saldoAtivos-saldoPassivos).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b>
                    )}
                </h2>
            </div>
        </div>
    );
}

const mapStateTopProps = state => ({
    ativos: state.ativos.ativos,
    passivos: state.passivos.passivos
});

export default connect(mapStateTopProps,{loadAtivos, loadPassivos})(Home);