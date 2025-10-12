import React from 'react'
import OrderTable from './OrderTable'
import OrderDetailsSection from './OrderDetailsSection'
import ReturnItemSection from './ReturnItemSection'
import { useState } from 'react'
import ReturnReceiptDialog from './ReturnReceiptDialog'

const RefundPage = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showReturnReceiptDialog, setShowReturnReceiptDialog] = useState(false);
    const handleSelectOrder = (order) => setSelectedOrder(order)
    return (
        <div className="h-full flex flex-col">
            <div className="p-4 bg-card border-b">
                <h1 className="text-2xl font-bold">
                    Return/Refund
                </h1>

            </div>

            <div className="overflow-hidden">

                {!selectedOrder ? (
                    <OrderTable handleSelectOrder={handleSelectOrder} />

                ) : (
                    <div className="flex">
                        <OrderDetailsSection selectedOrder={selectedOrder} handleSelectOrder={handleSelectOrder} />
                        <ReturnItemSection selectedOrder={selectedOrder}
                            setShowReturnReceiptDialog={setShowReturnReceiptDialog} />
                    </div>
                )}
            </div>
            {selectedOrder && <ReturnReceiptDialog showReturnReceiptDialog={showReturnReceiptDialog}
                setShowReturnReceiptDialog={setShowReturnReceiptDialog} selectedOrder={selectedOrder} />}
        </div>
    );
};

export default RefundPage