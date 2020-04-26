import { StyleSheet } from "react-native";
import { colors, fonts, general } from "../../../styles";
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
    timeView: {
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        marginBottom: hp('2'),
        height: hp('35'),
        width: wp('95'),
    },
    timeText: {
        color: colors.title,
        textAlign: "center",
        fontSize: fonts.title,
        fontWeight: "bold",
        marginBottom: hp('3')
    },
    CountDownDigitStyle: {
        backgroundColor: colors.page,
        borderWidth: 1,
        borderColor: colors.buttonBorderColor,
        elevation: 4
    },
    CountDownDigitTxtStyle: {
        color: colors.buttonText
    },
    CountDownSeparatorStyle: {
        color: colors.buttonText
    },
    statusView: {
        justifyContent: "center",
        width: wp('95'),
    },
    statusText: {
        color: colors.text,
        marginLeft: wp('2'),
        fontSize: fonts.medium
    },
    status: {
        position: "absolute",
        alignSelf: "flex-end",
        borderColor: "gray",
        margin: 5,
        borderWidth: 1,
        width: fonts.medium,
        height: fonts.medium
    },

    endBar: {
        ...general.endBarView
    },
    buttonTextConfirm: {
        ...general.endBarButtonText
    },
    buttonViewConfirm: {
        ...general.endBarButtonView,
        alignSelf: "center"
    },
});


export default styles;