import { StyleSheet } from "react-native";
import { colors, fonts, general } from "../../../styles";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.loginBackground
    },
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: colors.title,
        fontSize: fonts.title,
        fontFamily: "Roboto",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: hp('10%'),
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
        marginTop: hp('3%')
    }
});

export default styles;