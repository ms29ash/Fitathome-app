import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import DemoScreen from "../screens/DemoScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { useState } from "react";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const [auth, setAuth] = useState(false);
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={styles.tabs}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
        tabBarIconStyle={styles.icon}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-sharp" size={size} color={color} />
          ),
          headerShown: false,
        }}
        tabBarIconStyle={styles.icon}
      />
      <Tab.Screen
        name="Fire"
        component={DemoScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="fire" color={color} size={size} />
          ),
          headerShown: false,
        }}
        tabBarIconStyle={styles.icon}
      />
      <Tab.Screen
        name="Track"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Track",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="track-changes" color={color} size={size} />
          ),
          headerShown: false,
        }}
        tabBarIconStyle={styles.icon}
      />
      <Tab.Screen
        name="Cart"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" color={color} size={size} />
          ),
          headerShown: false,
        }}
        tabBarIconStyle={styles.icon}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabs: {
    tabBarActiveTintColor: "#bf0404",
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: "#fff",
      // position: "absolute",
      height: 55,
      bottom: 5,
      width: "95%",
      borderRadius: 30,
      marginLeft: "2.5%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4.84,
      elevation: 5,
    },
  },
  icon: {},
});
