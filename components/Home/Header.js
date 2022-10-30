import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  View,
} from "react-native";
import React from "react";
import OIcon from "react-native-vector-icons/Octicons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo512.png")} />
      <View style={styles.wrapper}>
        <OIcon name="filter" style={styles.filter} size={30} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: "18%",
    height: 40,
    marginRight: 20,
    resizeMode: "cover",
  },
  wrapper: {},
  search: {
    paddingVertical: 5,
    marginLeft: 5,
    color: "black",
    fontSize: 15,
  },
  filter: {
    marginBottom: 10,
  },
});
