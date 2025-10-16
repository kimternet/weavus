import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ErrorMessage, Field, Form } from 'formik';
import React from 'react'
import FeaturesSwitchGrid from './FeaturesSwitchGrid';
import ExtraFeaturesList from './ExtraFeaturesList';
import { Button } from '@/components/ui/button';


const BILLING_CYCLES = [
    { label: 'Monthly', value: 'MONTHLY' },
    { label: 'Yearly', value: 'YEARLY' },
];



const PlanForm = ({ values, isSubmitting, setFieldValue }) => {

    const handleFeatureSwitch = (key, value) => {
        setFieldValue(key, value);
    };

    const handleExtraFeatureChange = (idx, value) => {
        const arr = [...values.extraFeatures];
        arr[idx] = value;
        setFieldValue("extraFeatures", arr);
    };

    const handleRemoveExtraFeature = (idx, value) => {
        const arr = value.extraFeatures.filter((_, i) => i !== idx);
        setFieldValue("extraFeatures", arr.length ? arr : [""]);
    };

    const handleAddExtraFeature = () => {
        setFieldValue("extraFeatures", [...values.extraFeatures, ""]);
    };

    return (
        <Form className="space-y-4">

            {/* name of plan */}
            <div>
                <label className="block font-medium" htmlFor="plan-name">Name</label>
                <Field as={Input} id="plan-name" name="name" placeholder="Plan name" />
                <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
            </div>

            {/* Description */}
            <div>
                <label className="block font-medium" htmlFor="plan-description">Description</label>
                <Field as={Input} id="plan-description" name="description" placeholder="Description" />
            </div>

            {/* Price & Billing Cycle */}
            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="block font-medium" htmlFor="plan-price">Price (¥)</label>
                    <Field as={Input} id="plan-price" name="price" type="number" min="0" placeholder="Price" />
                </div>
                <div className="flex-1">
                    <label className="block font-medium" htmlFor="plan-billing-cycle">Billing Cycle</label>
                    <Field name="billingCycle">
                        {({ field }) => (
                            <Select value={field.value} onValueChange={val => setFieldValue('billingCycle', val)}>
                                <SelectTrigger className="w-full" id="plan-billing-cycle">
                                    <SelectValue placeholder="Select cycle" />
                                </SelectTrigger>
                                <SelectContent>
                                    {BILLING_CYCLES.map(opt => (
                                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    </Field>

                </div>
            </div>

            {/* Branches, Users, Products */}
            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="block font-medium" htmlFor="plan-branches">Branches</label>
                    <Field as={Input} id="plan-branches" name="maxBranches" type="number" placeholder="Branches" /> {/*min="1"*/}
                </div>

                <div className="flex-1">
                    <label className="block font-medium" htmlFor="plan-users">Users</label>
                    <Field as={Input} id="plan-users" name="maxUsers" type="number" min="1" placeholder="Users" />
                </div>

                <div className="flex-1">
                    <label className="block font-medium" htmlFor="plan-products">Products</label>
                    <Field as={Input} id="plan-products" name="maxProducts" type="number" min="1" placeholder="Products" />
                </div>
            </div>

            {/* Features Switches */}
            <div>
                <label className="block font-medium mb-2">Features</label>
                <FeaturesSwitchGrid handleFeatureSwitch={handleFeatureSwitch} />
            </div>

            {/* Extra Features */}
            <div>
                <label className="block font-medium mb-1">Extra Features</label>
                <ExtraFeaturesList
                    values={values}
                    handleExtraFeatureChange={handleExtraFeatureChange}
                    handleRemoveExtraFeature={handleRemoveExtraFeature}
                    handleAddExtraFeature={handleAddExtraFeature}
                />
            </div>
            <div>
                <Button type={"submit"} >Submit</Button>

            </div>
        </Form>
    );
};

export default PlanForm;