import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/CartScreen";
import PersonalInformationScreen from "../screens/PersonalInformationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator();

const Nav = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PersonalImformation"
        component={PersonalInformationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default Nav;
