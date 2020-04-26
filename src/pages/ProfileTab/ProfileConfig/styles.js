import { colors, fonts, general, metrics } from "../../../styles/index";
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
    marginTop: hp('2'),
    alignItems: 'center'
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    height: hp('6'),
    width: wp('95')
  },
  buttonView: {
    ...general.buttonView,
    marginTop: hp('7')
  },
  buttonText: {
    ...general.buttonText
  }
});

export default styles;
