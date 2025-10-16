import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Formik } from 'formik';
import React from 'react'
import PlanForm from './PlanForm';

const EditPlanDialog = ({ open, onOpenChange, onSuccess }) => {

    const initialValues = {
        name: 'text',
        description: 'test1',
        price: 11,
        billingCycle: 11,
        maxBranches: 1,
        maxUsers: 11,
        maxProducts: 11,
        enableAdvancedReports: false,
        enableInventory: false,
        enableIntegrations: false,
        enableEcommerce: false,
        enableInvoiceBranding: false,
        prioritySupport: false,
        enableMultiLocation: false,
        extraFeatures: ['test'],
    };

    const handleSubmit = (values) => {
        console.log("handle update", values);
    };
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Subscription Plan</DialogTitle>
                </DialogHeader>
                <div className="overflow-y-auto max-h-[65vh] pr:5">
                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                        {(props) => <PlanForm {...props} />}
                    </Formik>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default EditPlanDialog;