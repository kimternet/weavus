import React from 'react'
import { Button } from '../../../components/ui/button'
import { TextAlignJustify } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar'

const POSHeader = () => {
    return (
        <div className='bg-card border-b px-6 py-4'>
            <div className='flex items-center justify-between'>

                <div>
                    <Button>
                        <TextAlignJustify />
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