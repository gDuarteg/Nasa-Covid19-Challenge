import { StyleSheet } from "react-native";
import { colors, fonts, metrics, general } from "../../../styles";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.page,
    },
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonMenu: {
        color: colors.buttonText,
        fontSize: fonts.bigButtonText,
        fontWeight: "bold",
        textAlign: "center",
        margin: 5
    },
    viewButtonMenu: {
        height: metrics.bigButtonHeight,
        width: metrics.bigButtonWidth,
        backgroundColor: colors.buttonBackground,
        borderColor: colors.buttonBorderColor,
        justifyContent: "center",
        borderRadius: 8,
        borderWidth: 1,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: hp("4%"),
    }
});

export default styles;