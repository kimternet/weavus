import { Label } from '@/components/ui/label'
import { Mail } from 'lucide-react'
import { Phone } from 'lucide-react'
import { MapPin } from 'lucide-react'
import React from 'react'

const ContactInfo = ({ storeData }) => {
    return (
        <div>

            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>

            <div className="space-y-4">
                <div className="flex gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <div>
                        <Label className={"text-sm text-muted-foreground"}>アドレス</Label>
                        <p className="text-base">{storeData.contact?.address}</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <div>
                        <Label className={"text-sm text-muted-foreground"}>携帯電話</Label>
                        <p className="text-base">{storeData.contact?.phone}</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <div>
                        <Label className={"text-sm text-muted-foreground"}>メールアドレス</Label>
                        <p className="text-base">{storeData.contact?.email}</p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ContactInfo