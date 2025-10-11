import React from 'react'
import OrderTable from './OrderTable'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import OrderDetails from './OrderDetails/OrderDetails'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { useState } from 'react'

const OrderHistory = () => {

    const [showOrderInvoiceDialog, setShowOrderInvoiceDialog] = useState(false);

    return (
        <div className="h-full flex flex-col">

            <div className="flex-1 p-4 overflow-auto">

                <OrderTable setShowOrderInvoiceDialog={setShowOrderInvoiceDialog} />

            </div>

            <Dialog open={showOrderInvoiceDialog} onOpenChange={setShowOrderInvoiceDialog}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>
                            Order - Invoice
                        </DialogTitle>
                    </DialogHeader>
                    <OrderDetails />

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

export default OrderHistory