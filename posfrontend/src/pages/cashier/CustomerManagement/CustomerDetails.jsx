import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { UserIcon } from 'lucide-react'
import { StarIcon } from 'lucide-react'
import { PlusIcon } from 'lucide-react'
import React from 'react'

const CustomerDetails = ({ customer }) => {

    return (
        <div className="p-4">

            <div className="flex justify-between items-start mb-6">

                <div>
                    <h2>{customer.fullName}</h2>
                    <p className="text-sm text-muted-foreground">{customer.email}</p>
                    <p className="text-sm text-muted-foreground">{customer.phone}</p>
                </div>

                <Button>
                    <PlusIcon className="h-4 w-4 mr-1" />ポイント追加
                </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>ローヤルティポイント</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2">
                            <StarIcon className="h-4 w-4 mr-1 text-shadow-indigo-200" />
                            <span>{customer.loyaltyPoints}</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>トータルオーダー</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2">
                            <StarIcon className="h-4 w-4 mr-1 text-shadow-indigo-200" />
                            <span>{customer.totalOrders}</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>トータルお支払い</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2">
                            <StarIcon className="h-4 w-4 mr-1 text-shadow-indigo-200" />
                            <span>{customer.totalSpent}</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            購入履歴
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg font-bold text-muted-foreground">
                            {customer.averageOrderValue}円
                        </p>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}

export default CustomerDetails