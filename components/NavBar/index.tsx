import React from 'react';
import Menu from "../Menu";
import * as S from './style';
import Image from "next/image";
import logout from '../../public/icons/logout.svg';

interface MenuItem {
    path: string,
    label: string,
    icon: Element | any
}

interface Menu {
    menuitem: MenuItem[],
}

const NavBar = ({menuitem}: Menu) => {
    return (
        <S.Container>
            <S.Logo>
                <h1>Logo</h1>
            </S.Logo>
            {menuitem && menuitem.map((item) => {
                return (
                    <>
                        <Menu
                            path={item.path}
                            label={item.label}
                            icon={item.icon}
                        />
                    </>
                )
            })}
            <S.Footer>
                <S.Logout>
                    <Image src={logout} width={20} height={20}/>
                    <h1>Logout</h1>
                </S.Logout>
            </S.Footer>
        </S.Container>
    )
}

export default NavBar;