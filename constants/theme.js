import { Appearance, Dimensions } from "react-native"

const { width , height } = Dimensions.get("window");

const scheme = Appearance.getColorScheme();
const theme = scheme === 'light' ? false : true;

export const COLORS = {

    card: '#0f0f0f',
    primary: "#6759FF",
    primary1: "##FFFFFF",   // White
    primary2: "#F76E11",    // Orange
    primary3: "#7210FF",    // purple
    secondary: "#86C9D8",   // card
    lavender: "#CAD2FF",
    purple: "#7210FF",
    lightPurple: "#7210FF14",
    yellow: "#FFA500",
    lightYellow: "#FFD109",
    orange: "#F76E11",
    blue: "#2591E9",
    red: "#F33E25",
    cyan: "#49BCAF",
    green1: "#60BC49",
    green: "#39D721",
    lightPink: "#FFCACA",
    lightGreen: "#B5EBCD",
    maginta: "#C16BE2",
    seaform: "#4CCDB3",
    rose: "#CA7F97",
    cardGary: "#1E2027",
    cardDarkGray: "#212121",

    // gray
    gray10: "#E5E5E5",
    gray20: "#CCCCCC",
    gray30: "#A1A1A1",
    gray40: "#999999",
    gray50: "#7F7F7F",
    gray60: "#666666",
    gray70: "#4C4C4C",
    gray80: "#333333",
    gray85: "#242526",
    gray90: "#191919",

    // transperacy
    purpleTrans: "#7210FF0D",
    lightPurpleTrans: "#7210FF140D",
    yellowTrans: "#FFA5000D",
    lightYellowTrans: "#FFD1090D",
    orangeTrans: "#F76E110D",
    blueTrans: "#2591E90D",
    redTrans: "#F33E250D",
    cyanTrans: "#49BCAF0D",
    green1Trans: "#60BC490D",
    magintaTrans: "#C16BE20D",
    seaformTrans: "#4CCDB30D",
    roseTrans: "#CA7F970D",

    white2: "#FBFBFB",
    white: '#FFFFFF',
    black: "#000000",

    // gray
    gray: "#898B9A",
    gray1: "#3D3F47",
    gray2: "#BBBDC1",
    gray3: '#CFD0D7',
    lightGray: '#EAEAEA',
    lightGray1: "#DDDDDD",
    lightGray2: "#F5F5F8",
    lightGray3: '#E5E5E5',
    darkGray: "#525C67",
    darkGray1: "#383838",
    darkGray2: "#757D85",
    darkGray3: "#23252C",
    darkGray4: "#212329",

    // background
    cyanBG: "#86C9D8",
    PinkBG: "#F5AFB2",
    YellowBG: "#FFD419",
    OrangeBG: "#EE791A",
    

    // transparent
    transparent: 'transparent',
    transparentBlack1: "rgba(0, 0, 0, 0.1)",
    transparentBlack7: "rgba(0, 0, 0, 0.7)"
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24, 

     // font sizes
    largeTitle: 40,
    h1: 30,
    h1_5: 27,
    h2: 22,
    h2_5: 19,
    h3: 16,
    h3_5: 15,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,
    
    // app dimentions
    width,
    height,
};

export const FONTS = {
    largeTitle: { fontFamily: "Arial", fontSize: SIZES.largeTitle, color: "#000000" },
    h1: { fontFamily: "Arial", fontSize: SIZES.h1, lineHeight: 36, fontWeight: 'bold', letterSpacing: 1, color: "#000000" },
    h1_5: { fontFamily: "Arial", fontSize: SIZES.h1_5, lineHeight: 34, fontWeight: 'bold', letterSpacing: 1, color: "#000000" },
    h2: { fontFamily: "Arial", fontSize: SIZES.h2, lineHeight: 30, fontWeight: 'bold', letterSpacing: 1, color: "#000000" },
    h2_5: { fontFamily: "Arial", fontSize: SIZES.h2_5, lineHeight: 30, fontWeight: 'bold', letterSpacing: 1, color: "#000000" },
    h3: { fontFamily: "Arial", fontSize: SIZES.h3, lineHeight: 22 ,fontWeight: 'bold', letterSpacing: 1, color: "#000000" },
    h3_5: { fontFamily: "Arial", fontSize: SIZES.h3_5, lineHeight: 22, fontWeight: 'bold', letterSpacing: 1, color: "#000000"  },
    h4: { fontFamily: "Arial", fontSize: SIZES.h4, lineHeight: 20, fontWeight: 'bold', letterSpacing: 1, color: "#000000" },
    h5: { fontFamily: "Arial", fontSize: SIZES.h5, lineHeight: 20, fontWeight: 'bold', letterSpacing: 1, color: "#000000" },
    body1: { fontFamily: "Arial", fontSize: SIZES.body1, lineHeight: 36, color: "#000000" },
    body2: { fontFamily: "Arial", fontSize: SIZES.body2, lineHeight: 30, color: "#000000" },
    body3: { fontFamily: "Arial", fontSize: SIZES.body3, lineHeight: 22, color: "#000000" },
    body4: { fontFamily: "Arial", fontSize: SIZES.body4, lineHeight: 20, color: "#000000" },
    body5: { fontFamily: "Arial", fontSize: SIZES.body5, lineHeight: 20, color: "#000000" },
};


export const lightTheme = {
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

export const darkTheme = {
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
}

export const selectedTheme = theme === false ? lightTheme : darkTheme;

const Theme = { COLORS, SIZES, FONTS, darkTheme, lightTheme };

export default Theme;
