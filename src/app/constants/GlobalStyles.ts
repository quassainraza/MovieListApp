import { StyleSheet } from "react-native";

export default StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  hw100: {
    height: "100%",
    width: "100%",
  },
  bgWhite: {
    backgroundColor: "white",
  },
  normalText: {
    fontSize: 17,
    color: "black"
  },
  boldText: {
    fontSize: 17,
    fontWeight: "600",
    color: "black"
  },
  shadow: {
    shadowColor: "gainsboro",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  padding: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "400",
    letterSpacing: 0,
    color: "black"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  bold: {
    fontWeight: "500",
  },
});
