import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import IntroScreen from "./screens/IntroScreen";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

export default function App() {
  return (
    // <LoadingScreen />;
    // <IntroScreen />
    // <LoginScreen />
    // <SignupScreen />
    <ForgotPasswordScreen />
  );
}
