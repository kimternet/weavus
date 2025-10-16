import React from 'react'
// import { getChangeType } from './getChangeType';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';
import { Users } from 'lucide-react';
import { Package } from 'lucide-react';
import { JapaneseYenIcon } from 'lucide-react';


const overview = {

    totalStore: 10,
    pendingStore: 3,
    activeStore: 5,
    blockedStore: 2,

}

const AdminDashboardOverview = () => {

    const kpis = overview
        ? [
            {
                title: "Total Store",
                value: `${overview.totalStore ?? "-"}`,
                icon: <JapaneseYenIcon className="w-8 h-8 text-primary" />,
                description: "from last month"
            },
            {
                title: "Pending Store",
                value: overview.pendingStore ?? "-",
                icon: <ShoppingBag className="w-8 h-8 text-primary" />,
                description: "awaiting approvel"
            },
            {
                title: "Active Store",
                value: overview.activeStore ?? "-",
                icon: <Users className="w-8 h-8 text-primary" />,
                description: "currently operational"

            },
            {
                title: "Block Store",
                value: overview.blockedStore ?? "-",
                icon: <Package className="w-8 h-8 text-primary" />,
                description: "suspend account"

            },
        ] : [];
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

            {
                kpis.map((kpi) => <Card key={kpi.title}>
                    <CardContent className={"p-6"}>

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm font-medium text-gray-500">{kpi.title}</p>
                                <h3 className="text-xl font-bold">{kpi.value}</h3>
                                <p className={`text-xs text-muted-foreground"
                                    }`}
                                >
                                    {kpi.description}
                                </p>

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