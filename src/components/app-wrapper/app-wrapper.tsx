import { FC } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { getLoadingStatus } from '@state/selectors';

import './app-wrapper.scss';

export const AppWrapper: FC = ({ children }) => {
    const loading = useSelector(getLoadingStatus);

    const classes = classNames('app-wrapper', {
        'app-wrapper--loading': loading.length > 0,
    });

    return <div className={classes}>{children}</div>;
};
