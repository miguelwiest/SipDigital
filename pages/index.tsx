import type {NextPage} from 'next'
import * as S from '../styles/global'
import SubCategories from "../components/SubCategories";
import Graph from "../components/Graph";
import PaginationTab from "../components/Pagination";

const Home: NextPage = () => {
    return (
        <>
            <SubCategories/>
            <Graph/>
            <PaginationTab/>
        </>
    )
}

export default Home
