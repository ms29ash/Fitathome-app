import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import MyText from "../MyText";
import { Divider } from "@rneui/themed";
import Icon from "react-native-vector-icons/AntDesign";
import Type from "./Type";
import Button from "./Button";
import RText from "../RText";

const TopPicksCard = ({ item }) => {
  return (
    <>
      <View style={styles.container}>
        <Button style={styles.button} color="#000" txtStyle={styles.btnText} />
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.wrapper}>
          <MyText fontWeight="SemiBold" style={styles.name} numberOfLines={2}>
            {item.name}
          </MyText>

          <Type type={item.type} />

          <View style={styles.details}>
            <RText style={styles.price}>&#8377;{item.price}</RText>
            <View style={styles.star}>
              <Icon
                style={{ marginRight: 5 }}
                name="star"
                size={15}
                color="#bf0404"
              />
              <RText style={{ fontSize: 12 }}>{item.ratings}</RText>
            </View>
          </View>
        </View>
      </View>
      <Divider
        color="#f2f2f2"
        style={{ marginBottom: 5 }}
        orientation="horizontal"
        width={1}
      />
    </>
  );
};

export default TopPicksCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 5,
    width: "90%",
  },
  image: {
    width: "35%",
    borderRadius: 10,
    height: 100,
    marginRight: 10,
    resizeMode: "cover",
  },
  wrapper: {
    width: "55%",
  },
  name: {
    width: "100%",
    flexShrink: 1,
    flexWrap: "wrap",
    fontSize: 14,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 12,
  },
  star: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    bottom: 0,
    right: -25,
    width: 70,
    height: 40,
    backgroundColor: "#f2f2f2",
    borderRadius: 30,
  },
  btnText: {
    fontSize: 12,
    color: "#000",
  },
});
