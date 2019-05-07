import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Linking, Image } from 'react-native';
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
      <LinearGradient colors={['#ed6b5e', '#ed6b5e', '#ed6b5e']} style={styles.background} location={[0.3, 0.4, 1]}>
          <View style= {styles.title}>
            <Text style= {styles.titleText}>About CAPS</Text>
          </View>
          <View style= {styles.format}>
            <Text style= {styles.text}>{this.state.capSummary}</Text>
            <View style= {styles.info}>
                <Text style= {styles.text1}>{this.state.crisisHours}</Text>
            </View>
            <View style= {styles.info}>
              <Text style= {styles.text1}>{this.state.afterBusinessHours}</Text>
            </View>
            <View style= {styles.emerg}>
              <Text style= {styles.emerg}>Emergencies</Text>
              <View style= {styles.info}>
                <Text style= {styles.text1}>{this.state.emergencies}</Text>
              </View>
            </View>
          <View style={{ flexDirection: 'row' }}>
          <View style= {styles.buttonContainer}>
            <TouchableOpacity onPress={(ev) => this.contact(ev)} style= {styles.button}>
              <View style= {styles.button1}>
                <Text style= {styles.butText}>Contact SCU EMS</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style= {styles.buttonContainer}>
            <TouchableOpacity onPress={(ev) => this.linkems(ev)} style= {styles.button}>
              <View style= {styles.button1}>
                <Text style= {styles.butText}>More Information on SCU EMS</Text>
              </View>
            </TouchableOpacity>
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
    padding: 2,
    margin: 5,
    fontSize: 15,
  },
  text1: {
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 17,
  },
  title: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  emerg: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
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
    flexDirection: 'column'
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
      justifyContent:  'center',
      margin: 5,
  },
  button1: {
    flexDirection: 'row',
    justifyContent:  'center',
  },


});

export default Caps;
