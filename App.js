import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import AuthNavigation from "./navigation/AuthNavigation";
import Nav from "./navigation/Nav";

export default function App() {
  const [auth, setAuth] = useState(false);
  return (
    <NavigationContainer>
      {auth === false ? (
        <AuthNavigation setAuth={setAuth} />
      ) : (
        <>
          <Nav />
        </>
      )}
    </NavigationContainer>
  );
}
