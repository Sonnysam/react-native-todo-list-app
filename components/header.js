import React from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";

export default function Header() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>My Todo App</Text>
        <Image
          source={require("../assets/images/todo.png")}
          style={{ width: 70, height: 70, marginLeft: 10 }}
        />
      </View>
      <Text style={styles.subtitle}>
        Built with ❤ by{" "}
        <Text
          style={{ color: "rgb(96, 176, 244)" }}
          onPress={() => Linking.openURL("https://sonnytech.netlify.app/")}
        >
          Samuel Agbenyo
        </Text>
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    paddingTop: 38,
  },
  title: {
    textAlign: "center",
    color: "rgb(96, 176, 244)",
    fontWeight: "bold",
    fontSize: 20,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 7,
    // paddingVertical: 10,
  },
});
