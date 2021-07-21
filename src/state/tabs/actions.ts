import { TabsActionTypes, TabActive, TabComplete } from './types';


export const TabActiveAction = (index: number): TabActive => ({
  type: TabsActionTypes.TAB_ACTIVE,
  payload: index
})

export const TabCompleteAction = (index: number): TabComplete => ({
  type: TabsActionTypes.TAB_COMPLETE,
  payload: index
})