import { ChangeEventHandler } from 'react';

export interface RadioProps {
    name: string;
    id: string;
    className?: string | string[];
    changeHandle?: ChangeEventHandler<HTMLInputElement>;
}
