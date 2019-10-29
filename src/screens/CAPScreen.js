import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Linking, Image, ScrollView, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../scaler.js';

const { height } = Dimensions.get('window');

class Caps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      capSummary: "The Cowell Center Counseling and Psychological Services (CAPS) is applying for accreditation through the International Association of Counseling Services. We are staffed by licensed psychologists, psychology trainees – pre-doctoral trainees and advanced practicum students – and a psychiatrist. All mental health providers are by appointment only and will address your needs in a sensitive, compassionate, confidential and holistic manner. Outside of a mental health crisis, there are no walk-in appointments. As well as our on campus staff, CAPS offers assistance with referral to off-campus mental health professionals when you need, or prefer, long-term or specialty care. Please refer to our list of community referrals.",
      capMission: "The mission of Counseling and Psychological Services (CAPS) is to support students and student learning by providing quality counseling services to students and consultation and outreach programs to the campus community.",
      crisisHours: "Monday-Friday: 9:00am-3:00pm at Cowell Center",
      emergencies: "Contact SCU EMS for after-hours emergencies: Every day of the academic year from 5:00pm to 8:00am (except holidays, academic breaks and finals week)."
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
          onPress: () => console.log('Emergency Call'), //MAKE THIS WORK
        },
        {
          text: 'Non-Emergency Call',
          onPress: () => console.log('Non-Emergency Call'), //MAKE THIS WORK
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
      <View style= {{flex:1}}>
      <ScrollView
           ref={(scrollView) => { this.scrollView = scrollView; }}
            contentContainerStyle={{
              maxheight: 1000,
            }}
            scrollToOverflowEnabled={true}>
          <TouchableOpacity onPress={()=>{Linking.openURL('https://www.scu.edu/cowell/caps/');}}>
            <View style= {styles.title}>
              <Text style= {styles.titleText}>About CAPS</Text>
            </View>
          </TouchableOpacity>
          <View style= {styles.format}>
            <View style= {styles.info}>
              <Text style= {styles.text}>{this.state.capMission}</Text>
            </View>
            <View style= {styles.info}>
              <Text style= {styles.text}>{this.state.capSummary}</Text>
            </View>
            <View style= {styles.info}>
                <Text style= {styles.text1}>{this.state.crisisHours}</Text>
            </View>
            <View style= {styles.info}>
              <Text style= {styles.text1}>{this.state.emergencies}</Text>
            </View>
          </View>
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
                <Text style= {styles.butText}>More EMS Information</Text>
              </View>
            </TouchableOpacity>
          </View>
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: height,
  },
  link: {
    color: 'blue',
  },
  format: {
    flex: 1,
    paddingBottom: 5,
  },
  text: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    overflow: 'hidden',
    fontSize: 17,
  },
  info: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderColor: '#000',
    borderWidth: 2,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 20,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
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
    fontWeight: 'bold',
    borderColor: 'black',
  },
  emerg: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    padding: 2, 
  },
  button: {
    marginTop: 15,
    flex: 1,
    justifyContent:  'center',
    alignContent: 'center',
    borderWidth: 2,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    flexDirection: 'column'
  },
  butText: {
    justifyContent: 'center',
    fontSize: 12,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 15,
  },
  buttonContainer: {
      flex: 1,
      height: 100,
      flexDirection: 'row',
      justifyContent: 'center',
      margin: 5,
  },
  button1: {
    flexDirection: 'row',
    justifyContent:  'center',
  },


});

export default Caps;
