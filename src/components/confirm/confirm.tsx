import { FC } from 'react';

import { Button } from '@components/common/button';

import './confirm.scss';

import { ConfirmProps } from './types';

export const Confirm: FC<ConfirmProps> = ({
    title,
    submitHandle,
    cancelHandle,
}) => (
    <div className='confirm'>
        <div className='confirm__wrapper'>
            <div className='confirm__head'>{title}</div>
            <div className='confirm__foot'>
                <div className='confirm__btn'>
                    <Button onClick={submitHandle}>Подтвердить</Button>
                </div>
                <div className='confirm__btn'>
                    <Button onClick={cancelHandle} bg={3}>
                        Вернуться
                    </Button>
                </div>
            </div>
        </div>
    </div>
);
