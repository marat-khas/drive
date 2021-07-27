import { ChangeEventHandler } from 'react';

export interface CheckboxProps {
    name: string;
    id: string;
    className?: string | string[];
    changeHandle?: ChangeEventHandler<HTMLInputElement>;
}
