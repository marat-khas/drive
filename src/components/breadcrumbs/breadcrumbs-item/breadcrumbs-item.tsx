import { FC } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { TabActiveAction } from '@state/tabs/actions';

import './breadcrumbs-item.scss';

import { BreadcrumbsItemProps } from './types';

export const BreadcrumbsItem: FC<BreadcrumbsItemProps> = ({
    children,
    index,
    available,
    active,
}) => {
    const dispatch = useDispatch();

    const classes = classNames('breadcrumbs-item', {
        'breadcrumbs-item--available': available,
        'breadcrumbs-item--active': active,
    });

    const handleClick = () => {
        if (available && !active) {
            dispatch(TabActiveAction(index));
        }
    };

    return (
        <div className={classes}>
            <button onClick={handleClick} type='button'>
                {children}
            </button>
        </div>
    );
};
