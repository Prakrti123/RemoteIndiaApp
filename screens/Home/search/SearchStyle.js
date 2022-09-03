import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const SearchStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: SIZES.width* 0.05,
        paddingVertical: 15,
        backgroundColor: COLORS.white
    },
    content: {

    },

    searchBar: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.07,
    },
    
    SearchView: {
        flexDirection: 'row',
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.068,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        backgroundColor: COLORS.lightGray,
    },
    SearchInnerView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    parameterBtn: {
        borderRadius: 50,
    },
    searchIcon: {
        width: SIZES.width * 0.06,
        height: SIZES.width * 0.06,
        marginHorizontal: 2,
        // margin: 5,
        tintColor: COLORS.gray2,
    },
    InputText: {
        ...FONTS.body3,
        color: COLORS.gray
    },
    header: {
        marginVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    maintext: {
        ...FONTS.h3,
    },
    clearText: {
        ...FONTS.h3_5,
        color: COLORS.purple,
    },
    HistoryView: {
        marginTop: 10,
        height: SIZES.height * 0.05,
        marginVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white
    },
    iconBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: COLORS.gray2
    },
    icon: {
        width: 15,
        height: 15,
        tintColor: COLORS.gray2
    },
    searchText: {
        ...FONTS.body4,
    }
})
export default SearchStyle;