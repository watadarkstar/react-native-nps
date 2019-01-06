import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { NPS } from "react-native-nps";

export default class App extends Component {
  state = {
    show: false
  }

  onPress = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress} style={styles.button}>
          <Text style={styles.text}>Press Me</Text>
        </TouchableOpacity>
        <NPS show={this.state.show} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: "#eee",
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: "center",
  }
});
