import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import { SketchPicker } from 'react-color';
import { Icon } from 'react-native-elements'

const { width } = Dimensions.get('window');

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  		setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
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
          <View style={styles.view}></View>
          <View style={styles.view2} />
          <View style={styles.view} />
          <View style={styles.view2} />
          <View style={styles.view} />
        </ScrollView>
      <View style={{flex: 2, flexDirection: 'column', justifyContent: 'space-evenly', bottom: 200, width}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
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
              color='#436ce8'
              size = {40}
              borderStyle= 'solid'
              borderWidth= {2}
              borderColor= 'black'
              flexWrap = 'wrap'
              onPress={() => this.props.navigation.navigate('Resource')}/>
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
              size = {40}
              onPress={() => this.props.navigation.navigate('Diary')} />
            <Icon
              raised
              containerStyle={{
                marginTop: 5,
                marginRight: 5,
                marginBottom: 5,
                marginleft: 5,
              }}
              name='heartbeat'
              type='font-awesome'
              color='#436ce8'
              size = {40}
              onPress={() => console.log('hello')} />
        </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Icon
            raised
            containerStyle={{
              marginTop: 5,
              marginRight: 5,
              marginBottom: 5,
              marginleft: 5,}}
            name='hand-heart'
            type='font-awesome'
            color='#ef0000'
            size = {40}
            onPress={() => console.log('hello')} />
          <Icon
          raised
          containerStyle={{
            marginTop: 5,
            marginRight: 5,
            marginBottom: 5,
            marginleft: 5,}}
            name='phone'
            type='font-awesome'
            color='#436ce8'
            size = {40}
            onPress={() => this.props.navigation.navigate('Safety')} />
          <Icon
            raised
            containerStyle={{
            marginTop: 5,
            marginRight: 5,
            marginBottom: 5,
            marginleft: 5,}}
            name='user'
            type='font-awesome'
            color='#436ce8'
            size = {40}
            onPress={() => console.log('hello')} />
        </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Icon
          raised
          containerStyle={{
            marginTop: 5,
            marginRight: 5,
            marginBottom: 5,
            marginleft: 5,}}
          name='calendar'
          type='font-awesome'
          color='#436ce8'
          size = {40}
          onPress={() => console.log('hello')} />
        <Icon
          raised
          containerStyle={{
            marginTop: 5,
            marginRight: 5,
            marginBottom: 5,
            marginleft: 5,}}
          name='cog'
          type='font-awesome'
          color='#436ce8'
          size = {40}
          onPress={() => console.log('hello')} />
        <Icon
          raised
          containerStyle={{
            marginTop: 5,
            marginRight: 5,
            marginBottom: 5,
            marginleft: 5,}}
          name='podcast'
          type='font-awesome'
          color='#436ce8'
          size = {40}
          onPress={() => console.log('hello')} />
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
    marginTop: 50,
    backgroundColor: 'rgba(230,230,250,0.8)',
    width: width - 80,
    margin: 10,
    height: 240,
    borderRadius: 10,
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
  }
})
export default Dashboard;
