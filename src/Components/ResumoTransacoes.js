import { useEffect, useState } from "react";
import { TransacaoData } from "../Data/TransacaoData";

const ResumoTransasoes = () => {
    const [totalEntradas, setTotalEntradas] = useState([]);
    const [totalSaidas, setTotalSaidas] = useState([]);
    const [saldo, setSaldo] = useState([]);

    useEffect(() => {
        setTotalEntradas(somaDasEntradas(TransacaoData));
        setTotalSaidas(somaDasSaidas(TransacaoData))
    }, []);

    useEffect(() => {
        if (totalEntradas && totalSaidas != null) {
            setSaldo(totalEntradas - totalSaidas);
        }
    }, [totalEntradas, totalSaidas])

    function somaDasEntradas(data) {
        var sum = 0;
        var i;
        for (i = 0; i < data.length; i++) {
            sum += data[i].entrada;
        }
        return sum;
    }

    function somaDasSaidas(data) {
        var sum = 0;
        var i;
        for (i = 0; i < data.length; i++) {
            sum += data[i].saida;
        }
        return sum;
    }


    return (
        <div className="resumo_transacoes">
            <div className="resumo_transacoes_valores">
                Total Entradas: {totalEntradas}
            </div>
            <div className="resumo_transacoes_valores">
                Total Saídas: {totalSaidas}
            </div>
            <div className="resumo_transacoes_valores">
                Saldo Atual: {saldo}
            </div>
        </div>
    )
}

export default ResumoTransasoes;