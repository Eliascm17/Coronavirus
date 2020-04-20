import { createContext, useContext, Dispatch } from 'react'
import { IGlobalState, IGlobalStateActions, initialState } from './useGlobalState';

export const GlobalContext = createContext <{
    state: IGlobalState;
    dispatch: Dispatch<IGlobalStateActions>;
}>({state: initialState, dispatch: () => null})
