import { ActionMeta } from 'react-select';

type Option = {
    value: string | undefined;
    label: string | undefined;
};

export interface LocationSelectProps {
    label: string;
    value?: Option | null;
    placeholder: string;
    options: Option[];
    handleChange: (
        value: Option | null,
        actionMeta: ActionMeta<Option>
    ) => void;
}
