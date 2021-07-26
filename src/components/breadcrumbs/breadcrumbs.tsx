import { FC } from 'react';
import { useSelector } from 'react-redux';

import { BreadcrumbsItem } from '@components/breadcrumbs/breadcrumbs-item';
import { getActiveTabIndex, getTabs } from '@state/selectors';

export const Breadcrumbs: FC = () => {
    const tabs = useSelector(getTabs);
    const activeTabIndex = useSelector(getActiveTabIndex);
    return (
        <div className='breadcrumbs'>
            {tabs.map((tab, index) => {
                const prev = tabs[index - 1];
                const available = index
                    ? prev.available && prev.complete
                    : true;
                const active = activeTabIndex === index;
                return (
                    <BreadcrumbsItem
                        key={tab.label}
                        index={index}
                        available={available}
                        active={active}
                    >
                        {tab.label}
                    </BreadcrumbsItem>
                );
            })}
        </div>
    );
};
