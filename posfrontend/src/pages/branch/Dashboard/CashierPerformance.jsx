import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
    {
        name: "田中",
        sales: 600,
    },
    {
        name: "山田",
        sales: 700,
    },
    {
        name: "キム",
        sales: 300,
    },
    {
        name: "林",
        sales: 900,
    },
]

const CashierPerformance = () => {

    const config = {
        sales: {
            label: "Sales",
            color: "#3b82f6"
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className={"text-xl font-semibold"}>
                    Payment Breakdown
                </CardTitle>
            </CardHeader>

            <CardContent>
                <ChartContainer config={config}>
                    <ResponsiveContainer height={320} width={"100%"}>
                        <BarChart layout="vertical" data={data}>
                            <XAxis
                                type="number"
                                // dataKey={"name"}
                                stroke="#888888"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${value}`}
                            />

                            <YAxis
                                dataKey={"name"}
                                type="category"
                                stroke="#888888"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}

                            />
                            <ChartTooltip
                                content={({ active, payload }) => (
                                    <ChartTooltipContent
                                        active={active}
                                        payload={payload}
                                        formatter={(value) => [`$${value}`, "Revenue"]}
                                    />
                                )}
                            />
                            <Bar dataKey="sales" fill="currentColor" radius={4} className="fill-primary" />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>


            </CardContent>
        </Card>
    );
};

export default CashierPerformance;