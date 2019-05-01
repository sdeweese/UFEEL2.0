import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import axios from 'axios';
import bcrypt from 'react-native-bcrypt';
import PropTypes from 'prop-types';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  login(ev) {
    ev.preventDefault();

    var logSuccess = false;

    this.props.navigation.navigate('Emotion1');

    axios({
      method: 'POST',
      url: 'https://murmuring-river-99075.herokuapp.com/db/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        key: '$UFEELTEAM$',
        tableName: 'public.users',
        email: `email='${this.state.email}'`,
        password: `password='${this.state.password}'`
      }
    })
    .then(res => {
      console.log("res.data: ", res.data);
      if (res.data.success) {
        console.log("res.data.result[0].password: ", res.data.result[0].password);
        var password = this.state.password;
        bcrypt.compare(password, res.data.result[0].password, function(err, rest) {
          if (err) {
            console.log("Hello bcrypt error");
            console.log("Error: ", err);
          }

          if (rest) {
            console.log("Login success");
            logSuccess = true;
            console.log("Bcrypt Log success: ", logSuccess);
          } else {
            console.log("Passwords do not match");
            Alert.alert('Error', 'Passwords do not match!', {test: 'Ok'});
          }
        })
        .then(res => {
          console.log("Navigating");
          var userObj = { email: this.state.email };
          this.props.logSave(userObj);
          this.props.navigation.navigate('Emotion1');
        });
      } else {
        console.log("Error user not found");
        Alert.alert('Error', 'User not found!', {text: 'Ok'});
      }
    })
    .catch(err => {
      console.log("Hello errors");
      console.log('Error:', err);
    });

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

          <TouchableOpacity style={styles.loginButton} onPress={(ev) => this.login(ev)}>
            <Text style={styles.loginText}> LOGIN </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.loginText}> Register </Text>
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

LoginScreen.propTypes = {
  userProfile: PropTypes.func,
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      userInformation: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      logSave: (user) => dispatch({type: 'LOGIN_SAVE', userObj: user})
    };
};

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);

export default Login;
