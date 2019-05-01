import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Linking, Button, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import axios from 'axios';
import PropTypes from 'prop-types';

class Emotion3Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        sufEmotions: ["Agony", "Hurt"],
        sadEmotions: ["Depressed", "Sorrow"],
        disEmotions: ["Dismayed", "Displeased"],
        shameEmotions: ["Regretful", "Guilty"],
        negEmotions: ["Isolated", "Lonely"],
        stunEmotions: ["Shocked", "Dismayed"],
        confEmotions: ["Disillusioned", "Perplexed"],
        amazEmotions: ["Astonished", "Awe-struck"],
        overEmotions: ["Speechless", "Astounded"],
        moveEmotions: ["Stimulated", "Touched"],
        contEmotions: ["Pleased", "Satisfied"],
        hapEmotions: ["Amused", "Delighted"],
        proudEmotions: ["Triumphant", "Illustrious"],
        enthusEmotions: ["Zeal", "Excited"],
        elatEmotions: ["Jubilation", "Euphoric"],
        affEmotions: ["Fondness", "Romantic"],
        longEmotions: ["Sentimental", "Attracted"],
        desEmotions: ["Infatuation", "Passion"],
        tendEmotions: ["Caring", "Compassionate"],
        peaceEmotions: ["Satisfied", "Relieved"],
        scaredEmotions: ["Helpless", "Frightened"],
        terrEmotions: ["Hysterical", "Panic"],
        insEmotions: ["Inferior", "Inadequate"],
        nervEmotions: ["Worried", "Anxious"],
        horrEmotions: ["Mortified", "Dread"],
        rageEmotions: ["Hate", "Hostile"],
        exasEmotions: ["Agitated", "Frustrated"],
        irrEmotions: ["Annoyed", "Aggravated"],
        envyEmotions: ["Resentful", "Jealous"],
        disgEmotions: ["Contempt", "Revolted"]
    };
  }

  handleClick(ev, emo) {
    ev.preventDefault();

    this.props.setEmotion3(emo);
    var date = new Date();

    this.props.saveEmotions(date);
    this.props.navigation.navigate('Dashboard');
  }

  renderElement() {
    if (this.props.emotion.emotion1 === "Sadness") {
      if (this.props.emotion.emotion2 === "Sadness") {
        return this.state.sadEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Suffering") {
        return this.state.sufEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Disappointed") {
        return this.state.disEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Shameful") {
        return this.state.shameEmotions.map((emo) => {
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
        });
      } else {
        return this.state.negEmotions.map((emo) => {
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
        });
      }
    } else if (this.props.emotion.emotion1 === "Surprise") {
      if (this.props.emotion.emotion2 === "Stunned") {
        return this.state.stunEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Confused") {
        return this.state.confEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Amazed") {
        return this.state.amazEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Overcome") {
        return this.state.overEmotions.map((emo) => {
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
        });
      } else {
        return this.state.moveEmotions.map((emo) => {
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
        });
      }
    } else if (this.props.emotion.emotion1 === "Joy") {
      if (this.props.emotion.emotion2 === "Content") {
        return this.state.contEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Happy") {
        return this.state.hapEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Proud") {
        return this.state.proudEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Enthusiastic") {
        return this.state.enthusEmotions.map((emo) => {
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
        });
      } else {
        return this.state.elatEmotions.map((emo) => {
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
        });
      }
    } else if (this.props.emotion.emotion1 === "Love") {
      if (this.props.emotion.emotion2 === "Affectionate") {
        return this.state.affEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Longing") {
        return this.state.longEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Desire") {
        return this.state.desEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Tenderness") {
        return this.state.tendEmotions.map((emo) => {
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
        });
      } else {
        return this.state.peaceEmotions.map((emo) => {
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
        });
      }
    } else if (this.props.emotion.emotion1 === "Fear") {
      if (this.props.emotion.emotion2 === "Scared") {
        return this.state.scaredEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Terror") {
        return this.state.terrEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Insecure") {
        return this.state.insEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Nervous") {
        return this.state.nervEmotions.map((emo) => {
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
        });
      } else {
        return this.state.horrEmotions.map((emo) => {
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
        });
      }
    } else {
      if (this.props.emotion.emotion2 === "Rage") {
        return this.state.rageEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Exasperated") {
        return this.state.exasEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Irritable") {
        return this.state.irrEmotions.map((emo) => {
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
        });
      } else if (this.props.emotion.emotion2 === "Envy") {
        return this.state.envyEmotions.map((emo) => {
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
        });
      } else {
        return this.state.disgEmotions.map((emo) => {
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
        });
      }
    }
  }

  render() {
    return (
      <View>
        {this.renderElement()}
      </View>
    )
  }
}



Emotion3Screen.propTypes = {
  setEmotion3: PropTypes.func,
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      emotion: state.emotions,
      userInfo: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setEmotion3: (emotion3) => dispatch({type: 'EMOTION_3', emote3: emotion3}),
      saveEmotions: (time) => dispatch({type: 'SAVE_EMOTIONS', time: time})
    };
};

const Emotion3 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Emotion3Screen);

export default Emotion3;
