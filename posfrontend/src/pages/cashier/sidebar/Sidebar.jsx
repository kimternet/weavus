import { Button } from '@/components/ui/button'
import { getBranchById } from '@/ReduxToolkit/features/Branch/branchThunk';
import { Close } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { Cross } from 'lucide-react'
import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router';


// const branch = { name: "ラーメン店", address: "西新宿五丁目" };
const Sidebar = ({ navItems, onClose }) => {
    const { userProfile } = useSelector(state => state.user)
    const { branch } = useSelector(state => state.branch)
    const dispatch = useDispatch();

    useEffect(() => {

        if (userProfile?.branchId) {
            dispatch(getBranchById({ id: userProfile.branchId }))
        }

    }, [userProfile, dispatch])


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

            {branch && (
                <div className="mt-6 px-4 py-3 bg-sidebar-accent rounded-lg">
                    <h3 className="font-medium text-sidebar-accent-foreground">
                        {branch?.name}
                    </h3>
                    <p className="text-xs text-secondary-foreground/70 mt-1">
                        {branch?.address}
                    </p>
                </div>
            )}
        </div >
    );
};

export default Sidebar