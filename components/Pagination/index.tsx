
import React from "react";
import * as S from "./style";

const PaginationTab: React.FC = () => {

    const data = [
        {
            "Pedido": "0112466",
            "Data": "01/01/2019",
            "Produtos": "",
            "Total": "0,00",
            "Comprador": "MARCOS",
            "Status": "Cancelado",
            "Acao": "MARCAR COMO CANCELADO"
        },
        {
            "Pedido": "0112466",
            "Data": "01/01/2019",
            "Produtos": "",
            "Total": "0,00",
            "Comprador": "MARCOS",
            "Status": "Cancelado",
            "Acao": "MARCAR COMO CANCELADO"
        },
        {
            "Pedido": "0112466",
            "Data": "01/01/2019",
            "Produtos": "",
            "Total": "0,00",
            "Comprador": "MARCOS",
            "Status": "Cancelado",
            "Acao": "MARCAR COMO CANCELADO"
        },
        {
            "Pedido": "0112466",
            "Data": "01/01/2019",
            "Produtos": "",
            "Total": "0,00",
            "Comprador": "MARCOS",
            "Status": "Cancelado",
            "Acao": "MARCAR COMO CANCELADO"
        },
        {
            "Pedido": "0112466",
            "Data": "01/01/2019",
            "Produtos": "",
            "Total": "0,00",
            "Comprador": "MARCOS",
            "Status": "Cancelado",
            "Acao": "MARCAR COMO CANCELADO"
        },
        {
            "Pedido": "0112466",
            "Data": "01/01/2019",
            "Produtos": "",
            "Total": "0,00",
            "Comprador": "MARCOS",
            "Status": "Cancelado",
            "Acao": "MARCAR COMO CANCELADO"
        },
    ]

    return (
        <S.Container>
            <S.Header>
                <h1>Ultimos pedidos realizados</h1>
            </S.Header>
            <S.Table>
                <thead>
                <th>Pedido</th>
                <th>Data e Horário</th>
                <th>Produtos</th>
                <th>Total</th>
                <th>Comprador</th>
                <th>Status dos Pedidos</th>
                <th>Ação Recomendada</th>
                </thead>
                {data.map((item, index) => (
                    <tbody>

                    <tr style={{borderBottom: '1px solid #DBDDE0', marginBottom: 20}}>
                        <td>{item.Pedido}</td>
                        <td>{item.Data}</td>
                        <td>
                            <span>Ver (Quantidade)</span>
                        </td>
                        <td>{item.Total}</td>
                        <td>{item.Comprador}</td>
                        <td>{item.Status}</td>
                        <td style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <button>
                                {item.Acao}
                            </button>
                        </td>
                    </tr>
                    </tbody>
                ))}



            </S.Table>
            <S.Pagination>
                    <S.PaginationButton>
                        {'<'}
                    </S.PaginationButton>
                    <S.PaginationButton>
                        1
                    </S.PaginationButton>
                    <S.PaginationButton>
                        2
                    </S.PaginationButton>
                    <S.PaginationButton>
                        3
                    </S.PaginationButton>
                    <S.PaginationButton>
                        {'>'}
                    </S.PaginationButton>
                </S.Pagination>
        </S.Container>
    )
}

export default PaginationTab;