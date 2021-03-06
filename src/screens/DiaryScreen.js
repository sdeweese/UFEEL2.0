import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Icon } from 'react-native-elements'
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

class DiaryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      height: 0,
      textHeight: 50
    };
  }

  handleSave(ev) {
    ev.preventDefault();
    if(this.state.text.localeCompare("") != 0) { // 0 = an exact match
      this.props.saveDiary(this.state.text);
    }
    this.props.navigation.navigate('NavBar'); // TODO: this should go to the Calendar screen
  }

  render() {
      return (
        <View style={styles.background}>
          <View style= {styles.mes}>
            <Text style= {styles.mesText}>How are you feeling today?</Text>
          </View>
          <View style= {styles.mes}>
            <Text style= {styles.prompt}>For inspiration, try using one of these prompts</Text>
          </View>
          <ScrollView
            ref={(scrollView) => { this.scrollView = scrollView; }}
            contentContainerStyle={{
              height: 100,
              maxHeight: 100
            }}
            showsHorizontalScrollIndicator={false}
            horizontal= {true}
            decelerationRate={0}
            snapToInterval={width - 60}
            snapToAlignment={"center"}
            contentInset={{
              top: 0,
              left: 30,
              bottom: 0,
              right: 30,
            }}>
            <View style={styles.view}><Text style= {styles.promptMes}>Free Write</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>Right now my greatest challenge is...</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>Positives of today were... Negatives about today were...</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>When times get tough I want to remember that...</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>Write a love letter to yourself... </Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>On a scale of 1-10 my mental health is at a _____ because...</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>Who has been your biggest supporter? Write that person a thank you letter...</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>A fear I would like to overcome is... I can do these things to start overcoming it...</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>Name ten things you can start doing to take care of yourself.</Text></View>
          </ScrollView>
          <View style={styles.input}>
          <TextInput
            {...this.props}
            multiline={true}
            onChangeText={(text) => {
                this.setState({ text })
            }}
            onContentSizeChange={(event) => {
                this.setState({ textHeight: event.nativeEvent.contentSize.height })
            }}
            style={styles.inputText}
            value={this.state.text}
            placeholder={'Share your thoughts here'}
          />
          </View>
          <View style = {styles.submit}>
          <TouchableOpacity>
            <Icon
              raised
              // containerStyle={{
              //   marginTop: 5,
              //   marginRight: 5,
              //   marginBottom: 5,
              //   marginleft: 5,
              // }}
              name='check-circle'
              type='font-awesome'
              color='black'
              size = {40}
              borderStyle= 'solid'
              borderWidth= {2}
              borderColor= 'black'
              flexWrap = 'wrap'
              onPress={(ev) => this.handleSave(ev)}/>
          </TouchableOpacity>
          </View>
        </View>
      )
    }
  }


  const styles = StyleSheet.create ({
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      opacity: 0.7,
      height: verticalScale(600),
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    inputText: {
      fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Futura',
      fontSize: moderateScale(15),
      color: 'black',
      paddingLeft: 15,
      paddingHorizontal: 15,
      alignItems: 'center',
    },
    input: {
      height: verticalScale(100),
      width: scale(300),
      bottom: 150,
      borderColor: 'black',
      borderWidth: 2,
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      marginLeft: 10,
      borderRadius: 10,
    },
    view: {
      borderColor: 'black',
      borderStyle: 'solid',
      marginTop: 50,
      backgroundColor: 'white',
      width: width - 80,
      margin: 10,
      marginTop: 4,
      height: 150,
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    mes: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 3,
      paddingTop: 6,
      margin: 10,
    },
    mesText: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    prompt: {
      fontSize: 15,
    },
    promptMes: {
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      justifyContent: 'space-around',
    },
    submit: {
      bottom: 150,
    }
  });

DiaryScreen.propTypes = {
  saveDiary: PropTypes.func,
  getDiary: PropTypes.func
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
      diary: state.diary
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      saveDiary: (entry) => dispatch({type: 'SAVE_DIARY', entry: entry}),
      getDiary: () => dispatch({type: 'SEND_DIARY'}),
    };
};

const Diary = connect(
  mapStateToProps,
  mapDispatchToProps
)(DiaryScreen);

export default Diary;
