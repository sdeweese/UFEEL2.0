import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Dimensions, ScrollView, ListView, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import { SketchPicker } from 'react-color';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

getData = async () => {
  let existingData = await AsyncStorage.getItem('emotes');
  return existingData;
}

var first;
var second;
var third;
var fourth;
var fifth;

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: ["93% of your fellow Broncos have felt overwhelmed by all they had to do, at some point in the past 12 months.", "47% of your fellow Broncos have felt more than average stress in the past 12 months and 39% of them reported that this affected their academic performance.",
"You are not alone. 63% of your fellow Broncos have felt overwhelming anxiety at some point in the last 12 months and 25% of them reported that this affected their academic performance.",
"Did you know? 78% of your fellow Broncos have used alcohol in the last 30 days and 8% of them reported that this affected their academic performance.",
"59% of your fellow Broncos reported consuming 1-2 fruits or vegetables a day.",
"63% of your fellow Broncos reported doing moderate exercise for at least 30 minutes, 1-4 times a week.",
"You are not alone. 69% of your fellow Broncos have felt very lonely at some point in the last 12 months.",
"You are not alone. 39% of your fellow Broncos have felt so depressed it was difficult to funcion, at some point in the last 12 months and 16% of them reported that this affected their academic performance.",
"8% of your fellow Broncos seriously considered suicide at some point in the last 12 months.",
"1% of your fellow Broncos attempted suicide at some point in the last 12 months.",
"7% of your fellow Broncos intentionally cut, burned, bruised, or otherwise injured themselves at some point in the last 12 months.",
"One in 5 American adults experiences some form of mental illness in any given year.",
"1 in every 25 adults is living with a serious mental health condition such as schizophrenia, bipolar disorder or long-term recurring major depression.",
"Our greatest glory is not in never falling, but in rising every time we fall. — Confucius",
"It does not matter how slowly you go as long as you do not stop. – Confucius",
"Everything you’ve ever wanted is on the other side of fear. — George Addair",
"Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
"Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
"Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. ― Roy T. Bennett",
"Go forth and set the world on fire. -St. Ignatius",
"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. – Nelson Mandela",
"If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles. – Wayne Dyer",
"Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed. – Bob Riley",
"Start by doing what’s necessary; then do what’s possible; and suddenly you are doing the impossible. – Francis of Assisi",
"Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all. — Dale Carnegie",
"Strength does not come from physical capacity. It comes from an indomitable will. – Mahatma Gandhi",
"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. ― Roy T. Bennett",
"Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved. – Helen Keller",
"It is during our darkest moments that we must focus to see the light. — Aristotle Onassis",
"We don’t develop courage by being happy every day. We develop it by surviving difficult times and challenging adversity. – Barbara De Angelis",
"Perfection is not attainable, but if we chase perfection we can catch excellence. — Vince Lombardi",
"If you don’t like something, change it. If you can’t change it, change your attitude. – Maya Angelou",
"Remember that not getting what you want is sometimes a wonderful stroke of luck. —Dalai Lama",
"You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, ‘I lived through this horror. I can take the next thing that comes along. – Eleanor Roosevelt",
"We may encounter many defeats but we must not be defeated. – Maya Angelou",
"When obstacles arise, you change your direction to reach your goal, you do not change your decision to get there. – Zig Ziglar",
"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill",
"If you’re going through hell, keep going. - Winston Churchill",
"“You can’t keep the birds of sadness from flying over your head, but you can keep them from nesting in your hair.” - Sharon Creech",
"“The best way out is always through.” Robert Frost",
"“I thought I was alone who suffered. I went on top of the house, and found every house on fire.” - Baba Sheikh Farid",
"“Ring the bells that still can ring, forget your perfect offering, there is a crack in everything, that’s how the light gets in.” - Leonard Cohen",
"“We see things as we are, not as they are.” - Anaiïs Nin",
"“What we think, we become.” - Buddha"],
      firstQuote: "",
      secondQuote: "",
      thirdQuote: "",
      fourthQuote: "",
      fifthQuote: "",
    };
  }

  componentDidMount() {
      setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
      var month = new Date().getMonth() + 1;
      var strmonth = month.toString();
      var emotes1 = this.props.emotion.emotion1;
      var moodMonth = this.props.emotion.month;

      console.log("strmonth in dashboard: ", strmonth);
      console.log("emotes emotion1 in dashboard: ", emotes1);

      this.props.addGraph(emotes1, strmonth);
      // this.props.getDiary();

      first = Math.floor(Math.random() * this.state.quotes.length);
      second = Math.floor(Math.random() * this.state.quotes.length);

      while (second === first) {
         second = Math.floor(Math.random() * this.state.quotes.length);
      }

      third = Math.floor(Math.random() * this.state.quotes.length);

      while (third === second || third === first) {
        third = Math.floor(Math.random() * this.state.quotes.length);
      }

      fourth = Math.floor(Math.random() * this.state.quotes.length);

      while (fourth === third || fourth === second || fourth === first) {
        fourth = Math.floor(Math.random() * this.state.quotes.length);
      }

      fifth = Math.floor(Math.random() * this.state.quotes.length);

      while (fifth === fourth || fifth === third || fifth === second || fifth === first) {
        fifth = Math.floor(Math.random() * this.state.quotes.length);
      }

      this.setState({
        firstQuote: this.state.quotes[first],
        secondQuote: this.state.quotes[second],
        thirdQuote: this.state.quotes[third],
        fourthQuote: this.state.quotes[fourth],
        fifthQuote: this.state.quotes[fifth]
      });
  }

  render() {
      return (
        <LinearGradient colors={['#7BA9C7','#7BA9C7']} style={styles.background}>
          <ScrollView
            ref={(scrollView) => { this.scrollView = scrollView; }}
            contentContainerStyle={{
              height: 280,
              maxHeight: 280
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
            <View style={styles.view}><Text style= {styles.promptMes}>{this.state.quotes[first]}</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>{this.state.quotes[second]}</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>{this.state.quotes[third]}</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>{this.state.quotes[fourth]}</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>{this.state.quotes[fifth]}</Text></View>

          
          </ScrollView>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', bottom: 200, width}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View>
              <Icon
                raised
                containerStyle={{
                  marginTop: 5,
                  marginRight: 5,
                  marginBottom: 5,
                  marginleft: 5,
                }}
                name='plus-square'
                type='font-awesome'
                color='#7BA9C7'
                size = {45}
                borderStyle= 'solid'
                borderWidth= {2}
                borderColor= 'black'
                flexWrap = 'wrap'
                onPress={() => this.props.navigation.navigate('Resource')}/>
              <Text style= {styles.iconText}>Cowell</Text>
            </View>
            <View>
              <Icon
                raised
                containerStyle={{
                  marginTop: 5,
                  marginRight: 5,
                  marginBottom: 5,
                  marginleft: 5,
                }}
                name='pencil'
                type='font-awesome'
                color='#7BA9C7'
                size = {45}
                onPress={() => this.props.navigation.navigate('Diary')} />
              <Text style= {styles.iconText}>Journal</Text> 
              </View>
              <View>
              <Icon
                raised
                containerStyle={{
                  marginTop: 5,
                  marginRight: 5,
                  marginBottom: 5,
                  marginleft: 5,
                }}
                name='flower'
                type='material-community'
                color='#7BA9C7'
                size = {45}
                onPress={() => this.props.navigation.navigate('Wellness')} />
              <Text style= {styles.iconText}>Wellness</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View>
            <Icon
              raised
              containerStyle={{
                marginTop: 5,
                marginRight: 5,
                marginBottom: 5,
                marginleft: 5,}}
              name='human-greeting'
              type='material-community'
              color='#7BA9C7'
              size = {45}
              onPress={() => this.props.navigation.navigate('Help')} />
            <Text style= {styles.iconText}>Resources</Text>
          </View>
          <View>
            <Icon
              raised
              containerStyle={{
                marginTop: 5,
                marginRight: 5,
                marginBottom: 5,
                marginleft: 5,}}
              name='calendar' 
              type='font-awesome'
              color='#7BA9C7'
              size = {45}
              onPress={() => this.props.navigation.navigate('User')} />
            <Text style= {styles.iconText}>Calendar</Text>
          </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View>
            <Icon
              raised
              containerStyle={{
                marginTop: 5,
                marginRight: 5,
                marginBottom: 5,
                marginleft: 5,}}
              name='cog'
              type='font-awesome'
              color='#7BA9C7'
              size = {45}
              onPress={() => this.props.navigation.navigate('Settings')} />
            <Text style= {styles.iconText}>Settings</Text>
            </View>
            </View>
         {/*<View>
            <Icon
              raised
              containerStyle={{
                marginTop: 5,
                marginRight: 5,
                marginBottom: 5,
                marginleft: 5,}}
              name='podcast'
              type='font-awesome'
              color='#7BA9C7'
              size = {45}
              onPress={() => this.props.navigation.navigate('Podcast')} />
            <Text style= {styles.iconText}>Media</Text>
          </View>*/}
        
			     {/*<View>
            <Icon
              raised
              containerStyle={{
                marginTop: 5,
                marginRight: 5,
                marginBottom: 5,
                marginleft: 5,}}
              name='phone'
              type='font-awesome'
              color='#7BA9C7'
              size = {45}
              onPress={() => this.props.navigation.navigate('Safety')} /> 
            <Text style= {styles.iconText}>Contacts</Text> 
            </View> */}
          </View>
        </View>
      </LinearGradient>
              )
            }
          }

          const styles = StyleSheet.create ({
            background: {
              position: 'absolute',
              flex: 1,
              left: 0,
              right: 0,
              top: 0,
              height: verticalScale(700),
              alignItems: 'center',
            },
            bottom: {
              justifyContent: 'flex-end',
            },
            lifeline: {
              width: 50,
              height: 50,
            },
            view: {
              flex: 1,
              marginTop: 50,
              backgroundColor: 'rgba(230,230,250,0.8)',
              width: width - 80,
              margin: 10,
              height: 240,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              //paddingHorizontal : 30
            },
            view2: {
              marginTop: 50,
              backgroundColor: 'rgba(221,160,221,0.8)',
              width: width - 80,
              margin: 10,
              height: 240,
              borderRadius: 10,
              //paddingHorizontal : 30
            },
            quotes: {
              fontSize: 20,
              fontFamily: 'Cochin',
              textAlign: 'center',
              margin: 5,
            },
            iconText: {
              textAlign: 'center',
              width: 110,
              fontSize: 20,
              color: '#ffffff'
            },
            promptMes: {
              flex: 1,
              fontSize: 20,
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 70,
              padding: 10,
            },
          });

DashboardScreen.propTypes = {
  addGraph: PropTypes.func,
  getDiary: PropTypes.func
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      emotion: state.emotions,
      diary: state.diary
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      addGraph: (emotion1, month) => dispatch({type: 'ADD_GRAPH', emotype: emotion1, month: month}),
      // getDiary: () => dispatch({type: 'SEND_DIARY'}),
    };
};

const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardScreen);

export default Dashboard;
