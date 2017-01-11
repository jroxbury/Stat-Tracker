// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 15,
  },
  headerLeft: {
    flexGrow: 1,
    justifyContent: 'space-around',
    paddingLeft: 25,
    width: 90,
    height: 200,
    borderBottomWidth: 5,
  },
  headerRight: {
    flexGrow: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 200,
    backgroundColor: 'rgba(225, 225, 225, 0.4)',
    // borderBottomWidth: 2,
  },
  menuBtn: {
    fontSize: 28,
  },
  teamName: {
    fontSize: 30,
  },
  date: {
    fontSize: 12,
    color: '#a1a1a1'
  },
  players: {
    fontSize: 20,
  },
  active: {
    fontSize: 15,
  }
});

export default class Header extends Component {
  total = 30;
  injured = 2;

  state = {
    totalRoster: this.total,
    injuredRoster: this.injured,
  }

  getActive = () => {
    let activeRoster = 100 - (this.state.injuredRoster / this.state.totalRoster);
    return activeRoster.toFixed(2);
  }

  render() {
    const showActive = this.getActive();
    const currDate = new Date().toDateString();
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Text style={styles.menuBtn}>&#9776;</Text>
          <Text style={styles.teamName}>Team{"\n"}Name</Text>
          <Text style={styles.date}>{currDate}</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.players}>Players</Text>
          <Text style={styles.active}>{showActive} Active</Text>
        </View>
      </View>
    );
  }
}