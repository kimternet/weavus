import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'


const shiftData = {
    refund: [
        {
            id: 234,
            orderId: 2,
            reason: "ミスーおーだ",
            amount: 450
        }
    ]
}

const RefundsTable = () => {
    return (
        <Card>
            <CardContent>
                <h2 className="text-xl font-semibold mb-4">返金</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[150px]">Refund ID</TableHead>
                            <TableHead className="w-[150px]">オーダーID</TableHead>
                            <TableHead className="w-[150px]">払い戻しの理由</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {shiftData.refund.map((refund) => (
                            <TableRow key={refund.id}>
                                <TableCell>RFD - {refund.id}</TableCell>
                                <TableCell>ORD - {refund.orderId}</TableCell>
                                <TableCell>{refund.reason}</TableCell>
                                <TableCell className="text-right">¥{refund.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card >
    )
}

export default RefundsTable