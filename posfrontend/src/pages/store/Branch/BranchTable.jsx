import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Trash } from 'lucide-react'
import { Edit } from 'lucide-react'
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

const BranchTable = ({ onEdit }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">最近のオーダー</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Branch Name</TableHead>
                        <TableHead className="">Address</TableHead>
                        <TableHead className="">Manager</TableHead>
                        <TableHead className="">Phone</TableHead>
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
                            <TableCell className="text-right">

                                <div className="flex gap-2 items-center justify-end">
                                    <Button variant={"outline"}
                                        onClick={
                                            () => onEdit(order)
                                        }
                                    >
                                        <Edit />
                                    </Button>

                                    <Button variant={"outline"}
                                        onClick={
                                            () => () => onEdit(order)
                                        }
                                    >
                                        <Trash />
                                    </Button>
                                </div>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default BranchTable;
