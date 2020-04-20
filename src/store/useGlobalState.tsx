import { useReducer } from 'react'
import storage from 'local-storage-fallback'
export interface IGlobalState {
    isDark: Boolean
}

export enum GlobalStateActionTypes {
    TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE'
}

export interface IGlobalStateActions {
    type: GlobalStateActionTypes,
    payload: Partial<IGlobalState>
}

const reducer = (state: IGlobalState, action: IGlobalStateActions) => {
    switch (action.type) {
        case GlobalStateActionTypes.TOGGLE_DARK_MODE:
            storage.setItem("isDark", String(!state.isDark))
            return {
                isDark: !state.isDark,
            }
        default: {
            return state
        }
    }
}

export const initialState: IGlobalState = {
    isDark: storage.getItem("isDark") ? JSON.parse(storage.getItem("isDark") || '{}') : true,
}

const useGlobalState = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return {state, dispatch}
}

export default useGlobalState