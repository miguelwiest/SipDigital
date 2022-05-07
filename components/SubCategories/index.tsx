import React from 'react';
import * as S from './style';
import Image from "next/image";

const SubCategories = () => {
    const items = [
        {
            id: 1,
            name: 'Unidades Registradas',
            icon: '/icons/Registradas.svg',
            number: '1',
        },
        {
            id: 1,
            name: 'Novos Clientes',
            icon: '/icons/NovosClientes.svg',
            number: '104',
        },
        {
            id: 1,
            name: 'Vendas Realizadas',
            icon: '/icons/Vendas.svg',
            number: '7270',
        },
        {
            id: 1,
            name: 'Lucro Liquido (Geral)',
            icon: '/icons/Lucro.svg',
            number: 'R$ 427.300,50',
        },
    ]
    return (
        <S.Container>
            <S.Grid>
                {items.map(item => (
                <>
                    <S.Card>
                        <Image src={item.icon} width={40} height={40} />
                        <S.CardContent>
                            <S.CardTitle>{item.name}</S.CardTitle>
                            <S.CardSubtitle>{item.number}</S.CardSubtitle>
                        </S.CardContent>
                    </S.Card>
                </>
            ))}
            </S.Grid>

        </S.Container>
    )
}

export default SubCategories;