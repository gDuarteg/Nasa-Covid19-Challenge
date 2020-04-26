import { StyleSheet } from "react-native";
import { colors, fonts, general } from "../../../styles";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: colors.loginBackground,
    },
    title: {
        color: colors.title,
        fontSize: fonts.bigTitle,
        fontFamily: "Roboto",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: hp('10%'),
    },
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    TextInput: {
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        marginTop: 20,
        width: wp('60%')
    },
    button: {
        ...general.buttonText
    },
    viewButton: {
        ...general.buttonView,
        marginTop: hp('3%'),
        marginBottom: hp('1%'),
    },
    loginOptionsText: {
        color: colors.text,
        textAlign: "center",
        marginTop: hp('1.5%'),
    }
});

export default styles;