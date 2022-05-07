import React from 'react';
import * as S from './style';
import Link from "next/link";
import Image from "next/image";

interface MenuProps {
	path: string,
	label: string,
	icon: any,
}

const Menu = (props: MenuProps) => {
    return (
        <Link href={props.path} passHref>
            <S.MenuLinks>
                <a>
                    <Image src={props.icon} width={20} height={20} alt="icons"/> {props.label}
                </a>
            </S.MenuLinks>
        </Link>
    )
}

export default Menu;