import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Linking, Platform, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import PropTypes from 'prop-types';
import PropTypes from 'prop-types';

class LockScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  check(e) {
    e.preventDefault();


  }

  render() {
    return (
      <View>
        <View style={styles.input}>
          <TextInput style={styles.inputText} autoCapitalize={"none"} placeholder={'Enter your 4-Digit PIN   '} onChangeText={(text) => this.setState({passcode: text})}/>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={(ev) => this.check(ev)}>
          <Text style={styles.loginText}> Enter </Text>
        </TouchableOpacity>
      </View>
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
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: verticalScale(400),
    width: scale(300),
    bottom: verticalScale(100)
  },
  input: {
    height: verticalScale(45),
    width: scale(300),
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 20
  },
  inputText: {
    position: 'absolute',
    fontFamily: 'Futura',
    fontSize: moderateScale(15),
    color: 'grey',
    left: scale(30)
  },
  loginButton: {
    height: verticalScale(45),
    width: scale(300),
    backgroundColor: '#192F4A',
    justifyContent: 'center',
    borderRadius: 20
  },
  loginText: {
    fontSize: moderateScale(15),
    color: 'white',
    alignSelf: 'center'
  },
  titleCont: {
    width: width,
    padding: 10,
    margin: 10,
  },
  titleText: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: 100,
    paddingLeft: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#fd9542',
  }
});

export default LockScreen;
