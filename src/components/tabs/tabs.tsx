import { FC } from 'react';
import { useSelector } from 'react-redux';

import { Tab } from '@components/tabs/tab';
import { getActiveTabIndex, getTabs } from '@state/selectors';

export const Tabs: FC = () => {
    const tabs = useSelector(getTabs);
    const activeTabIndex = useSelector(getActiveTabIndex);
    return (
        <div className='tabs'>
            {tabs.map((tab, index) => (
                <Tab
                    key={tab.label}
                    index={index}
                    available={tab.available}
                    active={activeTabIndex === index}
                >
                    {tab.label}
                </Tab>
            ))}
        </div>
    );
};
