import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
      <Text style={styles.square}></Text>
      <MaterialIcons name="delete" size={24} color="black" style={styles.del} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 17,
    paddingHorizontal: 40,
    marginTop: 10,
    borderColor: "#bbb",
    backgroundColor: "rgb(96, 176, 244)",
    color: "white",
    borderRadius: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  square: {
    width: 10,
    height: 10,
    backgroundColor: "white",
    marginRight: 10,
    opacity: 0.8,
    borderRadius: 5,
    top: -34.5,
    marginLeft: 12,
  },
  del: {
    position: "absolute",
    right: 12,
    top: 27,
    color: "rgb(245, 87, 66)",
  },
});
