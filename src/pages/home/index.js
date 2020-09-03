import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Home ({ estado }) {
    const [ativos, setAtivos] = useState([]);
    const [passivos, setPassivos] = useState([]);

    useEffect(() => {
        document.title = `Home`;
        async function buscaGastos() {
            const response = await fetch('http://localhost:8080/api/gastos');
            const data = await response.json();
            const passivos = data.filter(dt => {
                if (dt.tipo === "Passivo"){
                    return true;
                }else{
                    return false;
                }
            })
            setPassivos(passivos);
        }

        buscaGastos();
    }, []);

    estado.passivos.passivos = passivos;

    useEffect(() => {
        async function buscaGastos() {
            const response = await fetch('http://localhost:8080/api/gastos');
            const data = await response.json();
            const ativos = data.filter(dt => {
                if (dt.tipo === "Ativo"){
                    return true;
                }else{
                    return false;
                }
            })
            setAtivos(ativos);
        }

        buscaGastos();
    }, []);

    estado.ativos.ativos = ativos;

    return(
        <div>
            <h3>Saldo de Ativos: </h3>
            <b> {estado.ativos.ativos.reduce((soma, ativo) => ( soma+ativo.valor ), 0)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b>
            <h3>Saldo de Passivos: </h3>
            <b> {estado.passivos.passivos.reduce((soma, passivo) => ( soma+passivo.valor ), 0)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b>
            <h2>Saldo Restante: </h2>
            <h2> <b> {((estado.ativos.ativos.reduce((soma, ativo) => ( soma+ativo.valor ), 0))
            -(estado.passivos.passivos.reduce((soma, passivo) => ( soma+passivo.valor ), 0)))
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </b> </h2>
        </div>
    );
}

export default connect(state => ({ estado: state }))(Home);