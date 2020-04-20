import React, { useState, useContext } from 'react'
import { theme } from '../theme/theme'
import { useTheme } from 'emotion-theming';
import { GlobalContext } from '../store/context';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import useGlobalState from '../store/useGlobalState';
import { IGlobalStateActions, GlobalStateActionTypes } from '../store/useGlobalState';
import { Global } from '@emotion/core';

const useStyles = makeStyles({
    sun: {
        marginLeft: 30,
        marginTop: 60,
        padding: 20,
        paddingLeft: 20,
        paddingRight: 13,
        borderRadius: 100,
    },
    moon: {
        background: '#2e2e2e',
        marginLeft: 30,
        marginTop: 60,
        padding: 20,
        paddingLeft: 20,
        paddingRight: 13,
        borderRadius: 100,
        '&:hover': {
            background: '#2e2e2e'
        }
    }
})

const Toggle = () => {
    
    const { state, dispatch }: any = useContext(GlobalContext)
    const classes = useStyles()

    return (
        
        <Button 
            classes={state.isDark ? { root: classes.sun } : { root: classes.moon } }
            size="small"
            variant="contained"
            startIcon={state.isDark ? 
                <FontAwesomeIcon 
                    icon={faSun}
                    style={{ 
                        fontSize: 40
                    }} /> : 
                <FontAwesomeIcon 
                    icon={faMoon} 
                    style={{ 
                        fontSize: 40,
                        color: '#e3e3e3'
                    }}/>
                }
            onClick={() => { dispatch({ type: GlobalStateActionTypes.TOGGLE_DARK_MODE }); console.log('toggle'); window.location.reload(true);}}  
        ></Button>
    )
}

export default Toggle