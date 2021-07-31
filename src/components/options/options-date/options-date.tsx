import { FC } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import addHours from 'date-fns/addHours';
import addMinutes from 'date-fns/addMinutes';
import roundToNearestMinutes from 'date-fns/roundToNearestMinutes';

import { DateFromSelectAction, DateToSelectAction } from '@state/order/actions';
import { getDate } from '@state/selectors';

import 'react-datepicker/dist/react-datepicker.css';
import './options-date.scss';

const TIME_INTERVAL = 30;
const MIN_RENT_TIME = 1;

export const OptionsDate: FC = () => {
    const dispatch = useDispatch();
    const { from: selectedFrom, to: selectedTo } = useSelector(getDate);

    const datapickedProps = {
        timeFormat: 'HH:mm',
        dateFormat: 'dd.MM.yyyy HH:mm',
        timeIntervals: TIME_INTERVAL,
        showTimeSelect: true,
        isClearable: true,
    };

    const filterFromTime = (time: Date) =>
        new Date().getTime() < new Date(time).getTime();

    const filterToTime = (time: Date) =>
        addHours(selectedFrom || new Date(), MIN_RENT_TIME).getTime() <=
        time.getTime();

    const changeFromHandle = (date: Date | null) => {
        if (date && date.getTime() < new Date().getTime()) {
            dispatch(
                DateFromSelectAction(
                    roundToNearestMinutes(
                        addMinutes(new Date(), TIME_INTERVAL / 2),
                        {
                            nearestTo: TIME_INTERVAL,
                        }
                    ).getTime()
                )
            );
        } else {
            dispatch(DateFromSelectAction(date ? date.getTime() : null));
        }

        if (
            date &&
            selectedTo &&
            addHours(date, MIN_RENT_TIME).getTime() > selectedTo
        ) {
            dispatch(DateToSelectAction(null));
        }
    };

    const changeToHandle = (date: Date | null) => {
        const minDate = addHours(
            selectedFrom ||
                roundToNearestMinutes(
                    addMinutes(new Date(), TIME_INTERVAL / 2),
                    {
                        nearestTo: TIME_INTERVAL,
                    }
                ),
            1
        );

        if (date && date.getTime() < minDate.getTime()) {
            dispatch(DateToSelectAction(minDate.getTime()));
        } else {
            dispatch(DateToSelectAction(date ? date.getTime() : null));
        }
    };

    return (
        <div className='options__input options-date'>
            <div className='options-date__wrapper'>
                <div className='options-date__item'>
                    <div className='options-date__label'>С</div>
                    <div className='options-date__input'>
                        <DatePicker
                            {...datapickedProps}
                            selected={
                                selectedFrom ? new Date(selectedFrom) : null
                            }
                            onChange={changeFromHandle}
                            minDate={new Date()}
                            maxDate={selectedTo ? new Date(selectedTo) : null}
                            filterTime={filterFromTime}
                            selectsStart
                        />
                    </div>
                </div>
                <div className='options-date__item'>
                    <div className='options-date__label'>По</div>
                    <div className='options-date__input'>
                        <DatePicker
                            {...datapickedProps}
                            selected={selectedTo ? new Date(selectedTo) : null}
                            onChange={changeToHandle}
                            minDate={
                                selectedFrom
                                    ? new Date(selectedFrom)
                                    : new Date()
                            }
                            filterTime={filterToTime}
                            selectsEnd
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
