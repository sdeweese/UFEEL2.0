import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Linking, ScrollView, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../scaler.js';



class Shs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shsummary: "The Cowell Center Student Health Services is applying for accreditation through the Accreditation Association for Ambulatory Health Care, Inc. We are staffed by licensed and/or board-certified nurse practitioners, a physician, a physician assistant, a dietitian and nurses who will address your needs in a sensitive, compassionate and confidential manner. The campus physician, nurse practitioners, and physician assistant see students by appointment and will see walk-in students with urgent needs. The nursing staff is available during all open hours to assist students with less urgent health care concerns. In addition to our regular staff, we offer appointments with specialists including a physical therapist assistant and a registered dietitian.",
      shsMission: "Student Health Services seeks to participate in and support the vision of the University to make student learning its central focus. The health services is committed to delivering quality health care to students and helping to preserve their ability to function at their full potential.",
      nurseContact: "Contact Nurse Advice Line for medical advice and/or inquiries",
      closure: "The Student Health Services is closed during summer and all University holidays.",
    };
  }

  linkshs(ev) {
    ev.preventDefault();

    Linking.openURL('https://www.scu.edu/cowell/student-health-services-shs/medical-services/other-services/');
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
        <View style= {styles.title}>
          <Text style={styles.titleText}>Student Health Services</Text>
        </View>
        <View style= {styles.format}>
          <View style= {styles.info}>
            <Text style= {styles.text}>{this.state.shsummary}</Text>
          </View>
          <View style= {styles.info}>
            <Text style= {styles.text}>{this.state.shsMission}</Text>
          </View>
          <View style= {styles.info}>
            <Text style= {styles.text}>{this.state.nurseContact}</Text>
          </View>
              <View style= {styles.buttonContainer}>
                <TouchableOpacity onPress={(ev) => this.linkshs(ev)} style= {styles.button}>
                  <View style= {styles.button1}>
                    <Text style= {styles.butText}>SHS Contact and Forms</Text>
                  </View>
                </TouchableOpacity>
              </View>
          </View>
      </ScrollView>
      </View>
    );
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
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
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
    backgroundColor: '#fff',
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
      padding: 20,
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
