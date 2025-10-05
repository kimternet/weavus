import { Button } from '@/components/ui/button'
import { Pause } from 'lucide-react'
import { CreditCard } from 'lucide-react'
import React from 'react'
import PaymentDialog from './PaymentDialog'

const cartItems = [1]

const PaymentSection = () => {

    const [showPaymentDialog, setShowPaymentDialog] = React.useState(false);


    return (

        <div className="flex flex-1 flex-col p-4 justify-end">

            <div className="space-y-4">

                <div className="text-center">

                    <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-200">
                        {899}円
                    </h1>

                    <p className="text-sm text-muted-foreground">合計金額</p>

                </div>

                <div className="space-y-3">
                    <div className="mb-3">
                        <Button onClick={() => setShowPaymentDialog(true)} disabled={cartItems.length === 0} className={"w-full py-3 text-lg font-semibold"}>
                            <CreditCard className="w-5 h-5 mr-2" />
                            お支払いへ進む
                        </Button>
                    </div>
                    <div>
                        <Button variant={"outline"} disabled={cartItems.length === 0} className={"w-full py-3 text-lg font-semibold"}>
                            <Pause className="w-5 h-5 mr-2" />
                            注文保留
                        </Button>
                    </div>

                </div>

            </div>
            <PaymentDialog
                showPaymentDialog={showPaymentDialog}
                setShowPaymentDialog={setShowPaymentDialog}
            />

        </div>
    )
}

export default PaymentSection