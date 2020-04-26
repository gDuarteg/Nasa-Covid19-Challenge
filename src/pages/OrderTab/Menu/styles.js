import { StyleSheet } from "react-native";
import { colors, fonts, metrics, general } from "../../../styles";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.page
    },
    body: {
        flex: 1,
        alignItems: "center",
    },
    menuProductItem: {
        marginVertical: hp("0.8%"),
        borderRadius: 8,
        justifyContent: "center",
        backgroundColor: colors.itemBackground,
        borderColor: colors.border,
        borderWidth: 1,
        height: hp('17'),
        width: wp('95%'),

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.36,
        shadowRadius: 3.84,
        elevation: 4,
    },
    menuProductName: {
        color: colors.text,
        position: "absolute",
        fontSize: fonts.regular,
        fontWeight: "bold",
        left: wp('6%'),
        top: hp('1.5%')
    },
    menuProductPrice: {
        position: "absolute",
        color: colors.text,
        textAlign: "right",
        fontSize: fonts.medium,
        fontWeight: "bold",
        right: wp('5%')
    },
    menuProductDescrib: {
        position: "absolute",
        fontSize: fonts.small,
        color: colors.textLight,
        left: wp('6.3%'),
        top: hp('5.2%'),
        width: wp('44%'),
        height: hp('8.6%')
    },

    categoryBar: {
        ...general.endBarView
    },
    categoryItem: {
        backgroundColor: colors.endBarBackground,
        textAlign: "center",
        justifyContent: "center",
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 8,
        height: metrics.endBarButtonHeight,
        width: wp('42%'),
        marginHorizontal: 10,
        elevation: 1,
    },
    categoryText: {
        color: colors.text,
        textAlign: "center",
        fontSize: fonts.buttonText,
        fontWeight: "bold"
    }
});

export default styles;