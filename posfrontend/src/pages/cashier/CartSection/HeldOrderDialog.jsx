import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { Play } from 'lucide-react';
import React from 'react'


const heldOrders = [
    {
        id: "1234",
        items: [1, 1, 1, 1],
        timeStamp: "2025-10-01T12:00:00Z",
    },
    {
        id: "1234",
        items: [1, 1, 1, 1],
        timeStamp: "2025-10-01T12:00:00Z",
    },
];

const HeldOrderDialog = ({ showHeldOrdersDialog, setShowHeldOrdersDialog }) => {

    const handleResumeOrder = (order) => { console.log("再開オーダー:", order); }
    return (
        <Dialog open={showHeldOrdersDialog} onOpenChange={setShowHeldOrdersDialog}>
            <DialogContent>
                <DialogHeader>
                    オーダー
                </DialogHeader>

                <div className='space-y-3'>
                    {heldOrders.map((order) => (
                        <Card key={order.id}>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-medium">オーダーID:{order.id}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            商品: {order.items.length}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {/* {order.items.length} 商品ー */}
                                            時間:{" "} {new Date(order.timeStamp).toLocaleString()}
                                        </p>
                                    </div>{" "}
                                    <Button size={"sm"} onClick={() => handleResumeOrder(order)}>
                                        <Play className="w-4 h-4 mr-1" />再開する
                                    </Button>
                                </div>

                            </CardContent>
                        </Card>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}
export default HeldOrderDialog