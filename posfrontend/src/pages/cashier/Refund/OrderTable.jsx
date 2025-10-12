import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Printer } from 'lucide-react'
import { EyeIcon } from 'lucide-react'
import React from 'react'

const orders = [
    {

        id: 1,
        createdAt: "Jul 8, 2025, 12:35 PM",
        customer: { fullName: "キム", phone: "0101234567" },
        totalAmount: 2499,
        paymentType: "CASH",
        status: "COMPLETED",
        items: [
            {

                id: 2,
                product: {
                    image: "https://cdn.pixabay.com/photo/2017/08/26/19/19/ramen-2684000_1280.jpg",
                    name: "ラーメン",
                    sellingPrice: 450,
                    sku: "美味しい"
                },
                quantity: 2,

            }
        ]
    }
]

const OrderTable = ({ handleSelectOrder }) => {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">オーダーID</TableHead>
                        <TableHead className="">時間</TableHead>
                        <TableHead className="">お客様</TableHead>
                        <TableHead className="">Amount</TableHead>
                        <TableHead className="">支払い</TableHead>
                        <TableHead className="">Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell>{order.id}</TableCell>
                            <TableCell>{order.createdAt}</TableCell>
                            <TableCell>{order.customer?.fullName}</TableCell>
                            <TableCell>{order.totalAmount}</TableCell>
                            <TableCell>{order.paymentType}</TableCell>
                            <TableCell>{order.status}</TableCell>
                            <TableCell className="text-right">
                                <Button onClick={
                                    () => handleSelectOrder(order)
                                } >
                                    select for return
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div >
    )
}

export default OrderTable