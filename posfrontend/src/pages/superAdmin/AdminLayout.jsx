import BranchSidebar from '@/pages/branch/sidebar/BranchSidebar';
import React from 'react'

import { Outlet } from 'react-router'
import { LayoutDashboard } from 'lucide-react';
import { Store } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Settings } from 'lucide-react';
import AdminTopbar from './AdminTopbar';
import { Clock } from 'lucide-react';
import { Download } from 'lucide-react';

const navLinks = [
    {
        name: "Dashboard",
        path: "/super-admin/dashboard",
        icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
        name: "Stores",
        path: "/super-admin/stores",
        icon: <Store className="w-5 h-5" />,
    },
    {
        name: "Subscription Plans",
        path: "/super-admin/subscriptions",
        icon: <FileText className="w-5 h-5" />,
    },
    {
        name: "Pending Requests",
        path: "/super-admin/requests",
        icon: <Clock className="w-5 h-5" />,
    },



    {
        name: "Settings",
        path: "/super-admin/settings",
        icon: <Settings className="w-5 h-5" />,
    },
];


const AdminLayout = ({ children }) => {
    return (
        <div className="flex h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">

            <BranchSidebar navItems={navLinks} />

            <div className="flex-1 flex flex-col">

                <AdminTopbar />
                <main className="flex-1 overflow-y-auto p-8 md:p-10 lg:p-12 m-4">
                    {children || <Outlet />}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;