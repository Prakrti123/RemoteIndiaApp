import * as themeActionsType from "../action/action"
import { COLORS, darkTheme, lightTheme, selectedTheme } from "../../constants/theme";
import { Appearance } from "react-native";


const scheme = Appearance.getColorScheme();

const initialState = {
    appTheme: scheme === 'light'
        ?
        {
            name: "light",
            text_Black_White: COLORS.black,
            text_Gray_Scale: COLORS.gray,
            text_Purple_White: COLORS.purple,
            screen_BG: COLORS.white2,
            header_BG: COLORS.white,
            code_BG: COLORS.lightGray2,
            active_code_BG: COLORS.lightGray,

            // bottom Tab
            bottomTab: COLORS.white,
            activeIcon: COLORS.white,
            InactiveIcon: COLORS.OrangeBG,
            active_BG: COLORS.OrangeBG,

            backIcon: COLORS.black,
            inputBox: COLORS.lightGray,
            inputText: COLORS.darkGray,
            inputIcon: COLORS.lightGray,
            whiteIcon: COLORS.darkGray,
            IconGrayScale: COLORS.gray50,
            lineBreaker: COLORS.lightGray,
            lineBreaker2: COLORS.lightGray,
            lightButton_BG: COLORS.purpleTrans,
            BrightButton_BG: COLORS.purple,
            mainColor: COLORS.purple,
            transperacy: COLORS.lightPurple,

            // booking stack
            tab_Border: COLORS.lightGray,
            card_BG: COLORS.white,
            card_BG2: COLORS.white2,
            darkCard: COLORS.white2,
            status_Color: COLORS.lightPurple,
            status_Text: COLORS.purple,

            // service category
            btn_BG: COLORS.white,
            btn_Border: COLORS.white,

            // filter Modal
            filter_BG: COLORS.white2,
            cancelFilter_BG: COLORS.white2,
            option_BG: COLORS.white,
            option_Border: COLORS.purple,
            option_Text: COLORS.purple,

            // Profile Option Theme
            bgOption: COLORS.white,
            switch_LightGray_Purlpe: COLORS.lightGray1,
            icon_White_Black: COLORS.black,
            backArrow_Black_White: COLORS.gray50,

            dotColor1: COLORS.gray20,
            dotColor2: COLORS.primary3,
        }
        :
        {
            name: "dark",
            text_Black_White: COLORS.white,
            text_Gray_Scale: COLORS.lightGray1,
            text_Purple_White: COLORS.white,
            screen_BG: COLORS.card,
            header_BG: COLORS.black,
            code_BG: COLORS.darkGray3,
            active_code_BG: COLORS.darkGray1,
        
            // bottomTab
            bottomTab: COLORS.purple,
            activeIcon: COLORS.white,
            InactiveIcon: COLORS.lightGray,
            active_BG: COLORS.purple,
        
            backIcon: COLORS.white,
            inputBox: COLORS.darkGray3,
            inputText: COLORS.white2,
            inputIcon: COLORS.darkGray2,
            whiteIcon: COLORS.lightGray1,
            IconGrayScale: COLORS.gray20,
            lineBreaker: COLORS.darkGray1,
            lineBreaker2: COLORS.transparentBlack1,
            lightButton_BG: COLORS.darkGray1,
            BrightButton_BG: COLORS.purple,
            mainColor: COLORS.purple,
            transperacy: COLORS.gray80,
        
            // booking stack
            tab_Border: COLORS.darkGray3,
            card_BG: COLORS.cardGary,
            card_BG2: COLORS.cardGary,
            darkCard: COLORS.cardDarkGray,
            status_Color: COLORS.purple,
            status_Text: COLORS.white2,
        
            // service category
            btn_BG: COLORS.darkGray3,
            btn_Border: COLORS.darkGray3,
        
            // filterModal
            filter_BG: COLORS.card,
            cancelFilter_BG: COLORS.card,
            option_BG: COLORS.darkGray3,
            option_Border: COLORS.darkGray3,
            option_Text: COLORS.white2,
        
            // Profile Option Theme
            bgOption: COLORS.darkGray1,
            switch_LightGray_Purlpe: COLORS.purple,
            icon_White_Black: COLORS.white,
            backArrow_Black_White: COLORS.lightGray,
        
            dotColor1: COLORS.white,
            dotColor2: COLORS.primary,
        },
    darkMode: scheme === 'light' ? false : true,
    error: null,
}

const themeReducer = (state = initialState, action) => {

    switch (action.type) {
        case "TOGGLE_BUTTON":
            return {
                ...state,
                appTheme: action.payload
            }
        case themeActionsType.TOGGLE_THEME_BEGIN:
            return {
                ...state,
                error: null
            }
        case themeActionsType.TOGGLE_THEME_SUCCESS:
            return {
                ...state,
                darkMode: action.playload.selectedTheme
            }
        case themeActionsType.TOGGLE_THEME_FAILURE:
            return {
                ...state,
                error: action.playload.error
            }
        default: {
            return state
        }
    }
}
export default themeReducer;