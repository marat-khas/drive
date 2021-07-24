import { tabsStateDefault } from './default';
import { TabsAction, TabsActionTypes, TabsState } from './types';

export const tabsReducer = (
    state = tabsStateDefault,
    action: TabsAction
): TabsState => {
    switch (action.type) {
        case TabsActionTypes.TAB_ACTIVE: {
            return {
                ...state,
                active: action.payload,
            };
        }
        case TabsActionTypes.TAB_AVAILABLE: {
            return {
                ...state,
                tabs: state.tabs.map((tab, index) =>
                    index === action.payload.index
                        ? { ...tab, available: action.payload.status }
                        : { ...tab }
                ),
            };
        }
        case TabsActionTypes.TAB_COMPLETE: {
            return {
                ...state,
                tabs: state.tabs.map((tab, index) =>
                    index === action.payload.index
                        ? { ...tab, complete: action.payload.status }
                        : { ...tab }
                ),
            };
        }
        default:
            return state;
    }
};
