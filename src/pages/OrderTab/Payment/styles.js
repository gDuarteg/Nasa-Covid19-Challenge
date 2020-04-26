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
    rowItem: {
        color: colors.text,
        fontSize: fonts.medium,
        fontWeight: "bold",
        marginLeft: wp('4'),
    },
    rowSubItem: {
        color: colors.textLight,
        fontSize: fonts.small,
        marginLeft: wp('9')
    },
    itemView: {
        backgroundColor: colors.itemBackground,
        marginTop: hp('2'),
        height: hp('8'),
        width: wp('95'),
        borderColor: colors.border,
        borderBottomWidth: 1,
        borderRadius: 8,
        elevation: 4,
    },
    itemViewSumary: {
        backgroundColor: colors.itemBackground,
        marginTop: hp('2'),
        height: hp('11'),
        width: wp('95'),
        elevation: 4,
        borderColor: colors.border,
        borderBottomWidth: 1,
        borderRadius: 8
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
    buttonTextConfirm: {
        ...general.endBarButtonText
    },
    buttonViewConfirm: {
        ...general.endBarButtonView
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: wp('10%'),
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        ...general.buttonView,
        marginVertical: hp('1%'),
    },
    textStyle: {
        color: colors.buttonText,
        fontSize: fonts.small,
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontSize: fonts.medium,
        fontWeight: "bold",
        marginBottom: hp('2%'),
        textAlign: "center"
    }
});

export default styles;