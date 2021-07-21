import { TabsAction, TabsActionTypes, TabsState } from './types';

const defaultState: TabsState = {
  active: 0,
  tabs: [
    {
      available: true,
      complete: false
    }, {
      available: false,
      complete: false
    }, {
      available: false,
      complete: false
    }, {
      available: false,
      complete: false
    }
  ]
}


export const tabsReducer = (
  state = defaultState,
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