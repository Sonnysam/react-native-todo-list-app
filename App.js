import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";


export default function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React Native", key: "1" },
    { text: "Learn Calculus", key: "2" },
    { text: "Rest", key: "3" },
  ]);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.text}</Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
