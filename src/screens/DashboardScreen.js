import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <LinearGradient colors={['#FF1744', '#FF4081', '#E040FB']} style={styles.background}>
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Diary')}>
            <Text> DIARY </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Resource')}>
            <Text> Resource </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('User')}>
            <Text> ME </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Safety')}>
            <Image style={styles.lifeline} source={require('../../assets/telephone.png')}/>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create ({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: verticalScale(700),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bottom: {
    paddingBottom: 15,
    justifyContent: 'flex-end',
  },
  lifeline: {
    width: 50,
    height: 50,
  }
})
export default Dashboard;
