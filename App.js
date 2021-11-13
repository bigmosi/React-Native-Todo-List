/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState("");
  return (
    <SafeAreaView style={styles.root}>
      <View>
        <TextInput 
          value={userInput}
          onChangeText={text => setUserInput(text)}
          style={styles.textInput}
          placeholder={"Enter your todos..."}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root : {
    flex: 1
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddc8c4',
    width: 300,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 20,
    borderRadius: 10
  }
});

export default App;