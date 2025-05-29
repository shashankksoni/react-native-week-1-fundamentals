import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native Counter</Text>
      <Button
        title={'Clicked ' + count + ' times'}
        onPress={() => setCount(count + 1)}
        color="#007AFF" // Optional: custom tint color
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFE',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
