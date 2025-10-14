import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const recentSales = [
    { branch: "Main Store", amount: "$1,234", date: "Today" },
    { branch: "新宿三丁目", amount: "$891", date: "Today" },
    { branch: "代々木1丁目", amount: "$654", date: "Yesterday" },
    { branch: "渋谷区", amount: "$1,021", date: "Yesterday" },
];


const RecentSales = () => {
    return (
        <Card>

            <CardHeader>
                <CardTitle className={"text-xl font-semibold"}>Recent Sales</CardTitle>
            </CardHeader>

            <CardContent>
                <div className="space-y-4">

                    {recentSales.map((item) =>
                        <div key={item.branch} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                            <div>
                                <p className="font-medium">{item.branch}</p>
                                <p className="text-sm text-gray-500">{item.date}</p>
                            </div>
                            <p className="font-semibold">{item.amount}</p>
                        </div>
                    )}
                </div>

            </CardContent>

        </Card>
    )
}

export default RecentSales