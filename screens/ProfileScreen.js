import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import SafeArea from "../components/SafeArea";
import MyText from "../components/MyText";
import Heading from "../components/Home/Heading";
import { MaterialIcons } from "@expo/vector-icons";
import Option from "../components/Profile/Option";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "../components/BackButton";
import { useNavigation } from "@react-navigation/native";

const options = [
  { navigate: "PersonalImformation", title: "Personal Information" },
  { navigate: "PersonalImformation", title: "Payments" },
  { navigate: "PersonalImformation", title: "Delivery Address" },
  { navigate: "PersonalImformation", title: "Order History" },
  { navigate: "PersonalImformation", title: "Settings" },
];
const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeArea>
      <BackButton style={styles.backBtn} />
      <View style={styles.header}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            }}
          />
          <View style={styles.edit}>
            <MaterialIcons name="edit" size={20} color="white" />
          </View>
        </View>

        <Heading style={styles.heading}>Kavya Krishna</Heading>
        <MyText style={{ color: "#161616", fontSize: 12 }}>
          Kavyakrish@gmail.com
        </MyText>
      </View>
      <View style={styles.main}>
        {options.map((item, index) => (
          <Option
            key={index}
            onPress={() => navigation.navigate(item.navigate)}
          >
            {item.title}
          </Option>
        ))}
        <TouchableOpacity style={styles.signOut}>
          <Ionicons name="exit" size={24} color="black" />
          <MyText style={{ fontSize: 12 }} fontWeight="SemiBold">
            Sign Out
          </MyText>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f2f2f2",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 120,
    resizeMode: "cover",
    height: 120,
    borderRadius: 200,
  },
  edit: {
    position: "absolute",
    right: 5,
    bottom: 5,
    backgroundColor: "#bf0404",
    padding: 5,
    borderRadius: 40,
  },
  heading: {
    marginTop: 5,
    marginBottom: 5,
  },
  main: {
    flex: 5,
    backgroundColor: "#fff",
  },
  signOut: {
    marginHorizontal: "30%",
    marginTop: "45%",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 40,
  },
  backBtn: {},
});
