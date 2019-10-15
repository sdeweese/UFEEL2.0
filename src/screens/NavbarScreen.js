import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Linking, FlatList, ScrollView, Platform, Dimensions } from 'react-native';
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
      );
  }
}

 

const styles = StyleSheet.create ({
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
	alignItems: 'flex-end',
	justifyContent: 'center',
	paddingBottom: '2%',
  }
});


export default NavBar;

