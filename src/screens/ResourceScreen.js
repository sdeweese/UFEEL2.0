import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';

class Resource extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <LinearGradient colors={['#f27474', '#f27474', '#e03c42']} style={styles.background} location={[0.3, 0.4, 1]}>
        <View style= {styles.head}>
          <Text style={styles.header}>What is Cowell?</Text>
        </View>
          <View>
              <View style= {styles.format1}>
                <View>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Caps')}>
                    <Text style= {styles.title}> CAPS</Text>
                    <Text style= {styles.link}>
                    "The mission of Counseling and Psychological Services (CAPS) is to support students and student learning by providing quality counseling services to students and consultation and outreach programs to the campus community."
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>


          <View style= {styles.format2}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Shs')}>
              <Text style= {styles.title}>SHS</Text>
                <Text style= {styles.link}>
                  "Student Health Services seeks to participate in and support the vision of the University to make student learning its central focus. The health services is committed to delivering quality health care to students and helping to preserve their ability to function at their full potential."
                </Text>
            </TouchableOpacity>
          </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create ({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: verticalScale(700),
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  styling: {
    padding: 10,
    fontSize: 15,
  },
  link: {
    color: 'black',
    fontSize: 20,
    marginBottom: 12,
    marginTop: 12,
  },
  format1: {
    padding: 10,
    height: verticalScale(200),
    bottom: 100,
    borderRadius: 15,
    borderColor: '#addbcc',
    backgroundColor: '#addbcc',
  },
  format2: {
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    height: verticalScale(200),
    bottom: 200,
    borderRadius: 15,
    borderColor: '#addbcc',
    backgroundColor: '#addbcc',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'center',
  },
  head: {
    marginBottom: 20,
  }

});

export default Resource;
