import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const shiftData = {
    cashier: { fullName: "キム" },
    shiftStart: "Aug 8, 2025, 09:34 AM",
    shiftEnd: "",
    duration: ""
}

const ShiftInformation = () => {
    return (
        <Card>
            <CardContent>

                <h2 className="text-xl font-semibold mb-4">シフト情報</h2>
                <div className="space-y2">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Shift Start: </span>
                        <span className="font-medium">{shiftData.cashier.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Shift Start: </span>
                        <span className="font-medium">{shiftData.shiftStart}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Shift End: </span>
                        <span className="font-medium">{shiftData.shiftEnd ? shiftData.shiftEnd : "ongoing"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">duration: </span>
                        <span className="font-medium">{"8 hours"}</span>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}

export default ShiftInformation