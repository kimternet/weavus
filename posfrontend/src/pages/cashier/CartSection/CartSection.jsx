import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { Pause } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import HeldOrderDialog from './HeldOrderDialog';

const cartItems = [

    {
        name: "ラーメン",
        sku: "味噌ラーメン",
        quantity: 1,
        sellingPrice: 450
    },
    {
        name: "ラーメン",
        sku: "味噌ラーメン",
        quantity: 1,
        sellingPrice: 450
    },
    {
        name: "ラーメン",
        sku: "味噌ラーメン",
        quantity: 1,
        sellingPrice: 450
    }
];

const CartSection = () => {
    const [showHeldOrdersDialog, setShowHeldOrdersDialog] = React.useState(false);
    return (
        <div className='border-r w-2/5 flex flex-col bg-card'>
            <div className='p-4 border-b bg-muted'>
                <div className='flex items-center justify-between'>

                    <h2 className='text-lg font-semibold flex items-center'>
                        <ShoppingCart />カート({3})追加
                    </h2>

                    <div className="flex space-x-2">
                        <Button onClick={() => setShowHeldOrdersDialog(true)}
                            variant={"outline"} className="" size={"sm"}>
                            <Pause className="w-4 h-4 mr-1" />
                            保留にする
                        </Button>
                        <Button variant={"outline"} className="" size={"sm"}>
                            <Trash2 className="w-4 h-4 mr-1" />
                            取り消し
                        </Button>
                    </div>
                </div>
            </div>
            <div className="p-4 space-y-3">
                {cartItems.map((item, index) => (
                    <CartItem item={item} key={index} />
                ))}
            </div>
            <CartSummary />
            <HeldOrderDialog showHeldOrdersDialog={showHeldOrdersDialog}
                setShowHeldOrdersDialog={setShowHeldOrdersDialog} />
        </div>
    );
}
export default CartSection