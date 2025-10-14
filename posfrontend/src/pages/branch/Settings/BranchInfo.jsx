import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Save } from 'lucide-react';
import React from 'react'
import { useState } from 'react';


const workingDays = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
]

const BranchInfo = () => {

    const [branchInfo, setBranchInfo] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        workingDays: ["Mon", "Tue"]
    });

    const handleBranchInfoChange = (field, value) => {
        setBranchInfo({
            ...branchInfo, [field]: value
        });
    };

    const handleSaveSettings = () => {
        console.log("branch info", branchInfo)
    }

    return (
        <Card>

            <CardHeader>
                <CardTitle>ブランチインフォメーション</CardTitle>
                <CardDescription>
                    Update your branch details And bussiness time
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                        <div className="space-y-2">

                            <label className="text-sm font-medium">
                                ブランチ名前
                            </label>
                            <Input placeholder="ブランチ名前" name="name" value={branchInfo.name} onChange={
                                (e) => handleBranchInfoChange("name", e.target.value)
                            } />
                        </div>

                        <div className="space-y-2">

                            <label className="text-sm font-medium">
                                アドレス
                            </label>
                            <Input placeholder="Address" name="address" value={branchInfo.address} onChange={
                                (e) => handleBranchInfoChange("アドレス", e.target.value)
                            } />
                        </div>

                        <div className="space-y-2">

                            <label className="text-sm font-medium">
                                携帯電話番号
                            </label>
                            <Input placeholder="コンタクト番号" value={branchInfo.phone} onChange={
                                (e) => handleBranchInfoChange("phone", e.target.value)
                            } />
                        </div>

                        <div className="space-y-2">

                            <label className="text-sm font-medium">
                                メールアドレス
                            </label>
                            <Input placeholder="コンタクトメールアドレス" value={branchInfo.email} onChange={
                                (e) => handleBranchInfoChange("email", e.target.value)
                            } />
                        </div>

                    </div>
                    <Separator />

                    <div className="mt-4">
                        <label className="text-sm font-medium" htmlFor=''>勤務時間</label>

                        <div className="grid grid-cols-2 gap-2 mt-2 md:grid-cols-4">

                            {workingDays.map((day) =>
                                <div className="flex gap-2 items-center">

                                    <Checkbox
                                        checked={branchInfo.workingDays.includes(day)}
                                        onCheckedChange={
                                            (checked) => {
                                                if (checked) {
                                                    handleBranchInfoChange("workingDays",
                                                        [...branchInfo.workingDays, day]
                                                    )
                                                }
                                                else {
                                                    handleBranchInfoChange(
                                                        "workingDays",
                                                        branchInfo.workingDays.filter((d) => d !== day)
                                                    );
                                                }
                                            }
                                        }
                                    />
                                    <label htmlFor='' className="text-sm text-gray-700">
                                        {day}
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <Button onClick={handleSaveSettings}><Save className="h-4 w-4" /> Save Changes</Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default BranchInfo;