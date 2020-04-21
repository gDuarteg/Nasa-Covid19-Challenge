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
  endBarBokuttonView: {
    borderWidth: 1,
    backgroundColor: colors.buttonBackgrond,
    borderColor: colors.buttonBorderColor,
    borderRadius: 8,
    height: 45,
    width: 120,
    alignSelf: "flex-end",
    right: 10,
    justifyContent: "center"
  },
  endBarButtonText: {
    color: colors.buttonText,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5
  },
  bigButtonView: {},
  bigButtonText: {}
};

export default general;
