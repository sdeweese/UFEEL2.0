import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import axios from 'axios';
import PropTypes from 'prop-types';
import bcrypt from 'react-native-bcrypt';
import { connect } from 'react-redux';

class RegisterScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        confirm_pass: ''
      };
    }

    register(ev) {
      ev.preventDefault();

      if (this.state.password === this.state.confirm_pass) {
        console.log("Register password: ", this.state.password);
        var password = this.state.password;
        var email = this.state.email;
        var success = false;
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(password, salt, function(err, hash) {
        // Store hash in your password DB.
            if (err) {
              console.log("Bcrypt register error: ", err);
            }

            axios({
              method: 'POST',
              url: 'https://murmuring-river-99075.herokuapp.com/db/register',
              headers: {
                'Content-Type': 'application/json'
              },
              data: {
                key: '$UFEELTEAM$',
                tableName: 'public.users',
                email: `'${email}'`,
                password: `'${hash}'`
              }
            })
            .then(resp => {
              console.log(resp.data);
              if (resp.data.success) {
                console.log("Registration success");
                success = true;
              } else {
                console.log("Registration failed")
                Alert.alert('Registration Failed', 'Account with the email is already being used!', {text: 'Ok'});
              }
            })
            .catch(error => {
              console.log("Hello registration errors");
              console.log(error);
            });
          });
        });

        if (success) {
          this.props.navigation.navigate('Login');
        }
      } else {
        Alert.alert("Passwords do not match", 'Your passwords do not match. Please try again.', {text: 'Ok'});
      }
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
            <View style={styles.input}>
              <TextInput style={styles.inputText} secureTextEntry={true} placeholder={'Confirm Password                            '} onChangeText={(text) => this.setState({confirm_pass: text})}/>
            </View>

            <TouchableOpacity style={styles.registerButton} onPress={(ev) => this.register(ev)}>
              <Text style={styles.registerText}> Register </Text>
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
  registerButton: {
    height: verticalScale(45),
    width: scale(300),
    backgroundColor: '#192F4A',
    justifyContent: 'center',
    borderRadius: 20
  },
  registerText: {
    fontSize: moderateScale(15),
    color: 'white',
    alignSelf: 'center'
  }
});

RegisterScreen.propTypes = {
  userProf: PropTypes.func,
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      userInformation: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      registerUser: (newUser) => dispatch({type: 'SAVE_USER', newUser: newUser})
    };
};

const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen);

export default Register;
