import React from "react";
import {NextPage} from "next";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    AreaChart,
    Area,
    BarChart,
    Bar,
} from 'recharts';
import * as S from './style';

const Graph: React.FC = () => {

    const data = [
        {name: '2020-08', pv: 300, amt: 900},
        {name: '2020-09', pv: 500, amt: 650},
        {name: '2020-10', pv: 200, amt: 220},
        {name: '2020-11', pv: 600, amt: 500},
        {name: '2020-12', pv: 400, amt: 181},
        {name: '2021-01', pv: 700, amt: 800},
        {name: '2021-02', pv: 1000, amt: 2100},
    ];
    return (
        <S.Container>
            <S.Header>
                <h1>Relatório de Vendas</h1>
            </S.Header>
            <S.Chart>
                <ResponsiveContainer height={400}>
                    <AreaChart
                        className="area-chart"

                        margin={{top: 10, right: 30, left: 0, bottom: 0}}
                        data={data}

                    >
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#4F72FC" stopOpacity={1}/>
                                <stop offset="95%" stopColor="#F0F2FE" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="Rosa" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="5%" stopColor="#613062" stopOpacity={1}/>
                                <stop offset="100%" stopColor="#FF00C7" stopOpacity={1}/>
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient id="Azul" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="5%" stopColor="#3374AB" stopOpacity={1}/>
                                <stop offset="100%" stopColor="#5AB1F3" stopOpacity={1}/>
                                <stop offset="100%" stopColor="#6BD8FE" stopOpacity={1}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 5" vertical={false}/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Area type="monotone" dataKey="pv" stackId="1" stroke="url(#Azul)" fill="url(#colorUv)"/>
                        <Area type="monotone" dataKey="amt" stackId="1" stroke="url(#Rosa)" fill="transparent"/>
                    </AreaChart>
                </ResponsiveContainer>
            </S.Chart>

        </S.Container>
    )
}

export default Graph;