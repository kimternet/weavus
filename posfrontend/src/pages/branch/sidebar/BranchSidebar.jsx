import { Button } from '@/components/ui/button'
import { Close } from '@radix-ui/react-dialog';
import { LayoutDashboard } from 'lucide-react';
import { Package } from 'lucide-react';
import { Users } from 'lucide-react';
import { FileText } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { Settings } from 'lucide-react';
import { UserCircle } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { X } from 'lucide-react';
import { Cross } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router';

const navItems = [
    {
        name: "Dashboard",
        path: "/branch/dashboard",
        icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
        name: "Orders",
        path: "/branch/orders",
        icon: <ShoppingBag className="w-5 h-5" />,
    },
    {
        name: "Transactions",
        path: "/branch/transactions",
        icon: <CreditCard className="w-5 h-5" />,
    },
    {
        name: "Inventory",
        path: "/branch/inventory",
        icon: <CreditCard className="w-5 h-5" />,
    },
    {
        name: "Employees",
        path: "/branch/employees",
        icon: <Users className="w-5 h-5" />,
    },
    {
        name: "Customers",
        path: "/branch/customers",
        icon: <UserCircle className="w-5 h-5" />,
    },
    {
        name: "Reports",
        path: "/branch/reports",
        icon: <FileText className="w-5 h-5" />,
    },
    {
        name: "Settings",
        path: "/branch/settings",
        icon: <Settings className="w-5 h-5" />,
    },
];

const branch = {
    name: "ラーメン店",
    address: "新宿三丁目"
}


const BranchSidebar = () => {
    return (
        <div className="w-64 border-r border-border bg-sidebar p-4 flex flex-col h-full relative">
            <div className="flex justify-center">
                <h1 className="flex items-center gap-3 text-2xl font-bold text-sidebar-foreground">
                    <Package className="w-7 h-7 text-primary" />
                    POS SYSTEM
                </h1>
            </div>

            {branch && (
                <div className="my-6 px-4 py-3 bg-sidebar-accent rounded-lg">
                    <h3 className="font-medium text-sidebar-accent-foreground">
                        {branch.name}
                    </h3>
                    <p className="text-xs text-secondary-foreground/70 mt-1">
                        {branch.address}
                    </p>
                </div>
            )}

            <nav className="space-y-2 flex-1">
                {navItems.map((item) => <Link
                    className={`flex items-center justify-between p-3 rounded-md
                    hover:bg-sidebar-accent transition-colors
                    ${location.pathname === item.path ?
                            "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground"
                        }`}
                    key={item.path} to={item.path}>

                    <div className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.name}</span>
                    </div>
                </Link>)}
            </nav>
            <div>

                <Button className={"w-full py-6"}><LogOut />Logout</Button>
            </div>
        </div >
    );
};

export default BranchSidebar;