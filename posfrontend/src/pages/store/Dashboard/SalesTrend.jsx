import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import React from 'react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'



const SalesTrend = () => {

    const chartData = [
        { month: "January", desktop: 186 },
        { month: "February", desktop: 305 },
        { month: "March", desktop: 237 },
        { month: "April", desktop: 73 },
        { month: "May", desktop: 209 },
        { month: "June", desktop: 214 },
    ]

    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "var(--chart-1)",
        },
        mobile: {
            label: "Mobile",
            color: "var(--chart-1)",
        },
    }

    return (
        <Card>
            <CardHeader>

                <CardTitle>
                    Sales Trend
                </CardTitle>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Line
                                dataKey="desktop"
                                type="natural"
                                stroke="#10b981"
                                strokeWidth={2}
                                dot={{
                                    fill: "#10b981",
                                }}
                                activeDot={{
                                    r: 6, fill: "#10b981"
                                }}
                            />
                        </LineChart>
                    </ChartContainer>
                </CardContent>

            </CardHeader>
        </Card>

    )
}

export default SalesTrend