import { Button } from '@/components/ui/button'
import { Close } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { Cross } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router';

const Sidebar = ({ navItems, onClose }) => {
    return (
        <div className="w-64 border-r border-border bg-sidebar p-4 flex flex-col h-full relative">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-sidebar-foreground">
                    POS SYSTEM
                </h1>

                <Button size={"icon"} onClick={onClose}>
                    <X />
                </Button>
            </div>
            <nav className="space-y-2 flex-1">
                {navItems.map((item) => <Link onClick={() => { if (onClose) onClose() }}
                    className={`flex items-center justify-between p-3 rounded-md
                    hover:bg-sidebar-accent transition-colors
                    ${location.pathname === item.path ?
                            "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground"
                        }`}
                    key={item.path} to={item.path}>

                    <div className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                </Link>)}
            </nav>
        </div >
    );
};

export default Sidebar