import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Label } from 'recharts'

const loading = false;

const BranchForm = ({ onSubmit, onCancel, initialValues, isEditing }) => {

    const handleSubmit = () => {
        onSubmit();
    };

    return (

        <Formik initialValues={initialValues || {
            name: "",
            address: "",
            "manager": "",
            phone: "",
            onSubmit: { handleSubmit }
        }}>
            {({ isSubmitting }) =>
                <Form className="space-y-4">
                    <div className="space-y-2">
                        <Label>Branch Name</Label>
                        <Field as={Input} name="name" placeholder="ブランチ名前を入力してください。" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="address">Address</label>
                        <Field
                            as={Input}
                            id="address"
                            name="address"
                            placeholder="住所を入力してください。"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="manager">Manager Name</label>
                        <Field
                            as={Input}
                            id="manager"
                            name="manager"
                            placeholder="マネージャー名前を入力してください。"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone">Phone Number</label>
                        <Field
                            as={Input}
                            id="phone"
                            name="phone"
                            placeholder="携帯電話を入力してください。"
                        />
                    </div>

                    <div className="flex justify-end gap-2 pt-4">
                        <Button type="button" variant="outline" onClick={onCancel}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting || loading}>
                            {isSubmitting || loading ? (isEditing ? "Updating..." : "Adding...") : (isEditing ? "Update Branch" : "Add Branch")}
                        </Button>
                    </div>
                </Form>}
        </Formik>
    );
};

export default BranchForm;