// EXAMPLE
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { Platform } from "react-native";

const metrics = {
  buttonHeight: hp('5%'),
  buttonWidth: wp('40%'),
  bigButtonHeight: hp('15%'),
  bigButtonWidth: wp('80%'),

  endBarHeight: hp('7%'),
  endBarButtonHeight: hp('6%'),
  endBarButtonWidth: wp('40%'),

  bigIcon: wp('15%'),
  mediumIcon: wp('6.8%'),
  smallIcon: wp('4%'),
  // smallMargin: 5,
  // baseMargin: 10,
  // doubleBaseMargin: 20,
  // tabBarHeight: 54,
  // navBarHeight: Platform.OS === "ios" ? 64 : 54,
  // statusBarHeight: Platform.OS === "ios" ? 20 : 0,
  // baseRadius: 3
};

export default metrics;
