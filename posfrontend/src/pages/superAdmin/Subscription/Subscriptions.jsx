import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Info } from 'lucide-react';
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Edit } from 'lucide-react';
import { Trash } from 'lucide-react';
import { useState } from 'react';
import AddPlanDialog from './AddPlanDialog';
import { Formik, Form } from 'formik';
import EditPlanDialog from './EditPlanDialog';

const stores = [1]

const SubscriptionPlanPage = () => {

    const [openAddNewPlan, setOpenAddNewPlan] = useState(false);
    const [openEditPlan, setOpenEditPlan] = useState(false);

    const handleAccept = () => {
        console.log("handle accept")
    };

    const handleReject = () => {
        console.log("handle reject")
    };


    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">

                <h1 className="text-3xl font-bold tracking-tight">Subscriptions Plan</h1>

                <div className="flex gap-2">
                    <Button onClick={() => setOpenAddNewPlan(true)}>
                        <Plus />Add New Plan
                    </Button>

                </div>
            </div>

            <Card>

                <CardContent>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="">Name</TableHead>
                                <TableHead className="">price</TableHead>
                                <TableHead className="">Billing Cycle</TableHead>
                                <TableHead className="">Branches</TableHead>
                                <TableHead className="">Users</TableHead>
                                <TableHead className="">Products</TableHead>
                                <TableHead className="">status</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {stores.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        {item.sku}
                                    </TableCell>
                                    <TableCell>
                                        {item.name}
                                    </TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell className="">{item.category}</TableCell>
                                    <TableCell className="">{item.category}</TableCell>
                                    <TableCell className="">{item.category}</TableCell>
                                    <TableCell className="">{item.category}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end items-center gap-2">
                                            <Button onClick={() => setOpenEditPlan(true)} variant={"outline"} className={"bg-green-400"}>

                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button onClick={handleReject} variant={"outline"} className={"bg-red-300"}>

                                                <Trash className="w-4 h-4" />
                                            </Button>
                                        </div>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </CardContent>

            </Card>

            <AddPlanDialog open={openAddNewPlan} onOpenChange={setOpenAddNewPlan} />

            <EditPlanDialog open={openEditPlan} onOpenChange={setOpenEditPlan} />
        </div>
    );
};

export default SubscriptionPlanPage;