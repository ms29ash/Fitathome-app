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
const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.address}>
        <View style={styles.location}>
          <IIcon name="location-sharp" size={25} color="#fff" />
        </View>
        <View>
          <MyText fontWeight="Bold">Home</MyText>
          <RText style={{ fontSize: 12 }}>
            Mall road, Masoorie, Uttarakhand
          </RText>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image
          style={styles.profile}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          }}
        />
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
