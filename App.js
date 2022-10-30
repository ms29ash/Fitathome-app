import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import BottomTabs from "./navigation/BottomTabs";
import Navigation from "./navigation/Navigation";

export default function App() {
  const [auth, setAuth] = useState(false);
  return (
    <NavigationContainer>
      {auth === false ? <Navigation setAuth={setAuth} /> : <BottomTabs />}
    </NavigationContainer>
  );
}
