import { colors } from "../../../styles/index";
import { StyleSheet } from "react-native";
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
    margin: 20,
    marginBottom: 50
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    height: 50
  },
  buttonView: {
    backgroundColor: colors.buttonBackgrond,
    height: hp("10%"),
    width: wp("40%"),
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 9,
    borderColor: colors.buttonBorderColor,
    borderWidth: 1
  },
  buttonText: {
    fontSize: 20,
    color: colors.buttonText,
    textAlign: "center"
  }
});

export default styles;
