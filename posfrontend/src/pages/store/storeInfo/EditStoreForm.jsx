import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";


const loading = false;

const STORE_TYPE_OPTIONS = [
    { value: "Retail Store", label: "Retail Store" },
    { value: "Supermarket", label: "Supermarket" },
    { value: "Mall", label: "Mall" },
    { value: "Department Store", label: "Department Store" },
    { value: "Convenience Store", label: "Convenience Store" },
    { value: "Specialty Store", label: "Specialty Store" },
];


const EditStoreForm = ({
    initialValues,
    onSubmit,
    onCancel,
    isEditing = false,
}) => {


    const handleSubmit = async (values) => {
        console.log("values", values)
        onSubmit();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            enableReinitialize
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form className="space-y-4 py-2 pr-2">
                    <div className="space-y-2">
                        <Label htmlFor="brand" className="block text-sm font-medium">
                            ストアー名
                        </Label>
                        <Field
                            as={Input}
                            id="brand"
                            name="brand"
                            placeholder="Enter store name"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="storeType" className="block text-sm font-medium">
                            ストアータイプ
                        </Label>
                        <Field name="storeType">
                            {({ field }) => (
                                <Select
                                    value={field.value}
                                    onValueChange={(value) =>
                                        setFieldValue("storeType", value)
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Store Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {STORE_TYPE_OPTIONS.map((type) => (
                                            <SelectItem
                                                key={type.value}
                                                value={type.value}
                                            >
                                                {type.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        </Field>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description" className="block text-sm font-medium">
                            Description
                        </Label>
                        <Field
                            as={Input}
                            id="description"
                            name="description"
                            placeholder="Enter description"
                        />
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-lg font-medium">Contact Information</h1>

                        <div className="space-y-2">
                            <Label htmlFor="contact.address">Address *</Label>
                            <Field
                                as={Textarea}
                                id="contact.address"
                                name="contact.address"
                                placeholder="Enter store address"
                                rows={2}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="contact.phone">Phone Number *</Label>
                            <Field
                                as={Input}
                                id="contact.phone"
                                name="contact.phone"
                                placeholder="Enter phone number"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="contact.email">Email Address *</Label>
                            <Field
                                as={Input}
                                id="contact.email"
                                name="contact.email"
                                type="email"
                                placeholder="Enter email address"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        {onCancel && (
                            <Button type="button" variant="outline" onClick={onCancel}>
                                Cancel
                            </Button>
                        )}
                        <Button
                            type="submit"
                            className="bg-emerald-600 hover:bg-emerald-700"
                            disabled={isSubmitting || loading}
                        >
                            Update Store Details
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default EditStoreForm;