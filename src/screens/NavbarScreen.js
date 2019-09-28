import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Linking, FlatList, ScrollView, Platform, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';
import { Lost, ListItem } from 'react-native-elements'
import { scale, verticalScale, moderateScale } from '../../scaler.js';

const { height } = Dimensions.get('window');

class NavBar extends React.Component {
  constructor(props) {
    super(props); 
    
    this.state = {
       
    }
};

  render() {
    return (
      <LinearGradient colors={['#ffffff','#ffffff']} style={styles.background}>
        <View style={styles.nav}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SafetyPlan')}>
          <Image source={require("./app-icons/safetyPlan.png")} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Wellness')}>
          <Image source={require("./app-icons/resources.png")} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Help')}>
          <Image source={require("./app-icons/scuResources.png")} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Calendar')}>
          <Image source={require("./app-icons/cal.png")} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Diary')}>
          <Image source={require("./app-icons/thoughts.png")} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>          
          <Image source={require("./app-icons/hamburger.png")} style={styles.img} />
        </TouchableOpacity>
        </View>
      </LinearGradient>
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
    height: height, /*verticalScale(700),*/
    alignItems: 'center',
  },
  cont: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#d7a3ce',
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    marginTop: height - 50,
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
  },
  img: {
    height: 30,
    width: 30,
    marginRight: 10,
    marginLeft: 10,
    padding: 0,

  },
  nav: {
    flex: 1, 
    flexDirection: 'row',
  }
});


export default NavBar;

