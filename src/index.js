import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class NPS extends Component {
  renderPopup = () => (
    <View style={styles.popup}>
      <Text>test</Text>
    </View>
  );

  render() {
    if (!this.props.show)
      return null;

    return (
      <View style={styles.container}>
        {this.renderPopup()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 9000,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  popup: {
    flex: 1,
    position: "absolute",
    backgroundColor: "white",
    width: 350,
    padding: 20,
    paddingBottom: 25
  },
});
