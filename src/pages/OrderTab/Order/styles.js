import { StyleSheet } from "react-native";
import { colors, general, fonts } from "../../../styles";
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
    cartLine: {
        flexDirection: "row",
        width: wp('95%'),
        marginTop: hp('3%'),
        borderBottomWidth: 1,
        borderBottomColor: colors.border

    },
    cartName: {
        color: colors.text,
        fontSize: fonts.medium,
        left: wp('2')
    },
    cartPrice: {
        color: colors.text,
        position: "absolute",
        right: wp('10'),
        fontSize: fonts.medium,
        bottom: 2
    },
    itemTrash: {
        position: "absolute",
        right: wp('2')
    },
    imgTrash: {
        width: fonts.medium,
        height: fonts.medium
    },
    endBar: {
        ...general.endBarView
    },
    price: {
        color: colors.text,
        position: "absolute",
        fontWeight: "bold",
        fontSize: fonts.regular,
        left: wp('5')
    },
    buttonTextNext: {
        ...general.endBarButtonText
    },
    buttonViewNext: {
        ...general.endBarButtonView
    }
});

export default styles;