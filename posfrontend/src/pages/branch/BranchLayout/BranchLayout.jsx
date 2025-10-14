import React from 'react'
import BranchSidebar from '../sidebar/BranchSidebar'
import BranchTopbar from '../topbar/BranchTopbar'
import { Outlet } from 'react-router'
import { LayoutDashboard } from 'lucide-react'
import { ShoppingBag } from 'lucide-react'
import { CreditCard } from 'lucide-react'
import { Users } from 'lucide-react'
import { UserCircle } from 'lucide-react'
import { FileText } from 'lucide-react'
import { Settings } from 'lucide-react'


const branch = {
    name: "ラーメン店",
    address: "新宿三丁目"
}

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

const BranchLayout = ({ children }) => {
    return (
        <div className="flex h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">

            <BranchSidebar branch={branch} navItems={navItems} />

            <div className="flex-1 flex flex-col">

                <BranchTopbar />
                <main className="flex-1 overflow-y-auto p-8 md:p-10 lg:p-12 m-4">
                    {children || <Outlet />}
                </main>
            </div>
        </div>
    );
};

export default BranchLayout;