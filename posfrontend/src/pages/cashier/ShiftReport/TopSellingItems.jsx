import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const shiftData = {
    topSellingproducts: [
        {
            id: "2",
            name: "味噌ラーメン",
            sellingPrice: 450,
            quantity: 5,
        },
        {
            id: "3",
            name: "塩ラーメン",
            sellingPrice: 550,
            quantity: 3,
        }
    ]
}
const TopSellingItems = () => {
    return (
        <Card>
            <CardContent>
                <h2 className="text-xl font-semibold mb-4">人気メニュー</h2>
                <div className="space-y-3">

                    {shiftData.topSellingproducts.map((product, index) =>
                        <div key={product.id} className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-sm font-medium">
                                {index + 1}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <span>{product.name}</span>
                                    <span>¥{product.sellingPrice}</span>
                                </div>
                                <div className="flex justify-between text-sm text-muted-foreground">
                                    <span>{product.quantity}units sold</span>
                                </div>
                            </div>
                        </div>)}
                </div>
            </CardContent>
        </Card>
    );
};

export default TopSellingItems