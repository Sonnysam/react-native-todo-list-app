import { StyleSheet, Text, Pressable, View, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }



  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add Todo or tap on the bin to delete"
        onChangeText={changeHandler}
      />
      {/* <Button title="Add Todo" color={"rgb(96, 176, 244)"} onPress={() => submitHandler(text)} style={styles.btn}/> */}
        <Pressable onPress={() => submitHandler(text)} style={styles.btn}>
            <Text style={styles.btnText}>Add Todo</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    marginTop: 30,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    fontSize: 14,
    marginHorizontal: 12,
    fontWeight: "bold",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 33.33,
    elevation: 10,
    backgroundColor: "rgb(96, 176, 244)",
    marginHorizontal: 135,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});