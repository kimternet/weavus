import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const COLORS = ["#6D214F", "#B33771", "#D980FA", "#833471", "#84817a"];


const StoreStatus = () => {

    const data = [
        {
            name: "味噌ラーメン",
            value: 34,
            percentage: 40
        },
        {
            name: "塩ラーメン",
            value: 10,
            percentage: 15
        },
        {
            name: "つけ麵",
            value: 24,
            percentage: 20
        },
        {
            name: "普通ラーメン",
            value: 54,
            percentage: 50
        },
    ]

    const config = data.reduce((acc, item, idx) => acc[item.name] = {
        label: item.name,
        color: COLORS[idx % COLORS.length]
    })

    const renderCustomizedLable = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5
        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180))
        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180))

        const percentValue = data[index]?.percentage ?? percent * 100;

        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline={"central"}>
                {`${percentValue.toFixed(0)}%`}
            </text>
        )
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className={"text-xl font-semibold"}>
                    Store Status Distribution
                </CardTitle>
            </CardHeader>

            <CardContent>
                <ChartContainer config={config}>
                    <ResponsiveContainer height={320} width={"100%"}>
                        <PieChart data={data}>
                            <Pie data={data} cs={"50%"} cy={"50%"} outerRadius={80} fill="#130f40" labelLine={false} dataKey={"value"} label={renderCustomizedLable}>


                                {data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} key={`cell-${index}`} />)}

                            </Pie>

                            <ChartTooltip
                                content={({ active, payload }) => (
                                    <ChartTooltipContent
                                        active={active}
                                        payload={payload}
                                        formatter={(value) => [`$${value ?? "-"}`, "Sales"]}
                                    />
                                )}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </ChartContainer>


            </CardContent>
        </Card>
    )
}

export default StoreStatus