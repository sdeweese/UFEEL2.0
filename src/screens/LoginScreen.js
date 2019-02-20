import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  login(ev) {
    ev.preventDefault();
  }

  render() {
    return (
      <LinearGradient colors={['#3B5998', '#8B9DC3', '#DFE3EE']} style={styles.background} location={[0.3, 0.4, 1]}>
        <View style={styles.container}>

          <View style={styles.input}>
            <TextInput style={styles.inputText} autoCapitalize={"none"} placeholder={'SCU Email                          '} onChangeText={(text) => this.setState({email: text})}/>
          </View>
          <View style={styles.input}>
            <TextInput style={styles.inputText} secureTextEntry={true} placeholder={'Password                            '} onChangeText={(text) => this.setState({password: text})}/>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Dashboard')}>
            <Text style={styles.loginText}> LOGIN </Text>
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
  }
});

export default Login;
