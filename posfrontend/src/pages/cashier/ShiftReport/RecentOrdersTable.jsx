import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const shiftData = {
    recentOrders: [
        {
            id: 1,
            createdAt: "01:01 PM",
            paymentType: "CASH",
            totalAmount: 7373,
        },
        {
            id: 2,
            createdAt: "03:01 PM",
            paymentType: "CARD",
            totalAmount: 17373,
        },
    ],
};

const RecentOrdersTable = () => {
    return (

        <Card>
            <CardContent>
                <h2 className="text-xl font-semibold mb-4">最近のオーダー</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[150px]">オーダーID</TableHead>
                            <TableHead className="w-[150px]">時間</TableHead>
                            <TableHead className="w-[150px]">支払い</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {shiftData.recentOrders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.createdAt}</TableCell>
                                <TableCell>{order.paymentType}</TableCell>
                                <TableCell className="text-right">¥{order.totalAmount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card >


    )
}

export default RecentOrdersTable