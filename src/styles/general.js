// EXAMPLE
import metrics from "./metrics";
import colors from "./colors";
import fonts from "./fonts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const general = {
  page: {
    flex: 1,
    backgroundColor: colors.page
  },

  buttonView: {
    height: metrics.buttonHeight,
    width: metrics.buttonWidth,
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
    elevation: 5
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: fonts.buttonText,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5
  },
  endBarView: {
    justifyContent: "center",
    borderColor: colors.border,
    backgroundColor: colors.page,
    borderTopWidth: 1,
    height: metrics.endBarHeight,
    left: 0,
    right: 0,
    bottom: 0,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 3.84,
    elevation: 7,

  },
  endBarButtonView: {
    borderWidth: 1,
    backgroundColor: colors.buttonBackground,
    borderColor: colors.buttonBorderColor,
    borderRadius: 8,
    height: metrics.endBarButtonHeight,
    width: metrics.endBarButtonWidth,
    alignSelf: "flex-end",
    right: 10,
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  endBarButtonText: {
    color: colors.buttonText,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5
  }
};

export default general;
