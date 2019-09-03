import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../../scaler.js';

class PodcastScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <View style ={{flex: 1}}>
      <ScrollView>
      <LinearGradient colors={['#71d2a5', '#71d2a5', '#71d2a5']} style={styles.background} location={[0.3, 0.4, 1]}>
        <View style= {styles.header}>
          <Text style= {styles.headText}>Podcasts on Mental Health</Text>
          <View>
            <View style= {styles.headContain}>
              <Text style= {styles.subHead}>Spotify Podcasts</Text>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={() => Linking.openURL('https://open.spotify.com/show/0184ojF3hjFhKfktahQK4G?si=UbCvKkcJRzO1pes2MIJHhA')}>
                <Text style= {styles.text1}>Savvy Psychologist</Text>
                <Text style= {styles.text2}>"She is like listening to a well informed aunt give advice"</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://open.spotify.com/show/464IOIGOsIUZPDV7ani1VB?si=zz-oqbDQR7urfq4lMht1BA');}}>
                <Text style= {styles.text1}>Black Mental Health</Text>
                <Text style= {styles.text2}>"Provides an African American lense to mental"</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://open.spotify.com/show/2zS57s6LwstXGD9gkoKWsC?si=LRWJVGB8RoibxSQKTfTncA');}}>
                <Text style= {styles.text1}>Mental health in Pop culture</Text>
                <Text style= {styles.text2}>"Professor and students analyze the sort of normalization of mental health issues in movies/ media/ television. Could be good to break stereotypes"</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.headContain}>
              <Text style= {styles.subHead}>YouTube Videos</Text>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/watch?v=S8bJ3YlgL1Q')}>
                <Text style= {styles.text1}>Casually suicidal</Text>
                <Text style= {styles.text2}>"TEDx talk, Adelphi Univ"</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=m-8tQ_TYLgk');}}>
                <Text style= {styles.text1}>How to connect with depressed friends</Text>
                <Text style= {styles.text2}></Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=JUedQ0_EGCQ');}}>
                <Text style= {styles.text1}>Living With High Functioning Anxiety</Text>
                <Text style= {styles.text2}></Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=2E4_m5dUE9s');}}>
                <Text style= {styles.text1}>Just Eat More</Text>
                <Text style= {styles.text2}></Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=Sdk7pLpbIls');}}>
                <Text style= {styles.text1}>Athletes and Mental Health</Text>
                <Text style= {styles.text2}></Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
      </ScrollView>
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
    backgroundColor: '#d5a6d1',
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

export default PodcastScreen;