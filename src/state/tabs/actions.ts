import { TabActive, TabAvailable, TabComplete, TabsActionTypes } from './types';

export const TabActiveAction = (index: number): TabActive => ({
    type: TabsActionTypes.TAB_ACTIVE,
    payload: index,
});

export const TabAvailableAction = (
    index: number,
    status: boolean
): TabAvailable => ({
    type: TabsActionTypes.TAB_AVAILABLE,
    payload: { index, status },
});

export const TabCompleteAction = (
    index: number,
    status: boolean
): TabComplete => ({
    type: TabsActionTypes.TAB_COMPLETE,
    payload: { index, status },
});
