import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './options-form-date.scss';

export const OptionsFormDate: FC = () => {
    const [from, setFrom] = useState<Date | null>(null);
    const [to, setTo] = useState<Date | null>(null);

    return (
        <div className='options-form__input options-form-date'>
            <div className='options-form-date__wrapper'>
                <div className='options-form-date__item'>
                    <div className='options-form-date__label'>С</div>
                    <div className='options-form-date__input'>
                        <DatePicker
                            selected={from}
                            onChange={(date) => setFrom(date as Date)}
                            locale='ru'
                            dateFormat='dd.MM.yyyy hh:mm'
                            showTimeSelect
                            startDate={from}
                            endDate={to}
                            isClearable
                        />
                    </div>
                </div>
                <div className='options-form-date__item'>
                    <div className='options-form-date__label'>По</div>
                    <div className='options-form-date__input'>
                        <DatePicker
                            selected={to}
                            onChange={(date) => setTo(date as Date)}
                            locale='ru'
                            dateFormat='dd.MM.yyyy hh:mm'
                            showTimeSelect
                            startDate={from}
                            endDate={to}
                            isClearable
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
