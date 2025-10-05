import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Banknote } from 'lucide-react'
import { QrCode } from 'lucide-react'
import { CreditCard } from 'lucide-react'
import { DollarSignIcon } from 'lucide-react'
import React from 'react'

const paymentMethods = [
    { id: 1, name: "クレジットカード", key: "CARD", icon: CreditCard },
    { id: 2, name: "PayPay", key: "UPI", icon: QrCode },
    { id: 3, name: "現金", key: "CASH", icon: Banknote },
]

const PaymentDialog = ({ showPaymentDialog, setShowPaymentDialog }) => {

    const [paymentMethod, setPaymentMethod] = React.useState("CARD");

    return (

        <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        お支払い
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <div className="text-center">
                        <h1 className="text-lg font-bold text-purple-500 dark:text-purple-200">
                            {900}円
                            <p
                                className="text-sm text-muted-foreground">支払額
                            </p>
                        </h1>
                    </div>
                    <div className="space-y-5">
                        {paymentMethods.map((method) => {
                            const Icon = method.icon
                            return (
                                <Button
                                    onClick={() => setPaymentMethod(method.key)}
                                    variant={paymentMethod === method.key ? 'default' : 'outline'}
                                    key={method.id}
                                    className="w-full justify-start gap-2 text-left"
                                >
                                    <Icon className="w-4 h-4 mr-2 shrink-0" />
                                    <span>{method.name}</span>
                                </Button>
                            )
                        })}
                    </div>
                </div>
            </DialogContent>
        </Dialog >
    )
}

export default PaymentDialog