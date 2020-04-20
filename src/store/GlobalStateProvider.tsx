import React from 'react'
import useGlobalState from "./useGlobalState";
import { GlobalContext } from './context';

const GlobalStateProvider = ({children}: any) => {
    return(
        <GlobalContext.Provider value={useGlobalState()}>{children}</GlobalContext.Provider>
    )
}

export default GlobalStateProvider