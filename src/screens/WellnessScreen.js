import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Linking, ScrollView, Platform } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';

class WellnessScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <View style ={{flex: 1}}>
      <LinearGradient colors={['#60bb85', '#60bb85', '#60bb85']} style={styles.background} location={[0.3, 0.4, 1]}>
      <ScrollView>
        <View style= {styles.header}>
          <Text style= {styles.headText}>Wellness Resources</Text>
          <View>
            <View style= {styles.headContain}>
              <Text style= {styles.subHead}>Meditation Apps</Text>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={() => Linking.openURL('https://itunes.apple.com/us/app/headspace-meditation-sleep/id493145008?mt=8')}>
                <Text style= {styles.text1}>Headspace</Text>
                <Text style= {styles.text2}>"Headspace is your guide to health and happiness. It’s the simple way to let go of stress and get a better night’s rest. Learn to relax with guided meditations and mindfulness techniques that bring calm, wellness and balance to your life in just a few minutes a day."</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://itunes.apple.com/us/app/calm/id571800810?mt=8');}}>
                <Text style= {styles.text1}>Calm</Text>
                <Text style= {styles.text2}>"Calm is the #1 app for Sleep, Meditation and Relaxation. Join the millions experiencing better sleep, lower stress, and less anxiety with our guided meditations, Sleep Stories, breathing programs, stretching exercises, and relaxing music. Calm is recommended by top psychologists, therapists, and mental health experts."</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://itunes.apple.com/us/app/moodpath-depression-anxiety/id1052216403?mt=8');}}>
                <Text style= {styles.text1}>Moodpath</Text>
                <Text style= {styles.text2}>"Do you struggle with some of your thoughts and feelings? Are you looking for ways to improve your emotional well-being? Moodpath is your personalized mental health companion. Try it out and find a place to reflect and get information, encouragement, and guidance."</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.headContain}>
              <Text style= {styles.subHead}>Books and Info</Text>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.nami.org/Personal-Stories/-It-Gets-Better#')}>
                <Text style= {styles.text1}>NAMI</Text>
                <Text style= {styles.text2}>"National Alliance on Mental Illness: Personal Stories"</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.activeminds.org/');}}>
                <Text style= {styles.text1}>Active Minds</Text>
                <Text style= {styles.text2}>"Mental Health Coalition & Program"</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.everydayhealth.com/reviews/best-self-books-mental-health-anxiety/');}}>
                <Text style= {styles.text1}>Books</Text>
                <Text style= {styles.text2}>"Source for books on mental health and anxiety"</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </ScrollView>
      </LinearGradient>
      </View>
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
    backgroundColor: '#d7a3ce',
    padding: 20,
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
  }

});

export default WellnessScreen;
