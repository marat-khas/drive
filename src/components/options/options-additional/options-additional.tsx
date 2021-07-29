import { FC } from 'react';
import { useSelector } from 'react-redux';

import { OptionsAdditionalItem } from '@components/options/options-additional/options-additional-item';
import { getAdditionals } from '@state/selectors';

export const OptionsAdditional: FC = () => {
    const additionals = useSelector(getAdditionals);
    return (
        <div>
            {additionals?.map((additional) => (
                <OptionsAdditionalItem
                    key={additional.id}
                    additional={additional}
                />
            ))}
        </div>
    );
};
