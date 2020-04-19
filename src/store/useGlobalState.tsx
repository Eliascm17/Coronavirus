import { useReducer } from 'react'
import storage from 'local-storage-fallback'

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            storage.setItem("isDark", String(!state.isDark))
            return {
                isDark: !state.isDark,
            }
        default: {
            return state
        }
    }
}

const useGlobalState = () => {

    const [state, dispatch] = useReducer(reducer, {
        isDark: storage.getItem("isDark") ? JSON.parse(storage.getItem("isDark") || '{}') : true,
    })

    return {state, dispatch}
}

export default useGlobalState