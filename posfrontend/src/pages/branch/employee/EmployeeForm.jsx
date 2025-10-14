import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useFormik } from 'formik'
import React from 'react'
import { useEffect } from 'react'





const EmployeeForm = ({ initialData, onSubmit, roles }) => {

    const formik = useFormik({

        initialValues: initialData || {
            fullName: "",
            email: "",
            password: "",
            phone: "",
            role: "",
            branchId: initialData ? initialData.branchId : ""
        },
        onSubmit: (values) => {

            console.log("employee information", values)
            // onSubmit()
        }
    })

    useEffect(() => {

        if (initialData) {
            formik.setValues(initialData)
        } else {
            formik.resetForm()
        }
    }, [initialData])

    return (
        <from onSubmit={formik.handleSubmit} className={"space-y-4 py-2"}>

            <div className="space-y-2">
                <Label>名前</Label>
                <Input
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    placeholder={"店員の名前を入力してください。"}
                />
            </div>

            <div className="space-y-2">
                <Label>メールアドレス</Label>
                <Input
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder={"メールアドレスを入力してください。"}
                />
            </div>

            <div className="space-y-2">
                <Label>パスワード</Label>
                <Input
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder={"パスワードを入力してください。"}
                />
            </div>

            <div className="space-y-2">
                <Label>携帯電話</Label>
                <Input
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    placeholder={"携帯電話を入力してください。"}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">

                    <Label>Role</Label>

                    <Select className=""
                        value={formik.values.role}
                        onValueChange={(value) =>
                            formik.setFieldValue("role", value)
                        }>
                        <SelectTrigger className={"w-full"}>
                            <SelectValue placeholder="select role" />
                            <SelectContent>
                                {roles.map((role) => (
                                    <SelectItem key={role} value={role}>
                                        {role}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </SelectTrigger>
                    </Select>
                </div>
            </div>
            <div>
                <Button onClick={() => console.log("value=====", formik.values)} type={"submit"}>{initialData ? "save changes" : "Add Employee"}</Button>
            </div>
        </from>
    );
};

export default EmployeeForm;