import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Linking, Platform, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import Communications from 'react-native-communications';
import PropTypes from 'prop-types';

class SettingScreen extends React.Component {

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

  changeCode(e) {
    e.preventDefault();

    this.props.navigation.navigate('Pins');
  }

  render() {
    return (
      <LinearGradient colors={['white', 'white']} style={styles.background} location={[0.3, 0.4, 1]}>
      <View style= {styles.top}>
        <View style= {styles.cont}><Text style= {styles.text1}>Change Password</Text></View>
        <TouchableOpacity onPress={(ev) => this.changeCode(ev)}>
          <View style= {styles.cont}><Text style= {styles.text1}>Set or Change User Code</Text></View>
        </TouchableOpacity>
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
    backgroundColor: '#ffffff',
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

SettingScreen.propTypes = {
  setCode: PropTypes.func
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      code: state.code
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      addCode: (code) => dispatch({type: 'ADD_CODE', code: code}),
      // getDiary: () => dispatch({type: 'SEND_DIARY'}),
    };
};

const Settings = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingScreen);

export default Settings;
