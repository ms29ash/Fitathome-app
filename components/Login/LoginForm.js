import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const LoginForm = () => {
  return (
    <View style={{ width: "85%" }}>
      <Text style={styles.heading}>Log in to your{"\n"}account</Text>
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
      <Text style={styles.forgotPassword}>Forgot password?</Text>
      <TouchableOpacity>
        <Text style={styles.button}>Sign in</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={{ color: "#bf0404", fontWeight: "600" }}>Signup</Text>
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
    fontWeight: "bold",
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
