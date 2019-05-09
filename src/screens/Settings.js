import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import Communications from 'react-native-communications';

class Settings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  /*call(ev) {
    ev.preventDefault();
    /*var phoneNumber[0] = '4085544444'
    var phoneNumber[1] = '18002738255',
    var phoneNumber[2] = '4157810500',
    var phoneNumber[3] = '4085544501',
    Linking.openURL(`tel:${phoneNumber}`)
  }*/

  render() {
    return (
      <LinearGradient colors={['#6f6e6e', '#6f6e6e', '#6f6e6e']} style={styles.background} location={[0.3, 0.4, 1]}>
      <View style= {styles.top}>
        <View style= {styles.cont}><Text style= {styles.text1}>Change Password</Text></View>
        <View style= {styles.cont}><Text style= {styles.text1}>Change User Code</Text></View>
        <View style= {styles.cont}><Text style= {styles.text1}>Logout           </Text></View>
      </View>
      </LinearGradient>
    );
  }

}

const styles = StyleSheet.create ({

  background: {
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    height: verticalScale(700),
    alignItems: 'center',
  },
  cont: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#e4e7ea',
    padding: 20,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    width: 200
  },
  text1: {
    fontSize: 20,
  },
  top: {
    marginTop: 100,
  }

});

export default Settings;
