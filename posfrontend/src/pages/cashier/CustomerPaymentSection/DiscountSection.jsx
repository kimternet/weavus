import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { TicketIcon } from 'lucide-react';
import { User } from 'lucide-react'
import React from 'react'

const DiscountSection = () => {

    const [discount, setDiscount] = React.useState({ type: "percentage", value: 0 });

    const handleDiscountChange = (e) => {
        const value = e.target.value;
        setDiscount({ ...discount, value });
    }

    return (
        <div className="p-4 border-b">
            <h2 className="text-lg font-semibold mb-3 flex items-center">
                <TicketIcon className="w-5 h-5 mr-2" />割引クーポン
            </h2>
            <div className="space-y-3">
                <Input
                    placeholder="割引クーポンコードを入力してください。"
                    type="number"
                    value={discount.value}
                    onChange={handleDiscountChange}
                />
                <div className="flex gap-5">
                    <Button className={"flex-1"} onClick={() => setDiscount({
                        ...discount,
                        type: "percentage"
                    })} variant={discount.type === "percentage" ?
                        "default" : "outline"}>%</Button>
                    <Button className={"flex-1"} onClick={() => setDiscount({
                        ...discount,
                        type: "fixed"
                    })} variant={discount.type === "fixed" ?
                        "default" : "outline"}>円</Button>

                </div>
            </div>
        </div>
    );
};

export default DiscountSection;