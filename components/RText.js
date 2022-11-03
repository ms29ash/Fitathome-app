import { StyleSheet, Text, View } from "react-native";
const RText = (props) => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: props.fontWeight
            ? `Roboto-${props.fontWeight}`
            : "Roboto-Regular",
        },
      ]}
    >
      {props.children}
    </Text>
  );
};

export default RText;
