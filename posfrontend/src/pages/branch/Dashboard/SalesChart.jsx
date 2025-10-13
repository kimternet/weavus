import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
    {
        name: "2025-10-14",
        sales: 600,
    },
    {
        name: "2025-10-15",
        sales: 700,
    },
    {
        name: "2025-10-16",
        sales: 300,
    },
    {
        name: "2025-10-17",
        sales: 900,
    },
]

const SalesChart = () => {

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
                        <BarChart data={data}>
                            <XAxis
                                dataKey={"name"}
                                stroke="#888888"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />

                            <YAxis
                                // dataKey={"name"}
                                stroke="#888888"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${value}`}
                            />
                            <ChartTooltip
                                content={({ active, payload }) => (
                                    <ChartTooltipContent
                                        active={active}
                                        payload={payload}
                                        formatter={(value) => [`$${value}`, "Sales"]}
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

export default SalesChart;