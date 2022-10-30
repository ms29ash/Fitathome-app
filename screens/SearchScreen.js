import {
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import OIcon from "react-native-vector-icons/Octicons";
import Icon from "react-native-vector-icons/AntDesign";
import MyText from "../components/MyText";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
const recent = [
  "Chicken",
  "Mutton",
  "Protein",
  "Oatmeal",
  "Fruits",
  "Butter",
  "Chips",
  "Chicken",
  "Mutton",
  "Protein",
  "Oatmeal",
  "Fruits",
  "Butter",
  "Chips",
  "Chicken",
  "Mutton",
  "Protein",
  "Oatmeal",
  "Fruits",
  "Butter",
  "Chips",
  "Chicken",
  "Mutton",
  "Protein",
  "Oatmeal",
  "Fruits",
  "Butter",
  "Chips",
  "Chicken",
  "Mutton",
  "Protein",
  "Oatmeal",
  "Fruits",
  "Butter",
  "Chips",
];
const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Icon
            name="search1"
            size={25}
            color="#292929"
            style={{ marginLeft: 5 }}
          />
          <TextInput placeholder="Search" style={styles.search} />
          <TouchableOpacity>
            <Entypo name="circle-with-cross" size={24} color="#292929" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <OIcon
            name="filter"
            style={styles.filter}
            size={30}
            color="#292929"
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.recentSearch}>
        {recent.map((item, index) => (
          <View style={styles.recent} key={index}>
            <Image
              style={{ width: 24, height: 24, marginRight: 10 }}
              source={{
                uri: "https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/344/external-history-essentials-tanah-basah-basic-outline-tanah-basah.png",
              }}
            />
            <MyText>{item}</MyText>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  wrapper: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 50,
    alignItems: "center",
    width: "90%",
  },
  search: {
    width: "80%",
    marginLeft: 5,
    paddingVertical: 5,
  },
  filter: {
    marginLeft: 5,
  },
  recentSearch: {
    marginHorizontal: 30,
  },
  recent: {
    marginVertical: 10,
    flexDirection: "row",
  },
});
