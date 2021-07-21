export type Tab = {
    label: string;
    btnText: string;
    available: boolean;
    complete: boolean;
};

export interface TabsState {
    active: number;
    tabs: Tab[];
}

export enum TabsActionTypes {
    TAB_ACTIVE = 'TAB_ACTIVE',
    TAB_AVAILABLE = 'TAB_AVAILABLE',
    TAB_COMPLETE = 'TAB_COMPLETE',
}

export interface TabActive {
    type: TabsActionTypes.TAB_ACTIVE;
    payload: number;
}
export interface TabAvailable {
    type: TabsActionTypes.TAB_AVAILABLE;
    payload: {
        index: number;
        status: boolean;
    };
}

export interface TabComplete {
    type: TabsActionTypes.TAB_COMPLETE;
    payload: {
        index: number;
        status: boolean;
    };
}

export type TabsAction = TabActive | TabAvailable | TabComplete;
