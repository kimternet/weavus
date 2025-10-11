import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Printer } from 'lucide-react'
import { EyeIcon } from 'lucide-react'
import React from 'react'

const orders = [
    {

        id: 1,
        createdAt: "",
        customer: { fullName: "" },
        totalAmount: 2499,
        paymentType: "CASH",
        status: "COMPLETED"
    }
]

const OrderTable = ({ setShowOrderInvoiceDialog }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">最近のオーダー</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">オーダーID</TableHead>
                        <TableHead className="w-[150px]">時間</TableHead>
                        <TableHead className="w-[150px]">お客様</TableHead>
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
                                <div className="flex justify-end gap-2">
                                    <Button onClick={
                                        () => setShowOrderInvoiceDialog(true)
                                    } variant={"ghost"} size={"icon"}>
                                        <EyeIcon className="h-4 w-4" />
                                    </Button>
                                    <Button variant={"ghost"} size={"icon"}>
                                        <Printer className="h-4 w-4" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default OrderTable