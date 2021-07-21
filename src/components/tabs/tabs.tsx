import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getActiveTabIndex, getTabs } from '@state/selectors';

import { Tab } from '@components/tabs/tab';

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
