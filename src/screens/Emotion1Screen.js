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
                color="#fff"
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
    justifyContent: 'center',
    flex: 1,
    marginBottom: 5,

  },

  headText: {
    fontSize: 40,
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 90,

  },

  format: {
        flex: 1,
        justifyContent: 'space-between',
        justifyContent: 'center',
        backgroundColor: '#f5c278'
  },
  emoButton: {
    backgroundColor: '#ee7b86',
    borderRadius: 40,
    borderWidth: 2,
    padding: 20,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
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
