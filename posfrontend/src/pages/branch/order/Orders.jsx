import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import { RefreshCw } from 'lucide-react'
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Download } from 'lucide-react'
import { useState } from 'react'
import OrderDetails from '@/pages/cashier/OrderHistory/OrderDetails/OrderDetails'

const orders = [
    {

        id: 1,
        createdAt: "Jul 8, 2025, 12:35 PM",
        customer: { fullName: "キム", phone: "0101234567" },
        cashierId: 45,
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
];

const Orders = () => {
    const [showOrderInvoiceDialog, setShowOrderInvoiceDialog] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleViewOrderDetails = (order) => { setSelectedOrder(order), setShowOrderInvoiceDialog(true) }
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">

                <h1 className="font-bold text-3xl tracking-tight">Orders</h1>

                <Button className={"gap-2"} variant={"outline"}>
                    <RefreshCw />
                    Refresh
                </Button>
            </div>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">オーダーID</TableHead>
                            <TableHead className="">時間</TableHead>
                            <TableHead className="">お客様</TableHead>
                            <TableHead className="">Cashier</TableHead>
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
                                <TableCell>{order.cashierId}</TableCell>
                                <TableCell>{order.totalAmount}</TableCell>
                                <TableCell>{order.paymentType}</TableCell>
                                <TableCell>{order.status}</TableCell>
                                <TableCell className="text-right">
                                    <Button onClick={() =>
                                        handleViewOrderDetails(order)
                                    } >
                                        <Eye />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Dialog open={showOrderInvoiceDialog} onOpenChange={setShowOrderInvoiceDialog}>
                <DialogContent className="max-w-4xl">
                    <DialogHeader>
                        <DialogTitle>
                            Order - Invoice
                        </DialogTitle>
                    </DialogHeader>
                    <OrderDetails selectedOrder={selectedOrder} />

                    <DialogFooter>

                        <Button>
                            <Download />
                            Download PDF
                        </Button>

                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Orders