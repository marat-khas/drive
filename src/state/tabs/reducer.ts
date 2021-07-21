import { TabsAction, TabsActionTypes, TabsState } from './types';
import { tabsStateDefault } from './default';


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
    case TabsActionTypes.TAB_COMPLETE: {
      return {
        ...state,
        tabs: state.tabs.map((tab, index) => {
          if (index === action.payload) {
            tab.complete = true;
          }
          return tab;
        }),
      };
    }
    default:
      return state;
  }
};