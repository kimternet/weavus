import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react';
import React from 'react'

const ExtraFeaturesList = ({ values, handleExtraFeatureChange, handleRemoveExtraFeature, handleAddExtraFeature }) => {
    return (
        <div className="space-y-3">
            {values.extraFeatures.map((feature, idx) => (
                <div className="flex items-center gap-2" key={idx}>
                    <Input
                        value={feature}
                        placeholder="Extra Feature..."
                        onChange={(e) =>
                            handleExtraFeatureChange(idx, e.target.value)
                        } />
                    <Button disabled={values.extraFeatures.length == 1}
                        variant="ghost"
                        onClick={() => handleRemoveExtraFeature(idx, values)}>Remove</Button>
                </div>
            ))}
            <Button onClick={handleAddExtraFeature}><Plus />Add Feature</Button>
        </div>
    );
};

export default ExtraFeaturesList