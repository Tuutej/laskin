import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const SimpleCalc = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [data, setData] = useState([]);

  const addition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(`Summa: ${sum}`);
    setData([...data, `Summa: ${num1} + ${num2} = ${sum}`]);
  };

  const subtraction = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(`Ero: ${difference}`);
    setData([...data, `Ero: ${num1} - ${num2} = ${difference}`]);
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 20 }}>{result}</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Syötä numero"
        value={num1}
        onChangeText={setNum1}
      />
      <View style={{ marginTop: 20 }} />
      <TextInput
        keyboardType="numeric"
        placeholder="Syötä numero"
        value={num2}
        onChangeText={setNum2}
      />
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={addition} />
        <View style={{ width: 40 }} />
        <Button title="-" onPress={subtraction} />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default SimpleCalc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
