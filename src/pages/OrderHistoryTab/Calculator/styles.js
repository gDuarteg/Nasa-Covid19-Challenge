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
  title: {
    fontSize: 20,
    // marginTop: hp("2%"),
    // marginBottom: hp("10%"),
    padding: 50
  },
  body: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  viewInput: {
    marginBottom: hp("2%"),
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    width: wp("80%")
  },
  textInput: {
    fontSize: 30,
  },
  checkButton: {
    backgroundColor: "white",
    height: hp("8%"),
    width: wp("70%"),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
    elevation: 5,

  },
  checkText: {
    fontSize: 25,
    fontWeight: "bold"
  }
});

export default styles;
