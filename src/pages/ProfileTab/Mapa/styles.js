import { colors, metrics } from "../../../styles/index";
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
    height: hp("10%"),
    marginBottom: hp("1%"),
    justifyContent: "center",
    elevation: 2
  },
  profileText: {
    color: colors.text,
    fontSize: hp("2.5%"),
    marginLeft: wp("20%")
  },
  // profileIcon: {
  //   position: "absolute",
  //   marginLeft: wp("3%"),
  //   height: metrics.bigIcon,
  //   width: metrics.bigIcon
  // },
  itemButton: {
    backgroundColor: colors.itemBackground,
    elevation: 2,
    height: hp("9%"),
    marginBottom: hp("0.7%"),
    justifyContent: "center"
  },
  itemText: {
    color: colors.text,
    fontSize: hp("2%"),
    marginLeft: wp("4%"),
    marginTop: hp("1%")
  },
  icon: {
    position: "absolute",
    marginLeft: wp("5%"),
    height: metrics.mediumIcon,
    width: metrics.mediumIcon
  }
});

export default styles;
