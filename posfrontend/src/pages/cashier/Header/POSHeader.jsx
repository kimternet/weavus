import React from 'react'
import { Button } from '../../../components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar'
import { useSidebar } from '@/context/hook/useSidebar'
import { AlignJustify } from 'lucide-react'

const POSHeader = () => {
    const { setSidebarOpen } = useSidebar();
    return (
        <div className='bg-card border-b px-6 py-4'>
            <div className='flex items-center justify-between'>

                <div>
                    <Button
                        onClick={() => setSidebarOpen(true)}
                    >
                        <AlignJustify />
                    </Button>
                </div>

                <div>
                    <h1 className='text-2xl font-bold text-foreground'>POSシステム</h1>
                    <p className='text-sm text-muted-foreground'>Create new Order</p>
                </div>
                <div className='flex items-center space-x-2'>

                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>


                </div>

            </div>
        </div>
    )
}

export default POSHeader