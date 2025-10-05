import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Form, Formik } from 'formik'
import React from 'react'

const CustomerForm = ({ showCustomerForm, setShowCustomerForm }) => {

    const initialValues = {
        fullName: "",
        phone: "",
        email: "",
        address: "",
    }
    return (
        <Dialog open={showCustomerForm} onOpenChange={setShowCustomerForm}>
            <DialogContent className={"max-w-md"}>

                <DialogHeader>
                    <DialogTitle>
                        新規追加
                    </DialogTitle>
                </DialogHeader>

                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        console.log("フォーム提出:", values);
                    }}
                >
                    {({ values, handleChange, handleBlur }) => (
                        <Form className="space-y-5">
                            <Input
                                name="fullName"
                                placeholder="Full Name"
                                value={values.fullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Input
                                name="fullName"
                                placeholder="Full Name"
                                value={values.fullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Input
                                name="fullName"
                                placeholder="Full Name"
                                value={values.fullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Button type="submit">新規追加</Button>
                        </Form>
                    )}
                </Formik>
            </DialogContent>
        </Dialog>
    );
};

export default CustomerForm