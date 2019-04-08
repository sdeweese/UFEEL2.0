import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';

class Resource extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <LinearGradient colors={['#BAE1FF', '#FFB3BA', '#8B9DC3']} style={styles.background} location={[0.3, 0.4, 1]}>
        <View>
          <View>
            <Text>
              "The mission of Counseling and Psychological Services (CAPS) is to support students and student learning by providing quality counseling services to students and consultation and outreach programs to the campus community."
            </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Caps')}>
              <Text>CAPS's Resources</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text>
              "Student Health Services seeks to participate in and support the vision of the University to make student learning its central focus. The health services is committed to delivering quality health care to students and helping to preserve their ability to function at their full potential."
            </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Shs')}>
              <Text>SHS's Resources</Text>
            </TouchableOpacity>
          </View>
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
  }
});

export default Resource;
