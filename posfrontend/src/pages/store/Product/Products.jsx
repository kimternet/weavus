import React from 'react'

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const Products = () => {

    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

    return (
        <div className="space-y-6">

            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Branch Management</h1>
                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                    <DialogTrigger asChild>
                        <Button><Plus />商品追加</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>商品追加</DialogTitle>
                        </DialogHeader>
                        <div>
                            <ProductForm onCancel={() => setIsAddDialogOpen(false)} />
                        </div>

                    </DialogContent>
                </Dialog>
            </div>
            <Card>
                <CardContent>
                    <ProductTable onEdit={() => setIsEditDialogOpen(true)} />
                </CardContent>
            </Card>

            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Product</DialogTitle>
                    </DialogHeader>
                    <div>
                        <ProductForm isEditing={true} onCancel={() => setIsEditDialogOpen(false)} />
                    </div>

                </DialogContent>
            </Dialog>
        </div>

    );
};

export default Products;