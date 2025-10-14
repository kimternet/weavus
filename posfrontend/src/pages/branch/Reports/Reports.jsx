import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp } from 'lucide-react';
import { Users } from 'lucide-react';
import { FileText } from 'lucide-react';
import { BarChart2 } from 'lucide-react';
import { Calendar } from 'lucide-react'
import React from 'react'
import SalesChart from '../Dashboard/SalesChart';
import PaymentBreakdown from '../Dashboard/PaymentBreakdown';
import PaymentMethodChart from './PaymentMethodChart';
import TopProducts from '../Dashboard/TopProducts';
import CashierPerformance from '../Dashboard/CashierPerformance';


const Reports = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">
                    Reports & Analytics
                </h1>
                <div className="">

                    <Button variant="outline">
                        <Calendar />
                        今日
                    </Button>
                </div>
            </div>
            <Tabs>
                <TabsList>
                    <TabsTrigger value="overview">
                        <BarChart2 />
                        Overview
                    </TabsTrigger>
                    <TabsTrigger value="sales" className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Sales
                    </TabsTrigger>
                    <TabsTrigger value="products" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Products
                    </TabsTrigger>
                    <TabsTrigger value="cashier" className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Cashier Performance
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <SalesChart />
                        </div>

                        <div>
                            <PaymentMethodChart />
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="sales">
                    <SalesChart />
                </TabsContent>

                <TabsContent value="products">
                    <TopProducts />
                </TabsContent>

                <TabsContent value="cashier">
                    <CashierPerformance />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Reports;