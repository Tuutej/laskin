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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [data, setData] = useState([]);

  function Calculator({ navigation, route }) {
    const { params } = route;

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
          <View style={{ width: 12 }} />
          <Button title="-" onPress={subtraction} />
          <View style={{ width: 12 }} />
          <Button
            title="History"
            onPress={() => navigation.navigate("History")}
          />
        </View>
      </View>
    );
  }

  function History({ route }) {
    const { params } = route;
    return (
      <View style={styles.container}>
        <Text>History</Text>
        <FlatList
          data={params.data}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          initialParams={{ data, setData }}
        />
        <Stack.Screen
          name="History"
          component={History}
          initialParams={{ data }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
