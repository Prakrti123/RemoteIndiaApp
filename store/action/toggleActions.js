import { darkTheme, lightTheme } from "../../constants/theme"
import { TOGGLE_THEME_SUCCESS } from "./action"

export const handleToggle = (theme) => dispatch => {
    console.log(theme)
    dispatch({
        type: "TOGGLE_BUTTON", 
        payload: lightTheme,
    })
    
    if(theme === 'light') {
        dispatch({
            type: "TOGGLE_BUTTON", 
            payload: lightTheme,
        })
    }
    else if(theme === 'dark') {
        dispatch({
            type: "TOGGLE_BUTTON", 
            payload: darkTheme,
        })
    }
    
}