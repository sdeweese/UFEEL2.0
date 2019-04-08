import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Linking } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';

class Caps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      capSummary: "The Cowell Center Counseling and Psychological Services (CAPS) is applying for accreditation through the International Association of Counseling Services. We are staffed by licensed psychologists, psychology trainees – pre-doctoral trainees and advanced practicum students – and a psychiatrist. All mental health providers are by appointment only and will address your needs in a sensitive, compassionate, confidential and holistic manner. \nOutside of a mental health crisis, there are no walk-in appointments. \nAs well as our on campus staff, CAPS offers assistance with referral to off-campus mental health professionals when you need, or prefer, long-term or specialty care. Please refer to our list of community referrals.",
      crisisHours: "Monday-Friday: 9:00am-3:00pm at Cowell Center \n",
      afterBusinessHours: "Contact Resident Director or Campus Safety \n",
      emergencies: "Contact SCU EMS for after-hours emergencies: Every day of the academic year from 5:00pm to 8:00am (except holidays, academic breaks and finals week). \n"
    };
  }

  contact(ev) {
    ev.preventDefault();

    Alert.alert(
      'SCU Emergency Medical Services',
      'Emergency and Non-Emergency Contact',
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

  render() {
    return (
      <LinearGradient colors={['#BAE1FF', '#FFB3BA', '#8B9DC3']} style={styles.background} location={[0.3, 0.4, 1]}>
        <View>
          <Text>{this.state.capSummary}</Text>
          <View>
            <Text>{this.state.crisisHours}</Text>
            <Text>{this.state.afterBusinessHours}</Text>
          </View>
          <View>
            <Text>Emergencies</Text>
            <Text>{this.state.emergencies}</Text>
            <TouchableOpacity onPress={(ev) => this.contact(ev)}>
              <Text>Contact SCU EMS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(ev) => this.linkems(ev)}>
              <Text>More Information on SCU EMS</Text>
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

export default Caps;
