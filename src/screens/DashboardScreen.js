import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Dimensions, ScrollView, AsyncStorage } from 'react-native';
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

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
      setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
      var month = new Date().getMonth() + 1;
      var strmonth = month.toString();
      var emotes1 = this.props.emotion.emotion1;

      console.log("strmonth in dashboard: ", strmonth);
      console.log("emotes emotion1 in dashboard: ", emotes1);

      this.props.addGraph(emotes1, strmonth);
      this.props.getDiary();
  }

  render() {
      return (
        <LinearGradient colors={['#fada5e','#fada5e']} style={styles.background}>
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
            <View style={styles.view}><Text style= {styles.promptMes}>93.4% of your fellow Broncos have felt overwhelmed by all they had to do, at some point in the past 12 months.</Text></View>
            <View style={styles.view2}><Text style= {styles.promptMes}>46.9% of your fellow Broncos have felt more than average stress in the past 12 months.</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>38.5% of your  fellow Broncos reported that this affected their academic performance.</Text></View>
            <View style={styles.view2}><Text style= {styles.promptMes}>63.2% of your fellow Broncos have felt overwhelming anxiety at some point in the last 12 months.</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>24.9% of your fellow Broncos reported that this affected their academic performance.</Text></View>
            <View style={styles.view2}><Text style= {styles.promptMes}>78.2 % of your fellow Broncos have used alcohol in the last 30 days.</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>3.5% of your fellow Broncos reported that alcohol use has affected their academic performance.</Text></View>
            <View style={styles.view2}><Text style= {styles.promptMes}>58.8% of your fellow Broncos reported consuming 1-2 fruits or vegetables a day</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>63.4% of your fellow Broncos reported doing moderate exercise for at least 30 minutes, 1-4 times a week.</Text></View>
            <View style={styles.view2}><Text style= {styles.promptMes}>69.3% of your fellow Broncos have felt very lonely at some point in the last 12 months.</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>38.7% of your fellow Broncos have felt so depressed it was difficult to funcion, at some point in the last 12 months.</Text></View>
            <View style={styles.view2}><Text style= {styles.promptMes}>15.6% of your fellow Broncos reported that this affected their academic performance.</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>0.8% of your fellow Broncos seriously considered suicide at some point in the last 12 months</Text></View>
            <View style={styles.view2}><Text style= {styles.promptMes}>1.3% of your fellow Broncos attempted suicide at some point in the last 12 months.</Text></View>
            <View style={styles.view}><Text style= {styles.promptMes}>38.7% of your fellow Broncos have felt so depressed it was difficult to funcion, at some point in the last 12 months.</Text></View>
            <View style={styles.view2}><Text style= {styles.promptMes}>7.1% of your fellow Broncos intentionally cut, burned, bruised, or otherwise injured themselves at some point in the last 12 months.</Text></View>
          </ScrollView>
        <View style={{flex: 2, flexDirection: 'column', justifyContent: 'space-evenly', bottom: 200, width}}>
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
                color='#e03c42'
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
                color='#436ce8'
                size = {45}
                onPress={() => this.props.navigation.navigate('Diary')} />
              <Text style= {styles.iconText}>Diary</Text>
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
                color='#5cbc83'
                size = {45}
                onPress={() => console.log('hello')} />
              <Text style= {styles.iconText}>Mental</Text>
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
              color='#b13ce8'
              size = {45}
              onPress={() => this.props.navigation.navigate('Safety')} />
            <Text style= {styles.iconText}>Safety</Text>
          </View>
          <View>
            <Icon
              raised
              containerStyle={{
                marginTop: 5,
                marginRight: 5,
                marginBottom: 5,
                marginleft: 5,}}
              name='user'
              type='font-awesome'
              color='#e56b20'
              size = {45}
              onPress={() => this.props.navigation.navigate('User')} />
            <Text style= {styles.iconText}>User</Text>
          </View>
          <View>
            <Icon
              raised
              containerStyle={{
                marginTop: 5,
                marginRight: 5,
                marginBottom: 5,
                marginleft: 5,}}
              name='podcast'
              type='font-awesome'
              color='#2b8221'
              size = {45}
              onPress={() => console.log('hello')} />
            <Text style= {styles.iconText}>Podcasts</Text>
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
              name='calendar'
              type='font-awesome'
              color='#772f75'
              size = {45}
            onPress={() => console.log('hello')} />
          <Text style= {styles.iconText}>Calendar</Text>
          </View>
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
              color='#7a7979'
              size = {45}
              onPress={() => console.log('hello')} />
            <Text style= {styles.iconText}>Settings</Text>
            </View>
            <View>
            <Icon
              raised
              containerStyle={{
                marginTop: 5,
                marginRight: 5,
                marginBottom: 5,
                marginleft: 5,}}
              name='phone'
              type='font-awesome'
              color='#11afa5'
              size = {45}
              onPress={() => this.props.navigation.navigate('Safety')} />
            <Text style= {styles.iconText}>Contacts</Text>
            </View>
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
              backgroundColor: 'rgba(221,160,221, 0.8)',
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
              color: '#1d14c9'
            },
            promptMes: {
              flex: 1,
              fontSize: 20,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
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
      getDiary: () => dispatch({type: 'SEND_DIARY'}),
    };
};

const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardScreen);

export default Dashboard;
