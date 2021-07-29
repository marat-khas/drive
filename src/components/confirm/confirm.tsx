import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@components/common/button';
import { ConfirmHideAction } from '@state/order/actions';

import './confirm.scss';

export const Confirm: FC = () => {
    const dispatch = useDispatch();
    const submitHandle = () => {
        dispatch(ConfirmHideAction());
    };
    const cancelHandle = () => {
        dispatch(ConfirmHideAction());
    };
    return (
        <div className='confirm'>
            <div className='confirm__wrapper'>
                <div className='confirm__head'>Подтвердить заказ</div>
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
};
