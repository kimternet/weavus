import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Edit } from 'lucide-react';
import { User } from 'lucide-react'
import React from 'react'
import CustomerDialog from './CustomerDialog';


let selectedCustomer = {
    fullName: "キム",
    phone: "123-456-7890"
};

selectedCustomer = null;

const CustomerSection = () => {

    const [showCustomerDialog, setShowCustomerDialog] = React.useState(false);


    return (
        <div className="p-4 border-b">
            <h2 className="text-lg font-semibold mb-3 flex items-center">
                <User className="w-5 h-5 mr-2" />お客様
            </h2>

            {selectedCustomer ? (
                <Card className={"border-purple-300 bg-purple-50 dark:bg-purple-950 dark:border-y-purple-800"}>

                    <CardContent className={"p-3 flex items-center justify-between gap-5"}>
                        <div>

                            <h3 className="font-medium text-purple-800 dark:text-purple-200">
                                {selectedCustomer.fullName}
                            </h3>
                            <p className="text-sm text-purple-600 dark:text-purple-300">
                                {selectedCustomer.phone}
                            </p>
                        </div>
                        <div>

                            <Button variant={"outline"}
                                // size={"small"}
                                className={"mt-2 w-full"}>
                                <Edit />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ) : (
                <div>
                    <Button
                        onClick={() => setShowCustomerDialog(true)}
                        variant={"outline"}
                        className={"w-full py-5"}
                    >
                        お客様を選択
                    </Button>
                </div>
            )}

            <CustomerDialog
                showCustomerDialog={showCustomerDialog}
                setShowCustomerDialog={setShowCustomerDialog}
            />
        </div>
    );
};
export default CustomerSection