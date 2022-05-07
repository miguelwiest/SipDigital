import '../styles/globals.css'
import type {AppProps} from 'next/app'
import * as S from '../styles/global/index'
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import navButtons from "../config/menu_itens";

function MyApp({Component, pageProps}: AppProps) {
    return (

            <S.Container>
                <NavBar menuitem={navButtons}/>
                <S.Content>
                    <SideBar/>
                    <Component {...pageProps} />
                </S.Content>
            </S.Container>

    )
}

export default MyApp
