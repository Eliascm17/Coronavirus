import React, { useState, useContext } from 'react'
import { theme } from '../theme/theme'
import { useTheme } from 'emotion-theming';
import Context from '../store/context';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
    sun: {
        marginLeft: 30,
        marginTop: 60,
        padding: 25,
        borderRadius: 100,
    },
    moon: {
        background: '#2e2e2e',
        marginLeft: 30,
        marginTop: 60,
        padding: 25,
        borderRadius: 100,
    }
})

const Toggle = () => {
    
    const { state, dispatch }: any = useContext(Context)
    const theme = useTheme()

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
                        fontSize: 35,
                        paddingLeft: 3,
                        paddingTop: 3,
                        paddingBottom: 3

                    }} /> : 
                <FontAwesomeIcon 
                    icon={faMoon} 
                    style={{ 
                        fontSize: 35, 
                        paddingLeft: 3,
                        paddingTop: 3,
                        paddingBottom: 3,
                        color: '#e3e3e3'
                    }}/>}
            onClick={() => {dispatch({ type: "TOGGLE_DARK_MODE"}); console.log('toggle')}}  
        ></Button>
    )
}

export default Toggle