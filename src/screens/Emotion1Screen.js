import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Linking, Button, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import PropTypes from 'prop-types';

clearAsyncStorage = async() => {
  AsyncStorage.clear();
}

class Emotion1Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emotions: ["Joy", "Love", "Fear", "Anger", "Sadness", "Surprise"]
    };
  }

  componentDidMount() {
    clearAsyncStorage();
    console.log("Cleared");
  }

  handleClick(ev, emo) {
    ev.preventDefault();

    console.log("Emotion: ", emo);

    this.props.setEmotion1(emo);
    this.props.navigation.navigate('Emotion2');
  }

  render() {
    return (
      <View style={styles.format}>
        <View style={styles.header}>
          <Text style={styles.headText}>How are you feeling today?</Text>
        </View>
        {this.state.emotions.map((emo) => {
          return (
            <View style={styles.emoButton}>
              <Button containerViewStyle={{width: '100%', marginLeft: 0}}
                onPress={(ev) => {
                  var emot = emo;
                  this.handleClick(ev, emot);
                }}
                title={emo}
                color="#000"
                accessibilityLabel="Learn more about this purple button"
                />
            </View>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create ({

  header: {
    marginBottom: 5,

  },

  headText: {
    fontSize: 30,
    justifyContent: 'center',
	textAlign: 'center',
  },

  format: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#ffffff'
  },
  emoButton: {
    backgroundColor: '#ffffff',
    borderRadius: 40,
    borderWidth: 2,
    margin: '2%',
    fontSize: 30,
  },
  text: {
    fontSize: 30,
  },

});

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
