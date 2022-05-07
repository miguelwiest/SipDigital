import React from 'react';
import * as S from './style';
import Image from "next/image";

const SideBar = () => {
    return (
        <S.Container>
            <S.Search>
                <Image style={{marginTop: 2}} src="/icons/Search.svg" width={20} height={20} />
                <input type="text" placeholder="Pesquisar" />
            </S.Search>
            <S.User>
                <S.UserNotification>
                    <Image src="/icons/Notification.svg" width={24} height={24} />
                </S.UserNotification>
                <Image src={'/icons/User.svg'} width={40} height={40} />
            </S.User>
        </S.Container>
    )
}

export default SideBar;