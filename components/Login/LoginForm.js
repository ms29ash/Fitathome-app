import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MyText from "../MyText";

const LoginForm = () => {
  const navigation = useNavigation();
  return (
    <View style={{ width: "85%" }}>
      <MyText fontWeight="Bold" style={styles.heading}>
        Log in to your{"\n"}account
      </MyText>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        textContentType="emailAddress"
        autoFocus={true}
        keyBoardType="email-address"
        style={styles.textInput}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        placeholder="Password"
        style={styles.textInput}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("ForgotPasswordScreen")}
      >
        <MyText style={styles.forgotPassword}>Forgot password?</MyText>
      </TouchableOpacity>
      <TouchableOpacity>
        <MyText fontWeight="Bold" style={styles.button}>
          Sign in
        </MyText>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <MyText style={{ fontSize: 12 }}>Don't have an account? </MyText>
        <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
          <MyText fontWeight="SemiBold" style={{ color: "#bf0404" }}>
            Signup
          </MyText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  heading: {
    color: "#bf0404",
    fontSize: 25,
    width: "100%",
    textAlign: "left",
    marginBottom: 30,
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
  forgotPassword: {
    color: "#bf0404",
    textAlign: "right",
    fontSize: 12,
  },
  button: {
    backgroundColor: "#bf0404",
    width: "100%",
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 50,
  },
});
