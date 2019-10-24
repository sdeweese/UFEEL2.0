import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Linking, ScrollView, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../scaler.js';



class Shs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shsummary: "The Cowell Center Student Health Services is applying for accreditation through the Accreditation Association for Ambulatory Health Care, Inc. We are staffed by licensed and/or board-certified nurse practitioners, a physician, a physician assistant, a dietitian and nurses who will address your needs in a sensitive, compassionate and confidential manner. The campus physician, nurse practitioners, and physician assistant see students by appointment and will see walk-in students with urgent needs. The nursing staff is available during all open hours to assist students with less urgent health care concerns. In addition to our regular staff, we offer appointments with specialists including a physical therapist assistant and a registered dietitian.",
      shsMission: "Student Health Services seeks to participate in and support the vision of the University to make student learning its central focus. The health services is committed to delivering quality health care to students and helping to preserve their ability to function at their full potential.",
      nurseContact: "Contact the Nurse Advice Line for medical advice and/or inquiries",
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
  link: {
    color: 'blue',
  },
  format: {
    flex: 1,
    paddingBottom: 5,
  },
  text: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 15,
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
    padding: 5,
    margin: 10,
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
  }
});
export default Shs;
