import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Linking } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';

class Shs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shsummary: "The Cowell Center Student Health Services is applying for accreditation through the Accreditation Association for Ambulatory Health Care, Inc. We are staffed by licensed and/or board-certified nurse practitioners, a physician, a physician assistant, a dietitian and nurses who will address your needs in a sensitive, compassionate and confidential manner. \nThe campus physician, nurse practitioners, and physician assistant see students by appointment and will see walk-in students with urgent needs. \nThe nursing staff is available during all open hours to assist students with less urgent health care concerns. In addition to our regular staff, we offer appointments with specialists including a physical therapist assistant and a registered dietitian.",
      afterBusinessHours: "Contact SCU EMS for emergencies. Every day of the academic year from 5:00pm to 8:00am (except holidays, academic breaks and finals week).",
      nurseContact: "Contact Nurse Advice Line for medical advice and/or inquiries",
      closure: "The Student Health Services is closed during summer and all University holidays.",
    };
  }

  contact(ev) {
    ev.preventDefault();

    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Emergency Call',
          onPress: () => console.log('Emergency Call')
        },
        {
          text: 'Non-Emergency Call',
          onPress: () => console.log('Non-Emergency Call'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }

  linkems(ev) {
    ev.preventDefault();

    Linking.openURL('https://www.scu.edu/cowell/emergency-medical-services/');
  }

  linkshs(ev) {
    ev.preventDefault();

    Linking.openURL('https://www.scu.edu/cowell/student-health-services-shs/medical-services/other-services/');
  }

  render() {
    return (
      <LinearGradient colors={['#ed6b5e', '#ed6b5e', '#ed6b5e']} style={styles.background} location={[0.3, 0.4, 1]}>
        <View style= {styles.title}>
          <Text style={styles.titleText}>Student Health Services</Text>
        </View>
        <View style= {styles.format}>
            <Text style= {styles.text}>{this.state.shsummary}</Text>
            <Text style= {styles.contact}>After Business Hours</Text>
            <View style= {styles.info}>
              <Text style= {styles.text1}>{this.state.afterBusinessHours}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style= {styles.buttonContainer}>
                <TouchableOpacity onPress={(ev) => this.contact(ev)} style= {styles.button}>
                  <View style= {styles.button1}>
                    <Text style= {styles.butText}>Contact SCU EMS</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={(ev) => this.linkems(ev)} style= {styles.button}>
                  <View style= {styles.button1}>
                    <Text style= {styles.butText}>SCU EMS Information</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style= {styles.contact}>
              <Text style= {styles.contact}>Student Health Services Contact</Text>
            </View>
            <View style= {styles.info}>
              <Text style= {styles.text1}>{this.state.nurseContact}</Text>
            </View>
              <View style= {styles.buttonContainer}>
                <TouchableOpacity onPress={(ev) => this.linkshs(ev)} style= {styles.button}>
                  <View style= {styles.button1}>
                    <Text style= {styles.butText}>SHS Contact and Forms</Text>
                  </View>
                </TouchableOpacity>
              </View>
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
    height: verticalScale(650),
  },

  link: {
    color: 'blue',
  },
  format: {
    flex: 1,
    paddingBottom: 12,
  },
  text: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#addbcc',
    padding: 10,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    overflow: 'hidden',
    fontSize: 17,
  },
  info: {
    borderRadius: 10,
    backgroundColor: '#addbcc',
    borderColor: '#ed6b5e',
    borderWidth: 2,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 4,
    margin: 2,
    fontSize: 14,
  },
  text1: {
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 15,
  },
  title: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  emerg: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
  },
  button: {
    marginTop: 15,
    flex: 1,
    justifyContent:  'center',
    alignContent: 'center',
    borderWidth: 2,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#75b4e7',
    flexDirection: 'column',
    padding: 5,
    margin: 5,
  },
  butText: {
    justifyContent:  'center',
    fontSize: 12,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 15,
  },
  buttonContainer: {
      flex: 1,
      height: 50,
      flexDirection: 'row',
      justifyContent:  'space-around',
      margin: 5,
      padding: 5,
  },
  button1: {
    flexDirection: 'row',
    justifyContent:  'center',
  },
  contact: {
    fontSize: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
  }
});
export default Shs;
