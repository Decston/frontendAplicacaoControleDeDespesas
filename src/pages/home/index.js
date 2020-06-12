import React from 'react';
import { connect } from 'react-redux';

const Home = ({ estado }) => (
    <div>
        <h3>Saldo de Ativos: </h3>
        <b>R$ {estado.ativos.ativos.reduce((soma, ativo) => ( soma+ativo.valor ), 0)}</b>
        <h3>Saldo de Passivos: </h3>
        <b>R$ {estado.passivos.passivos.reduce((soma, passivo) => ( soma+passivo.valor ), 0)}</b>
        <h2>Saldo Restante: </h2>
        <h2> <b> R$ {(estado.ativos.ativos.reduce((soma, ativo) => ( soma+ativo.valor ), 0))
        -(estado.passivos.passivos.reduce((soma, passivo) => ( soma+passivo.valor ), 0))} </b> </h2>
    </div>
)

export default connect(state => ({ estado: state }))(Home);