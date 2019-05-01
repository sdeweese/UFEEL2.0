import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Linking, Button } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import PropTypes from 'prop-types';


class Emotion1Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emotions: ["Joy", "Love", "Fear", "Anger", "Sadness", "Surprise"]
    };
  }

  handleClick(ev, emo) {
    ev.preventDefault();

    console.log("Emotion: ", emo);

    this.props.setEmotion1(emo);
    this.props.navigation.navigate('Emotion2');
  }

  render() {
    return (
      <View>
        {this.state.emotions.map((emo) => {
          return (
            <Button
              onPress={(ev) => {
                var emot = emo;
                this.handleClick(ev, emot);
              }}
              title={emo}
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          )
        })}
      </View>
    )
  }
}

Emotion1Screen.propTypes = {
  setEmotion1: PropTypes.func,
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setEmotion1: (emotion) => dispatch({type: 'EMOTION_1', emote1: emotion})
    };
};

const Emotion1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Emotion1Screen);

export default Emotion1;
