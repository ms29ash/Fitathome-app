import { StatusBar, StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Home/Header";
import PopularChoices from "../components/Home/PopularChoices";
import { Divider } from "@rneui/themed";
import Category from "../components/Home/Category";
import TopPicks from "../components/Home/TopPicks";
import SafeArea from "../components/SafeArea";
import ProteinTracker from "../components/Home/ProteinTracker";

const HomeScreen = () => {
  return (
    <SafeArea style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProteinTracker />
          <PopularChoices />
          <Divider color="#f2f2f2" orientation="horizontal" width={1} />
          <Category />
          <TopPicks />
        </ScrollView>
      </View>
      {/* <BottomTabs /> */}
    </SafeArea>
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
