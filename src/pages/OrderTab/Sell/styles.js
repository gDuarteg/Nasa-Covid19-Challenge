import { colors, metrics } from "../../../styles/index";
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.page,
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    // marginTop: 20,
    marginVertical: 50,
    width: wp("100%")
  },
  itemText: {
    fontSize: 25,
    marginLeft: 60
  },
  plusView: {
    position: "absolute",
    right: wp("30%"),
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    elevation: 5,

  },
  plusText: {
    fontSize: 35,
  },
  minusView: {
    position: "absolute",
    right: wp("3%"),
    width: 50,
    backgroundColor: "white",
    borderRadius: 25,
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5
  },
  minusText: {
    fontSize: 40,
  },
  qntText: {
    position: "absolute",
    right: wp("18%"),
    fontSize: 22,
    marginTop: 10
  },
  sellButton: {
    position: "absolute",
    bottom: hp("8%"),
    height: hp("8%"),
    width: wp("65%"),
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "gray",
    elevation: 5
  },
  sellText: {
    fontSize: 24,
    color: "white"
  }
});

export default styles;
