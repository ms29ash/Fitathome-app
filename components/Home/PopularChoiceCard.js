import { StyleSheet, View, Image } from "react-native";
import React from "react";
import MyText from "../MyText";
import Icon from "react-native-vector-icons/AntDesign";
import Button from "./Button";
import Type from "./Type";

const PopularChoiceCard = ({ item }) => {
  return (
    <View style={styles.card} key={item._id.$oid}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <Button style={styles.button} />
      <MyText style={styles.title}>{item?.name}</MyText>
      <View style={styles.details}>
        <MyText style={{ marginRight: 10, fontSize: 13 }}>
          &#8377; {item.price}
        </MyText>
        <View style={styles.star}>
          <Icon name="star" size={15} color="#bf0404" />
          <MyText style={{ fontSize: 13, marginLeft: 5 }}>
            {item.ratings}
          </MyText>
        </View>
        <Type type={item.type} style={{ marginLeft: 10 }} />
      </View>
    </View>
  );
};

export default PopularChoiceCard;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 10,
    bottom: 60,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  image: {
    width: 250,
    marginRight: 10,
    height: 160,
    borderRadius: 10,
    resizeMode: "cover",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    width: 190,
    marginBottom: 5,
    marginLeft: 10,
  },
  details: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    flexDirection: "row",
    alignItems: "center",
  },
});
