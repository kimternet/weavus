import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

import { Bell } from 'lucide-react';
import React from 'react'


const branch = {
    name: "ラーメン店",
    address: "新宿三丁目"
}

const userProfile = {

    name: "キム",
    email: "kk@gmail.com"

}


const BranchTopbar = () => {
    return (
        <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
            <div>
                <h1>{branch ? branch.name : "Branch Dashboard"}</h1>
                <p>
                    {new Date().toLocaleDateString("en-JP", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })}
                </p>
            </div>

            <div className="flex items-center gap-4">

                <Button>
                    <Bell className="h-5 w-5" />
                </Button>

                <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                        <User />
                    </div>
                    <div className="hidden md:block">

                        <p className="text-sm font-medium text-foreground">{userProfile.name}</p>
                        <p className="text-xs text-muted-foreground">{userProfile.email}</p>

                    </div>
                </div>
            </div>

        </header>
    );
};

export default BranchTopbar;