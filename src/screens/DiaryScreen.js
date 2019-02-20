import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';

class AutoExpandingTextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: '', height: 0};
  }
  render() {
    return (
      <TextInput
        {...this.props}
        multiline={true}
        onChangeText={(text) => {
            this.setState({ text })
        }}
        onContentSizeChange={(event) => {
            this.setState({ height: event.nativeEvent.contentSize.height })
        }}
        style={styles.inputText}
        value={this.state.text}
        placeholder={'...............'}
      />
    );
  }
}

class Diary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      height: 0
    };
  }

  render() {
    return (
      <LinearGradient colors={['#BAE1FF', '#FFB3BA', '#8B9DC3']} style={styles.background} location={[0.3, 0.4, 1]}>
        <View style={styles.input}>
          <AutoExpandingTextInput />
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
  inputText: {
    fontFamily: 'Futura',
    fontSize: moderateScale(15),
    color: 'grey',
  },
  input: {
    height: verticalScale(400),
    width: scale(300),
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 20
  }
});

export default Diary;
