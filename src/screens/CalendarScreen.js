import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Linking, ScrollView, Image, AsyncStorage } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import PropTypes from 'prop-types';

getEmotes = async () => {
  let existingData = await AsyncStorage.getItem('emotes');
  return existingData;
}

getJournal = async () => {
  let existingJournal = await AsyncStorage.getItem('diary');
  return existingJournal;
}

class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emotes: this.props.emotion.emotes,
      entries: this.props.diary.entries,
      currentMonth: "",
    };
  }

  componentDidMount() {
    /*console.log("Emotions in calendar screen: ", this.state.emotes);*/
    console.log("Diary: ", this.props.diary);
    story = `Story has read your diary!`;
    console.log(`${story}`); //at this point, the most recent jounral entry screen is not rendered, even though it was saved using the submit button on the diary screen

    var month = new Date().getMonth() + 1;
    var strmonth = month.toString();

    this.setState({
      currentMonth: strmonth
    });
  }

  renderEmotions() {
    let counter = 1;
    return this.state.emotes.map((emo) => {
      if (emo.month === this.state.currentMonth) {
        return (
          <View style= {styles.cont}>
              <Text style= {styles.text1}>Emotions</Text>
              <Text style= {styles.text2}>{emo.emotion1}</Text>
              <Text style= {styles.text2}>{emo.emotion2}</Text>
              <Text style= {styles.text2}>{emo.emotion3}</Text>
          </View>
        )
        counter++;
      }
    });
  }

  renderJournalEntries() {
    let counter = 1;
    return this.state.entries.map((e) => {
        return (
          <View style= {styles.cont}>
              <Text style= {styles.text1}>Time: {e.time}</Text>
              <Text style= {styles.text1}>{e.entry}</Text>
          </View>
        )
        counter++;
    }
    );
  }

  render() {
    return (
      <View style ={{flex: 1}}>
      <ScrollView>
          <View>
            {this.renderEmotions()}
          </View>
          <View>
            {this.renderJournalEntries()}
          </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create ({

  headText: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHead: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
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
    alignItems: 'center',
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 12,
  },
  headContain: {
    justifyContent: 'center',
    flexDirection: 'row',
  }

});


CalendarScreen.propTypes = {
  getEmotes: PropTypes.func,
  getTime: PropTypes.func,
  getDiary: PropTypes.func
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
      emotion: state.emotions,
      time: state.time,
      diary: state.diary
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      getEmotes: () => dispatch({type: 'SEND_EMOTES'}),
      getTime: () => dispatch({type: 'SEND_TIME'}),
      getDiary: () => dispatch({type: 'SEND_DIARY'}),
    };
};

const Calendar = connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarScreen);

export default Calendar;
