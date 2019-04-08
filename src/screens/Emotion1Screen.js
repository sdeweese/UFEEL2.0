import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Linking } from 'react-native';
import { LinearGradient } from 'expo';
import { TranslateYAndOpacity, SharedElement } from 'react-native-motion';
import { scale, verticalScale, moderateScale } from '../../scaler.js';

class Emotion1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <TranslateYAndOpacity duration={250}>
        <View>

        </View>
      </TranslateYAndOpacity>
    )
  }
}
