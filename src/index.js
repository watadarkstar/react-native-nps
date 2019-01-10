import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { Planet } from 'react-native-kawaii';

export default class NPS extends Component {
  renderPopup = () => (
    <View style={styles.popup}>
      <Text style={styles.title}>How likely are you to recommend our app?</Text>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.iconContainer}><Planet size={30} mood="sad" color="#FF6347" style={styles.icon} /></TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}><Planet size={30} mood="sad" color="#FF6347" style={styles.icon} /></TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}><Planet size={30} mood="sad" color="#FF6347" style={styles.icon} /></TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}><Planet size={30} mood="sad" color="#FF6347" style={styles.icon} /></TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}><Planet size={30} mood="sad" color="#FF6347" style={styles.icon} /></TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}><Planet size={30} mood="sad" color="#FF6347" style={styles.icon} /></TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}><Planet size={30} mood="happy" color="#FCCB7E" style={styles.icon} /></TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}><Planet size={30} mood="happy" color="#FCCB7E" style={styles.icon} /></TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}><Planet size={30} mood="blissful" color="#9ACD32" style={styles.icon} /></TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}><Planet size={30} mood="blissful" color="#9ACD32" style={styles.icon} /></TouchableOpacity>
      </View>
      <View style={styles.iconsFooter}>
        <Text style={styles.iconsFooterText}>Not Likely</Text>
        <Text style={styles.iconsFooterText}>Very Likely</Text>
      </View>
      <Text style={styles.subtitle}>What could we do to improve?</Text>
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={4}
      />
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
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "white",
    width: 350,
    paddingTop: 40,
    paddingBottom: 25,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25
  },
  icons: {
    flexDirection: "row",
  },
  iconsFooter: {
    flex: 1,
    width: 350,
    paddingLeft: 17,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconsFooterText: {
    textAlign: "center",
  },
  icon: {},
  title: {
    paddingBottom: 20
  },
  subtitle: {
    paddingTop: 10,
    paddingBottom: 10
  },
  iconContainer: {
    paddingLeft: 3
  },
  input: {
    flex: 1,
    height: 90,
    width: 300,
    marginBottom: 20,
    borderColor: '#ddd',
    borderWidth: 1
  }
});
