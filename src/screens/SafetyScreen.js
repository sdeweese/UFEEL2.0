import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Linking } from 'react-native';

class Safety extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  call(ev) {
    ev.preventDefault();

    var phoneNumber = 6502695502;

    Linking.openURL(`tel:${phoneNumber}`)
  }

  render() {
    return (
      <View>
        <Text>Emergency Contacts</Text>

        <View>
          <TouchableOpacity onPress={(ev) => this.call(ev)}>
            <Text>Mom</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

export default Safety;
