import { FC } from 'react';
import { useDispatch } from 'react-redux';

import classNames from 'classnames';

import { TabActiveAction } from '@state/tabs/actions';

import { TabProps } from './types';

import './tab.scss';

export const Tab: FC<TabProps> = ({ children, index, available, active }) => {
  const dispatch = useDispatch();

  const classes = classNames('tab', {
    'tab--available': available,
    'tab--active': active
  });

  const clickHandle = () => {
    if (available && !active) {
      dispatch(TabActiveAction(index));
    }
  }

  return (
    <div className={classes}>
      <button onClick={clickHandle}>{children}</button>
    </div>
  )
}