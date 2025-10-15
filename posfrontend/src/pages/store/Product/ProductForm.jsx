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


const loading = false;
const categoryList = [{ id: "4", name: "ramen" }]
const ProductForm = ({
    initialValues,
    onSubmit,
    onCancel,
    isEditing = false,
}) => {




    const defaultValues = {
        name: "",
        sku: "",
        description: "",
        mrp: "",
        sellingPrice: "",
        brand: "",
        categoryId: "",
        color: "",
        image: null,
        ...initialValues,
    };

    const handleSubmit = async (values) => {
        console.log("values", values)
        onSubmit();

    };


    // const handleImageChange = async (e, setFieldValue) => {
    //     const file = e.target.files[0];
    //     setUploadingImage(true);
    //     const image = await uploadToCloudinary(file);
    //     setFieldValue("image", image);
    //     setUploadingImage(false)
    // };

    return (
        <Formik
            initialValues={defaultValues}

            onSubmit={handleSubmit}
            enableReinitialize
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form className="space-y-4 py-2 pr-2">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                            商品名前
                        </label>
                        <Field
                            as={Input}
                            id="name"
                            name="name"
                            placeholder="Enter product name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="sku" className="block text-sm font-medium">
                            SKU(在庫管理)
                        </label>
                        <Field
                            as={Input}
                            id="sku"
                            name="sku"
                            placeholder="Enter SKU"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="brand" className="block text-sm font-medium">
                            ブランド
                        </label>
                        <Field
                            as={Input}
                            id="brand"
                            name="brand"
                            placeholder="Enter brand"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="categoryId" className="block text-sm font-medium">
                                カテゴリー
                            </label>
                            <Field name="categoryId">
                                {({ field }) => (
                                    <Select
                                        value={field.value}
                                        onValueChange={(value) =>
                                            setFieldValue("categoryId", value)
                                        }
                                    >
                                        <SelectTrigger

                                        >
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categoryList.map((category) => (
                                                <SelectItem
                                                    key={category.id}
                                                    value={category.id.toString()}
                                                >
                                                    {category.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            </Field>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="color" className="block text-sm font-medium">
                                辛さ
                            </label>
                            <Field
                                as={Input}
                                id="color"
                                name="color"
                                placeholder="Enter"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="mrp" className="block text-sm font-medium">
                                MRP(資材所要量計画)
                            </label>
                            <Field
                                as={Input}
                                id="mrp"
                                name="mrp"
                                type="number"
                                step="0.01"
                                min="0"
                                placeholder="0.00"
                            />

                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="sellingPrice"
                                className="block text-sm font-medium"
                            >
                                値段
                            </label>
                            <Field
                                as={Input}
                                id="sellingPrice"
                                name="sellingPrice"
                                type="number"
                                step="0.01"
                                min="0"
                                placeholder="0.00"

                            />

                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="description" className="block text-sm font-medium">
                            Description
                        </label>
                        <Field
                            as={Textarea}
                            id="description"
                            name="description"
                            placeholder="Enter product description"
                            rows={3}
                        />
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

                            {isEditing ? (
                                "Update Product"
                            ) : (
                                "Add Product"
                            )}
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ProductForm;
