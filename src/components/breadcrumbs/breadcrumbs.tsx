import { FC } from 'react';
import { useSelector } from 'react-redux';

import { BreadcrumbsItem } from '@components/breadcrumbs/breadcrumbs-item';
import { getActiveTabIndex, getTabs } from '@state/selectors';

export const Breadcrumbs: FC = () => {
    const breadcrumbs = useSelector(getTabs);
    const activeTabIndex = useSelector(getActiveTabIndex);
    return (
        <div className='breadcrumbs'>
            {breadcrumbs.map((tab, index) => (
                <BreadcrumbsItem
                    key={tab.label}
                    index={index}
                    available={tab.available}
                    active={activeTabIndex === index}
                >
                    {tab.label}
                </BreadcrumbsItem>
            ))}
        </div>
    );
};
