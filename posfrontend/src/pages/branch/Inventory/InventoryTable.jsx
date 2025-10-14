import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';

const inventories = [
    {

        name: "ラーメン",
        quantity: 34,
        category: "ラーメン",
        sku: "味噌ラーメン",
    },
];

const InventoryTable = ({ setIsEditDialogOpen }) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="">SKU</TableHead>
                    <TableHead className="">商品名</TableHead>
                    <TableHead className="">Quantity</TableHead>
                    <TableHead className="text-right">Category</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {inventories.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>
                            {item.sku}
                        </TableCell>
                        <TableCell>
                            {item.name}
                        </TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell className="text-right">{item.category}</TableCell>
                        <TableCell className="text-right">
                            <Button onClick={() => setIsEditDialogOpen(true)} variant={"outline"} size={"icon"}>
                                <Edit />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default InventoryTable;