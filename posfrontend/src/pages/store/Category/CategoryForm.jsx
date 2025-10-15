import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Label } from 'recharts'

const loading = false;

const CategoryForm = ({ onSubmit, onCancel, initialValues, isEditing }) => {

    const handleSubmit = () => {
        onSubmit();
    };

    return (

        <Formik initialValues={initialValues || {
            name: "",
            description: "",

            onSubmit: { handleSubmit }
        }}>
            {({ isSubmitting }) =>
                <Form className="space-y-4">
                    <div className="space-y-2">
                        <Label>Category Name</Label>
                        <Field as={Input} name="name" placeholder="カテゴリー名を入力してください。" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="description">Description</label>
                        <Field
                            as={Input}
                            id="description"
                            name="description"
                            placeholder="Enter Description"
                        />
                    </div>


                    <div className="flex justify-end gap-2 pt-4">
                        <Button type="button" variant="outline" onClick={onCancel}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting || loading}>
                            {isSubmitting || loading ? (isEditing ? "Updating..." : "Adding...") : (isEditing ? "Update Category" : "Add Category")}
                        </Button>
                    </div>
                </Form>}
        </Formik>
    );
};

export default CategoryForm;