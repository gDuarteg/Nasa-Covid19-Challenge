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
    describeView: {
        backgroundColor: colors.itemBackground,
        height: hp('15%'),
        width: wp('95%'),
        marginTop: hp('1,5%'),
        marginBottom: hp('3%'),
        elevation: 4,
    },
    describe: {
        color: colors.text,
        fontSize: fonts.small,
        marginVertical: hp('0.7%'),
        marginHorizontal: wp('3%')
    },
    itemLine: {
        width: wp("95%"),
        marginTop: hp('3%'),
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: colors.border
    },
    itemIng: {
        color: colors.text,
        fontSize: fonts.medium,
        marginLeft: wp('2%')
    },
    itemQnt: {
        color: colors.text,
        position: "absolute",
        right: 40,
        fontSize: 19,
        bottom: 5
    },
    itemPlus: {
        position: "absolute",
        right: wp('2%')
    },
    imgPlus: {
        height: fonts.medium,
        width: fonts.medium
    },
    itemMinus: {
        position: "absolute",
        right: wp('18%')
    },
    imgMinus: {
        height: fonts.medium,
        width: fonts.medium
    },
    endBar: {
        ...general.endBarView,
    },
    price: {
        color: colors.text,
        position: "absolute",
        fontWeight: "bold",
        fontSize: fonts.regular,
        left: wp('5')
    },
    add: {
        ...general.endBarButtonText
    },
    addBox: {
        ...general.endBarButtonView,
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