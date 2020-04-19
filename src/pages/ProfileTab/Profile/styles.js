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
    // marginTop: 20,
    // marginHorizontal: 20
  },
  profileButton: {
    backgroundColor: colors.itemBackground,
    borderColor: colors.border,
    borderBottomWidth: 0.5,
    height: hp("10%"),
    borderRadius: 8,
    marginBottom: hp("1%"),
    justifyContent: "center"
  },
  profileText: {
    color: colors.text,
    fontSize: hp("2.5%"),
    marginLeft: wp("20%")
  },
  profileIcon: {
    position: "absolute",
    marginLeft: wp("5%"),
    height: 50,
    width: 50
  },
  itemButton: {
    backgroundColor: colors.itemBackground,
    borderColor: colors.border,
    borderBottomWidth: 0.5,
    height: hp("7.5%"),
    borderRadius: 8,
    marginBottom: hp("0.7%"),
    justifyContent: "center"
  },
  itemText: {
    color: colors.text,
    fontSize: hp("2%"),
    marginLeft: wp("15%")
  },
  icon: {
    position: "absolute",
    marginLeft: wp("5%"),
    height: 25,
    width: 25
  }
});

export default styles;
