import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Linking, Button } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import PropTypes from 'prop-types';

class Emotion2Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sad_Emotions: ["Suffering", "Sadness", "Disappointed", "Shameful", "Neglected"],
      sur_Emotions: ["Stunned", "Confused", "Amazed", "Overcome", "Moved"],
      joy_Emotions: ["Content", "Happy", "Proud", "Enthusiastic", "Elation"],
      lov_Emotions: ["Affectionate", "Longing", "Desire", "Tenderness", "Peaceful"],
      fear_Emotions: ["Scared", "Terror", "Insecure", "Nervous", "Horror"],
      ang_Emotions: ["Rage", "Exasperated", "Irritable", "Envy", "Disgust"]
    };
  }

  handleClick(ev, emo) {
    ev.preventDefault();

    console.log("Emotion: ", emo);
    this.props.setEmotion2(emo);
    this.props.navigation.navigate('Emotion3'); 
  }

  renderElement() {
    if (this.props.emotion.emotion1 === "Sadness") {
      return this.state.sad_Emotions.map((emo) => {

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
      });
    } else if (this.props.emotion.emotion1 === "Surprise") {
      return this.state.sur_Emotions.map((emo) => {
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
      });
    } else if (this.props.emotion.emotion1 === "Joy") {
      return this.state.joy_Emotions.map((emo) => {
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
      });
    } else if (this.props.emotion.emotion1 === "Love") {
      return this.state.lov_Emotions.map((emo) => {
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
      });
    } else if (this.props.emotion.emotion1 === "Fear") {
      return this.state.fear_Emotions.map((emo) => {
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
      });
    } else {
      return this.state.ang_Emotions.map((emo) => {
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
      });
    }
  }

  render() {
    return (
      <View style= {styles.border}>
        {this.renderElement()}
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
        backgroundColor: '#ffffff'
  },
  emoButton: {
    justifyContent: 'space-between',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
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
  border: {
    height: verticalScale(700),
    backgroundColor: '#ffffff'
  }

});

Emotion2Screen.propTypes = {
  setEmotion2: PropTypes.func,
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      emotion: state.emotions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setEmotion2: (emotion2) => dispatch({type: 'EMOTION_2', emote2: emotion2})
    };
};

const Emotion2 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Emotion2Screen);

export default Emotion2;
