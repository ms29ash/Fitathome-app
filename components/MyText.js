import { StyleSheet, Text, View } from "react-native";
const MyText = (props) => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: props.fontWeight
            ? `Montserrat-${props.fontWeight}`
            : "Montserrat-Regular",
        },
      ]}
    >
      {props.children}
    </Text>
  );
};

export default MyText;

const styles = StyleSheet.create({});
