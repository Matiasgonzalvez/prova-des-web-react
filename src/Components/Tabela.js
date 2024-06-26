import { useEffect, useState } from "react";
import { TransacaoData } from "../Data/TransacaoData";

const Tabela = () => {
    const [trasacoes, setTransacoes] = useState([]);

    useEffect(() => {
        setTransacoes(TransacaoData);
    }, []);

    return (
        <section id="tabela">
            <div id="header_tabela">
                <div>Código</div>
                <div>Descrição</div>
                <div>Entrada</div>
                <div>Saída</div>
                <div>Total</div>
            </div>
            <div id="body_tabela">
                {trasacoes?.map((transacao, index) => (
                    <div className="transacoes" key={index}>
                        <div>{transacao.codigo}</div>
                        <div>{transacao.descricao}</div>
                        <div>{transacao.entrada}</div>
                        <div>{transacao.saida}</div>
                        <div>{transacao.total}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tabela;