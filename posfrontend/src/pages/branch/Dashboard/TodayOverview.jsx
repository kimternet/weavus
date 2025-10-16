import React from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';
import { Users } from 'lucide-react';
import { Package } from 'lucide-react';
import { JapaneseYenIcon } from 'lucide-react';

const overview = {
    totalSales: 5678,
    salesGrowth: 34,
    ordersToday: 39,
    orderGrowth: 40,
    activeCashiers: 12,
    cashierGrowth: 30,
    lowStockItems: 9,
    lowStockGrowth: 20
}

const AdminDashboardOverview = () => {
    const kpis = overview
        ? [
            {
                title: "Today's Sales",
                value: `¥${overview.totalSales?.toLocaleString() ?? "-"}`,
                icon: <JapaneseYenIcon className="w-8 h-8 text-primary" />,
            },
            {
                title: "Orders Today",
                value: overview.ordersToday ?? "-",
                icon: <ShoppingBag className="w-8 h-8 text-primary" />,
            },
            {
                title: "Active Cashiers",
                value: overview.activeCashiers ?? "-",
                icon: <Users className="w-8 h-8 text-primary" />,
            },
            {
                title: "Low Stock Items",
                value: overview.lowStockItems ?? "-",
                icon: <Package className="w-8 h-8 text-primary" />,
            },
        ] : [];

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {kpis.map((kpi) => <Card key={kpi.title}>
                <CardContent className={"p-6"}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-500">{kpi.title}</p>
                            <h3 className="text-xl font-bold">{kpi.value}</h3>
                            {/* ✅ change 관련 코드 완전히 제거 */}
                        </div>
                        <div className="p-3 bg-primary/10 rounded-full">
                            {kpi.icon}
                        </div>
                    </div>
                </CardContent>
            </Card>
            )}
        </div>
    );
};

export default AdminDashboardOverview;