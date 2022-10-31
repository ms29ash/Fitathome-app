import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import MyText from "../components/MyText";
import SafeArea from "../components/SafeArea";
import BackButton from "../components/BackButton";
import Heading from "../components/Home/Heading";
import Button from "../components/Home/Button";
import { useNavigation } from "@react-navigation/native";

const PersonalInformationScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeArea style={styles.container}>
      <BackButton style={styles.backButton} />
      <Heading style={styles.heading}>Personal Information</Heading>
      <MyText fontWeight="SemiBold" style={styles.label}>
        Name
      </MyText>
      <TextInput
        placeholder="Name"
        autoCapitalize="none"
        textContentType="name"
        keyBoardType="default"
        style={styles.textInput}
      />
      <MyText fontWeight="SemiBold" style={styles.label}>
        Name
      </MyText>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyBoardType="email-address"
        style={styles.textInput}
      />
      <MyText fontWeight="SemiBold" style={styles.label}>
        Name
      </MyText>
      <TextInput
        placeholder="Phone"
        autoCapitalize="none"
        textContentType="telephoneNumber"
        keyBoardType="numeric"
        style={styles.textInput}
      />
      <MyText fontWeight="SemiBold" style={styles.label}>
        Name
      </MyText>
      <TextInput
        placeholder="Address"
        autoCapitalize="none"
        textContentType="addressCityAndState"
        keyBoardType="default"
        style={styles.textInput}
      />
      <MyText fontWeight="SemiBold" style={styles.label}>
        Name
      </MyText>
      <TextInput
        placeholder="Pin Code"
        autoCapitalize="none"
        textContentType="PostalCode"
        keyBoardType="number-pad"
        style={styles.textInput}
      />
      <View style={styles.buttons}>
        <Button style={[styles.button, { backgroundColor: "#161616" }]}>
          Discard
        </Button>
        <Button style={styles.button}>Save</Button>
      </View>
    </SafeArea>
  );
};

export default PersonalInformationScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    // alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    // marginTop: 60,
    marginBottom: 30,
  },
  backButton: {
    left: 5,
  },
  textInput: {
    backgroundColor: "white",
    borderWidth: 1,
    color: "black",
    borderColor: "#ebebeb",
    borderRadius: 50,
    fontSize: 15,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  label: {
    fontSize: 12,
    marginLeft: 12,
    marginBottom: 5,
  },
  buttons: {
    flexDirection: "row",
    marginVertical: "15%",
  },
  button: {
    width: "48%",
    marginHorizontal: "2%",
    borderRadius: 30,
  },
});
