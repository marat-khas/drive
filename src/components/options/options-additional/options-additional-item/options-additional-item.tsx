import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Checkbox } from '@components/common/checkbox';
import { AdditionalChangeAction } from '@state/order/actions';
import { Additional } from '@state/order/types';
import { getAdditionals } from '@state/selectors';

export interface OptionsAdditionalItemProps {
    additional: Additional;
}

export const OptionsAdditionalItem: FC<OptionsAdditionalItemProps> = ({
    additional,
}) => {
    const dispatch = useDispatch();
    const additionals = useSelector(getAdditionals);
    const thisAdditional = additionals.find(
        (option) => option.id === additional.id
    )!;
    const changeHandle = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            AdditionalChangeAction({
                id: additional.id,
                status: event.target.checked,
            })
        );
    };

    return (
        <div className='options__input' key={additional.id}>
            <Checkbox
                name='options-dop'
                id={`options-dop${additional.id}`}
                checked={thisAdditional.selected}
                changeHandle={changeHandle}
            >
                {`${additional.name}, ${additional.cost} ₽`}
            </Checkbox>
        </div>
    );
};
