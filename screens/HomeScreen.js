import {
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/Home/Header";
import PopularChoices from "../components/Home/PopularChoices";
import { Divider } from "@rneui/themed";
import Category from "../components/Home/Category";
import Recommendations from "../components/Home/Recommendations";
import BottomTabs from "../components/Global/BottomTabs";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Search />
        <ScrollView showsVerticalScrollIndicator={false}>
          <PopularChoices />
          <Divider color="#f2f2f2" orientation="horizontal" width={1} />
          <Category />
          <Recommendations />
        </ScrollView>
      </View>
      <BottomTabs />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
