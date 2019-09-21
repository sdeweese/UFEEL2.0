import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import Communications from 'react-native-communications';

class Help extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }
 
  /*call(ev) {
    ev.preventDefault();
    /*var phoneNumber[0] = '4085544444'
    var phoneNumber[1] = '18002738255',
    var phoneNumber[2] = '4157810500',
    var phoneNumber[3] = '4085544501',
    Linking.openURL(`tel:${phoneNumber}`)
  }*/

  render() {
    return (
      <LinearGradient colors={['#d5a6d1', '#d5a6d1', '#d5a6d1']} style={styles.background} location={[0.3, 0.4, 1]}>
        <View style= {styles.header}>
          <Text style= {styles.headText}>Emergency Contacts</Text>
        <View>
          <View style= {styles.cont}>
            <TouchableOpacity onPress={() => Linking.openURL('tel:4085544444')}>
              <Text style= {styles.text1}>Campus Safety Emergency or EMS</Text>
              <Text style= {styles.text2}>If you or someone you know is in immediate danger.</Text>
            </TouchableOpacity>
          </View>
          <View style= {styles.cont}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Caps')}>
              <Text style= {styles.text1}>CAPS: Counseling and Psychological Services</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL('tel:4085544501');}}>
              <Text style= {styles.text2}>To make an appointment for same or next day (M-F, 9am-3pm), call 408-554-4501.</Text>
            </TouchableOpacity>
          </View>
          <View style= {styles.cont}>
           <TouchableOpacity onPress={() => this.props.navigation.navigate('Shs')}>
              <Text style= {styles.text1}>SHS: Student Health Services</Text>
              <Text style= {styles.text2}>CHANGE THIS TEXT.</Text>
            </TouchableOpacity>
          </View>
          </View>
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
    height: verticalScale(700),
    alignItems: 'center',
  },
  cont: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#71d2a5',
    padding: 10,
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
  },
  addCont: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    width: 80,
    marginTop: 20,
    backgroundColor: '#83d2f0',
  },
  addText: {
    justifyContent:  'center',
    fontSize: 20,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default Help;
