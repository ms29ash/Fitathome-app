import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IntroScreen from "./screens/IntroScreen";
import LoadingScreen from "./screens/LoadingScreen";

export default function App() {
  return (
    // <LoadingScreen />;
    <IntroScreen />
  );
}
