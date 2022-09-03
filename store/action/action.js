import { darkTheme, lightTheme } from "../../constants/theme"

export const TOGGLE_THEME_BEGIN = 'TOGGLE_THEME_BEGIN'
export const TOGGLE_THEME_SUCCESS = 'TOGGLE_THEME_SUCCESS'
export const TOGGLE_THEME_FAILURE = 'TOGGLE_THEME_FAILURE'
// export const THEME_SWITCH_ACTION = 'THEME_SWITCH_ACTION';

// export const themeSwitchAction = (theme) => {
//     return {
//         type: 'THEME_SWITCH_ACTION',
//         payload: theme,
//     }
// }

export const toggleThemeBegin = () => ({
    type: TOGGLE_THEME_BEGIN
})

export const toggleThemeSuccess = (selectedTheme) => ({
    type: TOGGLE_THEME_SUCCESS,
    payload: selectedTheme
})

export const toggleThemeFailure = () => ({
    type: TOGGLE_THEME_FAILURE,
    payload: { error }
})

export function toggleTheme(themeType, dispatch) {

    console.log("themeType", themeType)
    // alert("themeType", themeType)

    return dispatch => {
        console.log("themeType", themeType)

        dispatch(toggleThemeBegin())

        if (themeType === "dark") {

            console.log("themeType", themeType)
            dispatch(toggleThemeSuccess(darkTheme))
        }
        else if (themeType === "light") {

            console.log("themeType", themeType)
            dispatch(toggleThemeSuccess(lightTheme))
        }
        else {
            dispatch(toggleThemeFailure({ error: "Invalid theme type" }))
        }

        // switch (themeType) {
        //     case "dark":
        //         {
        //             console.log("          themeType", themeType)
        //             dispatch(toggleThemeSuccess(darkTheme))
        //             // dispatch({
        //             //     type: TOGGLE_THEME_SUCCESS, payload: darkTheme,
        //             // })
        //             break;
        //         }
        //     case "light":
        //         {
        //             console.log("themeType", themeType)
        //             dispatch(toggleThemeSuccess(lightTheme))
        //             break;
        //         }
        //     default:
        //         {
        //             dispatch(toggleThemeFailure({ error: "Invalid theme type" }))
        //             break;
        //         }
        // }
    }
}

