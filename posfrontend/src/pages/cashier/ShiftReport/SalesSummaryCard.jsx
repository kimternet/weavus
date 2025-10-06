import { Card, CardContent } from '@/components/ui/card'
import { JapaneseYen } from 'lucide-react'
import React from 'react'

const shiftData = {
    cashier: { fullName: "キム" },
    shiftStart: "Aug 8, 2025, 09:34 AM",
    shiftEnd: "",
    totalOrders: 59,
    totalSales: 6999,
    totalRefund: 211111,
    netSales: 494494
}

const SalesSummaryCard = () => {
    return (
        <Card>
            <CardContent>

                <h2 className="text-xl font-semibold mb-4">売上要約</h2>
                <div className="space-y2">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">トータルオーダー </span>
                        <span className="font-medium">{shiftData.totalOrders}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">トータル販売 </span>
                        <span className="font-medium">¥{shiftData.totalSales}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">トータル返金</span>
                        <span className="font-medium text-red-500">¥{shiftData.totalRefund}</span>
                    </div>
                    <div className="flex justify-between border-t">
                        <span className="text-muted-foreground">ネット販売 </span>
                        <span className="font-medium">{shiftData.netSales}</span>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}

export default SalesSummaryCard