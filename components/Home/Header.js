import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import OIcon from "react-native-vector-icons/Octicons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo512.png")} />
      <View style={styles.wrapper}>
        <Icon name="search1" size={25} style={{ marginLeft: 5 }} />
        <TextInput placeholder="Search" style={styles.search} />
      </View>
      {/* <TouchableOpacity>
        <OIcon name="filter" style={styles.filter} size={30} />
      </TouchableOpacity> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: "18%",
    height: 40,
    marginRight: 20,
    resizeMode: "cover",
  },
  wrapper: {
    borderColor: "#ebebeb",
    borderWidth: 1,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    marginBottom: 15,
    width: "78%",
    marginRight: 10,
  },
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
