// EXAMPLE
import metrics from "./metrics";
import colors from "./colors";
import fonts from "./fonts";

const general = {
  container: {
    flex: 1,
    backgroundColor: colors.body
  },
  section: {
    margin: metrics.doubleBaseMargin
  },
  sectionTitle: {
    color: colors.header,
    fontWeight: "bold",
    fontSize: fonts.regular,
    alignSelf: "center",
    marginBottom: metrics.doubleBaseMargin
  }
};

export default general;
