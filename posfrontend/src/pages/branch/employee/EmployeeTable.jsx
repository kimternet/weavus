import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import EditEmployeeDialog from './EditEmployeeDialog';
import { useState } from 'react';




const EmployeeTable = () => {

    const [selectedEmployee, setSelectedEmployee] = useState()

    const handleOpenEditDialog = () => {
        setSelectedEmployee({ name: "キム", role: "BRANCH_CASHIER", email: "kim@gmail.com", phone: "123456789", password: "1234" })
    }



    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="">名前</TableHead>
                    <TableHead className="">Role</TableHead>
                    <TableHead className="">Email</TableHead>
                    <TableHead className="">Login Access</TableHead>
                    <TableHead className="">Assign Since</TableHead>
                    <TableHead className="">Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {[{}].map((order, index) => (
                    <TableRow key={index}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.createdAt}</TableCell>
                        <TableCell>{order.fullName}</TableCell>
                        <TableCell>{order.cashierId}</TableCell>
                        <TableCell>{order.totalAmount}</TableCell>
                        <TableCell>{order.paymentType}</TableCell>
                        <TableCell>{order.status}</TableCell>
                        <TableCell className="text-right">
                            <EditEmployeeDialog handleOpenEditDialog={handleOpenEditDialog}
                                selectedEmployee={selectedEmployee} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default EmployeeTable;