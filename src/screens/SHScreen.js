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
      <LinearGradient colors={['#BAE1FF', '#FFB3BA', '#8B9DC3']} style={styles.background} location={[0.3, 0.4, 1]}>
        <View>
          <Text>Student Health Services</Text>
          <View>
            <Text>{this.state.shsummary}</Text>
          </View>

          <View>
            <Text>After Business Hours</Text>
            <Text>{this.state.afterBusinessHours}</Text>
            <TouchableOpacity onPress={(ev) => this.contact(ev)}>
              <Text>Contact SCU EMS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(ev) => this.linkems(ev)}>
              <Text>More Information on SCU EMS</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text>Student Health Services Contact</Text>
            <Text>{this.state.nurseContact}</Text>
            <TouchableOpacity onPress={(ev) => this.linkshs(ev)}>
              <Text>SHS Contact and Forms</Text>
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
    height: verticalScale(700),
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});

export default Shs;
