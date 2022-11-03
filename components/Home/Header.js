import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  View,
} from "react-native";
import React from "react";
import IIcon from "react-native-vector-icons/Ionicons";
import MyText from "../MyText";
import RText from "../RText";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.address}>
        <View style={styles.location}>
          <IIcon name="location-sharp" size={25} color="#fff" />
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MyText fontWeight="Bold" style={{ marginRight: 2 }}>
              Home
            </MyText>
            <Entypo name="chevron-down" size={24} color="black" />
          </View>
          <RText style={{ fontSize: 12 }}>
            Mall road, Masoorie, Uttarakhand
          </RText>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Ionicons name="md-notifications-sharp" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <Ionicons name="ios-cart" size={30} color="black" />
      </TouchableOpacity>
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
    marginBottom: 10,
  },
  address: {
    flexDirection: "row",
    width: "75%",
    alignItems: "center",
  },
  location: {
    backgroundColor: "#bf0404",
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginRight: 5,
  },
  search: {
    paddingVertical: 5,
    marginLeft: 5,
    color: "black",
    fontSize: 15,
  },
  profile: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 40,
  },
});
