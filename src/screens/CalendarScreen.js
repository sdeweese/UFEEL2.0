import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Linking, ScrollView, Image, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import PropTypes from 'prop-types';

getData = async () => {
  let existingData = await AsyncStorage.getItem('emotes');
  return existingData;
}

class CalendarScreen extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      emotes: this.props.emotion.emotes,
      currentMonth: ""
    };
  }

  componentDidMount() {
    console.log("Emotions in calendar screen: ", this.state.emotes);
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
            <TouchableOpacity>
              <Text style= {styles.text1}>Day: {counter}</Text>
              <Text style= {styles.text2}>{emo.emotion1}</Text>
            </TouchableOpacity>
          </View>
        )
        counter++;
      }
    });
  }

  renderCurrentMonth() {
      if (this.state.currentMonth === "1") {
        return (
          <Text style= {styles.headText}>Emotion Tracker for the month of January</Text>
        )
      } else if (this.state.currentMonth === "2") {
        return (
          <Text style= {styles.headText}>Emotion Tracker for the month of February</Text>
        )
      } else if (this.state.currentMonth === "3") {
        return (
          <Text style= {styles.headText}>Emotion Tracker for the month of March</Text>
        )
      } else if (this.state.currentMonth === "4") {
        return (
          <Text style= {styles.headText}>Emotion Tracker for the month of April</Text>
        )
      } else if (this.state.currentMonth === "5") {
        return (
          <Text style= {styles.headText}>Emotion Tracker for the month of May</Text>
        )
      } else if (this.state.currentMonth === "6") {
        return (
          <Text style= {styles.headText}>Emotion Tracker for the month of June</Text>
        )
      } else if (this.state.currentMonth === "7") {
        return (
          <Text style= {styles.headText}>Emotion Tracker for the month of July</Text>
        )
      } else if (this.state.currentMonth === "8") {
        return (
          <Text style= {styles.headText}>Emotion Tracker for the month of August</Text>
        )
      } else if (this.state.currentMonth === "9") {
        return (
          <Text style= {styles.headText}>Emotion Tracker for the month of September</Text>
        )
      } else if (this.state.currentMonth === "10") {
        return (
          <Text style= {styles.headText}>Emotion Tracker for the month of October</Text>
        )
      } else if (this.state.currentMonth === "11") {
        return (
          <Text style= {styles.headText}>Emotion Tracker for the month of November</Text>
        )
      } else {
        return (
          <Text style= {styles.headText}>Emotion Tracker for the month of December</Text>
        )
      }
  }

  render() {
    return (
      <View style ={{flex: 1}}>
      <ScrollView>
      <LinearGradient colors={['#71d2a5', '#71d2a5', '#71d2a5']} style={styles.background} location={[0.3, 0.4, 1]}>

        <View style= {styles.header}>
          {this.renderCurrentMonth()}
          <View>
            {this.renderEmotions()}
          </View>
        </View>
      </LinearGradient>
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
    backgroundColor: '#d5a6d1',
    padding: 20,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
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
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      emotion: state.emotions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const Calendar = connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarScreen);

export default Calendar;
