import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Linking, FlatList, ScrollView, SafeAreaView, Platform, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';
import { Lost, ListItem } from 'react-native-elements'
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import Constants from 'expo-constants';


const { height } = Dimensions.get('window');

function Item({ id, title, img, link, description}) {
    return ( 
          <View style= {styles.cont}>
              <TouchableOpacity onPress={() => Linking.openURL(link)}>
                <Image source={require(img)} style={styles.img} />
              </TouchableOpacity>
              <Text style= {styles.text1}>title</Text>
              <Text style= {styles.text2}>description</Text>
          </View>
    );
}

    //list of applications that could be used as resources for the peeps
    const APPS = [ 
           {
            title: "Headspace",
            img: "./app-icons/headspace.jpg",
            link: "https://www.headspace.com/headspace-meditation-app",
            description: "Headspace is your guide to health and happiness. It’s the simple way to let go of stress and get a better night’s rest. Learn to relax with guided meditations and mindfulness techniques that bring calm, wellness and balance to your life in just a few minutes a day.",
           },
    ]; 


class Scroll extends React.Component {
  constructor(props) {
    super(props); 
    
    this.state = {
       
    }
  };
    
    


  render() {
    return (
      <SafeAreaView style={styles.container}>
      <View style= {styles.headContain}>
              <Text style= {styles.subHead}>Meditation Apps</Text>
      </View>
        <FlatList
              data={APPS}
              renderItem{({ item }) => (
                <Item
                  title={item.title}
                  img={item.img}
                  link={item.link}
                  description={item.description}
                />
              )}
              keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


export default Scroll;
