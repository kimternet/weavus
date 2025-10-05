import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react'
import CustomerForm from './CustomerForm';

const customers = [
    {
        id: 1,
        fullName: "キム",
        phone: "010-1234-5678",
        email: "kim@gmail.com"
    },
    {
        id: 2,
        fullName: "田中",
        phone: "080-1234-5678",
        email: "tanaka@gmail.com"
    },
    {
        id: 3,
        fullName: "山田",
        phone: "090-1234-5678",
        email: "yamada@gmail.com",
    },
];

const CustomerDialog = ({ showCustomerDialog, setShowCustomerDialog }) => {

    const [showCustomerForm, setShowCustomerForm] = React.useState(false);

    const handleSelectCustomer = (customer) => {
        console.log("お客様を選択:", customer);
        setShowCustomerDialog(false);
    };
    return (
        <Dialog
            open={showCustomerDialog}
            onOpenChange={setShowCustomerDialog}
        >
            <DialogContent className={"max-w-2xl"}>

                <DialogHeader>
                    <DialogTitle>
                        お客様を選択
                    </DialogTitle>
                </DialogHeader>

                <div className="mb-4">
                    <Input placeholder="検索" />
                </div>

                <div className="max-h-96 overflow-y-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px]">Name</TableHead>
                                <TableHead className="w-[150px]">Phone</TableHead>
                                <TableHead className="w-[150px]">Email</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {customers.map((customer) => (
                                <TableRow key={customer.id}>
                                    <TableCell>{customer.fullName}</TableCell>
                                    <TableCell>{customer.phone}</TableCell>
                                    <TableCell>{customer.email}</TableCell>
                                    <TableCell>{" "}<Button
                                        variant="outline"
                                        className="w-full"
                                        onClick={() => { handleSelectCustomer(customer) }}
                                    >
                                        選択
                                    </Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <CustomerForm
                    showCustomerForm={showCustomerForm}
                    setShowCustomerForm={setShowCustomerForm}
                />

                <DialogFooter>
                    <Button onClick={() => {
                        setShowCustomerForm(true);
                        console.log("Open Customer Form")
                    }}> 新規追加</Button>
                </DialogFooter>

            </DialogContent>
        </Dialog >
    );
};

export default CustomerDialog;