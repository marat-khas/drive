import { FC } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';

import { DateFromSelectAction, DateToSelectAction } from '@state/order/actions';
import { getDate } from '@state/selectors';

import 'react-datepicker/dist/react-datepicker.css';
import './options-form-date.scss';

export const OptionsFormDate: FC = () => {
    const dispatch = useDispatch();
    const { from: selectedFrom, to: selectedTo } = useSelector(getDate);

    const changeFromHandle = (date: Date | null) => {
        dispatch(DateFromSelectAction(date));
        if (date && selectedTo && date >= selectedTo) {
            dispatch(DateToSelectAction(null));
        }
    };

    const changeToHandle = (date: Date | null) => {
        dispatch(DateToSelectAction(date));
        if (date && selectedFrom && date <= selectedFrom) {
            dispatch(DateFromSelectAction(null));
        }
    };

    return (
        <div className='options-form__input options-form-date'>
            <div className='options-form-date__wrapper'>
                <div className='options-form-date__item'>
                    <div className='options-form-date__label'>С</div>
                    <div className='options-form-date__input'>
                        <DatePicker
                            selected={selectedFrom}
                            onChange={changeFromHandle}
                            dateFormat='dd.MM.yyyy hh:mm aa'
                            showTimeSelect
                            selectsStart
                            startDate={selectedFrom}
                            endDate={selectedTo}
                            isClearable
                        />
                    </div>
                </div>
                <div className='options-form-date__item'>
                    <div className='options-form-date__label'>По</div>
                    <div className='options-form-date__input'>
                        <DatePicker
                            selected={selectedTo}
                            onChange={changeToHandle}
                            dateFormat='dd.MM.yyyy hh:mm aa'
                            showTimeSelect
                            selectsEnd
                            startDate={selectedFrom}
                            endDate={selectedTo}
                            isClearable
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
