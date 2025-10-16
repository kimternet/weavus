import { Switch } from '@/components/ui/switch';
import { Field } from 'formik';
import React from 'react'


const FEATURE_FIELDS = [
    { key: 'enableAdvancedReports', label: 'Advanced Reports' },
    { key: 'enableInventory', label: 'Inventory System' },
    { key: 'enableIntegrations', label: 'Integrations' },
    { key: 'enableEcommerce', label: 'eCommerce' },
    { key: 'enableInvoiceBranding', label: 'Invoice Branding' },
    { key: 'prioritySupport', label: 'Priority Support' },
    { key: 'enableMultiLocation', label: 'Multi-location' },
];

const FeaturesSwitchGrid = ({ handleFeatureSwitch }) => {
    return (
        <div className="grid grid-cols-2 gap-2">

            {FEATURE_FIELDS.map((item) => <label>
                <Field name={item.key} type="checkbox">

                    {({ field }) => <Switch checked={field.value}
                        onCheckedChange={(val) => handleFeatureSwitch(item.key, val)} />}

                </Field>
                <span>{item.label}</span>
            </label>)}

        </div>
    );
};

export default FeaturesSwitchGrid;