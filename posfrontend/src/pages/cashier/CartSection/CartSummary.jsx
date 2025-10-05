import { Separator } from '@/components/ui/separator'
import React from 'react'

const CartSummary = () => {
    return (
        <div className='border-t bg-muted p-4'>

            <div className='space-y-2 text-sm'>
                <div className='flex justify-between'>
                    <span>小計</span>
                    <span>900 円</span>
                </div>
                <div className='flex justify-between'>
                    <span>税額</span>
                    <span>50円</span>
                </div>
                <Separator />
                <div className='flex justify-between'>
                    <span>合計</span>
                    <span>950 円</span>
                </div>

            </div>

        </div>
    )
}

export default CartSummary