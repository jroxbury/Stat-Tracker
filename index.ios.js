/** * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './App/components/header.js';
import TodoBody from './App/components/todo.js';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_aaNmUt7JMmrXTDR-N1JLmOo-BbX0AmQ",
  authDomain: "tracker-d27e4.firebaseapp.com",
  databaseURL: "https://tracker-d27e4.firebaseio.com",
  storageBucket: "tracker-d27e4.appspot.com",
  messagingSenderId: "557359419652"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Tracker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('Tracker', () => Tracker);
