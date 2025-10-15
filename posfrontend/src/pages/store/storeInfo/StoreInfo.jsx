import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Edit } from 'lucide-react'
import React from 'react'
import BasicInfo from './BasicInfo'
import ContactInfo from './ContactInfo'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useState } from 'react'
import EditStoreForm from './EditStoreForm'
import { TruckElectric } from 'lucide-react'
import { getInitialValues } from './formUtil'

const storeData = {
    brand: "ラーメン",
    description: "shop in minute",
    storeType: "Retail store",
    contact: {
        phone: "+82 1012312313",
        address: "東京都千代田区三丁目",
        email: "sdaf@gmail.com"

    }

}


const StoreInfo = () => {

    const [isOpenEditStoreDialog, setIsOpenEditStoreDialog] = useState(false);

    const onSubmit = () => {
        setIsOpenEditStoreDialog(false)
    }

    const onCancel = () => {
        setIsOpenEditStoreDialog(false)
    }


    return (

        <>
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>Store Information</CardTitle>
                        <Button onClick={() => setIsOpenEditStoreDialog(true)} variant={"outline"} size={"sm"}>
                            {""}
                            <Edit />Edit Details
                        </Button>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <BasicInfo storeData={storeData} />
                        <ContactInfo storeData={storeData} />
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-200">

                        <p className="text-sm text-muted-foreground">
                            Store created on {new Date().toLocaleString()}
                        </p>

                    </div>
                </CardContent>
            </Card>
            <Dialog
                open={isOpenEditStoreDialog}
                onOpenChange={setIsOpenEditStoreDialog}
            >
                <DialogContent className={"sm:max-w-[600px] max-h-[90vh] overflow-y-auto"}>
                    <DialogHeader>
                        <DialogTitle>Edit Store Details</DialogTitle>
                    </DialogHeader>

                    <EditStoreForm onSubmit={onSubmit} onCancel={onCancel} initialValues={getInitialValues(storeData)} />
                </DialogContent>
            </Dialog>
        </>
    );
};

export default StoreInfo;