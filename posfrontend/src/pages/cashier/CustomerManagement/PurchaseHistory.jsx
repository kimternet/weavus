import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import React from 'react'
import { ShoppingBag as ShoppingBagIcon, DollarSign as DollarSignIcon, Calendar as CalendarIcon, JapaneseYen as JapaneseYenIcon } from 'lucide-react'
import { Calendar1Icon } from 'lucide-react'
import { BadgeJapaneseYenIcon } from 'lucide-react'


const orders = [

    {
        id: 1, date: "2025-10-01", totalAmount: "2000円",
        status: "完成", createdAt: "2025-10-01 10:00 AM",
    },
    {
        id: 2, date: "2025-10-02", totalAmount: "1000円",
        status: "完成", createdAt: "2025-10-02 10:00 AM",
    },
    {
        id: 3, date: "2025-10-03", totalAmount: "3000円",
        status: "完成", createdAt: "2025-10-03 10:00 AM",
    }

]

// 날짜/상태 헬퍼
const formatDate = (d) => {
    const dt = new Date(d);
    return isNaN(dt) ? d : dt.toLocaleString('ja-JP');
};
const getStatusColor = (s) =>
    s === '完成' || s === 'Completed'
        ? 'bg-emerald-900 text-emerald-50'
        : 'bg-gray-200 text-gray-800';

const PurchaseHistory = () => {
    return (
        <div className="p-4 border-t ">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ShoppingBagIcon className="h-5 w-5" />
                        購入履歴
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <div key={order.id} className="border rounded-lg p-4">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="font-medium">Order #{order.id}</h3>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                            <Calendar1Icon className="h-4 w-4" />
                                            {formatDate(order.createdAt)}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-2 mb-1">
                                            <BadgeJapaneseYenIcon className="h-4 w-4" />
                                            <span className="font-bold">¥{(order.totalAmount ?? 0).toLocaleString('ja-JP')}</span>
                                        </div>
                                        {order.status && (
                                            <Badge className={getStatusColor(order.status)}>
                                                {order.status}
                                            </Badge>
                                        )}
                                    </div>
                                </div>

                                {order.paymentMethod && (
                                    <div className="text-sm text-muted-foreground mb-2">
                                        Payment: {order.paymentMethod}
                                    </div>
                                )}

                                {order.items && order.items.length > 0 && (
                                    <div className="border-t pt-3">
                                        <h4 className="text-sm font-medium mb-2">Items:</h4>
                                        <div className="space-y-1">
                                            {order.items.map((item, index) => (
                                                <div key={index} className="flex justify-between text-sm">
                                                    <span>{item.product.name || item.productName || 'Unknown Product'}</span>
                                                    <span className="text-muted-foreground">
                                                        {item.quantity || 1} × 円{(item.price || 0).toFixed(2)}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PurchaseHistory;