import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, FlatList, Dimensions, Text, Modal, TextInput, View, TouchableOpacity, Image, Linking, AsyncStorage, TouchableHighlight, Alert } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import PropTypes from 'prop-types';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import { LinearGradient } from 'expo';

const { width } = Dimensions.get('window');

class EntryScreen extends React.Component {
  constructor(props) {
    super(props);

    console.log("Diary stuff in entry: ", this.props.diary);

    this.state = {
      entries: this.props.diary,
      modalVisible: false
    }
  }

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  render() {

    return (
      <LinearGradient colors={['#436ce8', '#5c61f2', '#436ce8']} style={styles.background} location={[0.3, 0.4, 1]}>
      <View>
        {
          this.state.entries.entries.map((entry, index) => {
            return (
                <View>
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                  }}>
                  <View style = {styles.modalStyle}>
                      <Text style = {styles.modalText}>{entry.entry}</Text>
                  </View>
                  <View style= {styles.buttonContainer}>
                    <TouchableHighlight
                      onPress={() => {
                        this.toggleModal(!this.state.modalVisible);
                      }}>
                      <Text style= {styles.butText}>Hide Entry</Text>
                    </TouchableHighlight>
                  </View>
                </Modal>
                <View style ={styles.buttonContainer1}>
                  <TouchableHighlight
                    onPress={() => {
                      this.toggleModal(true);
                    }}>
                    <Text style = {styles.butText}>Show Your Entries</Text>
                  </TouchableHighlight>
              </View>
              </View>
            );
          })
        }
      </View>
    </LinearGradient>
    );
  }
}

EntryScreen.propTypes = {
  getDiary: PropTypes.func
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      graph: state.graph,
      diary: state.diary
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      getDiary: () => dispatch({type: 'SEND_DIARY'}),
    };
};

const Entry = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryScreen);

const styles = StyleSheet.create ({
  background: {
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    height: verticalScale(700),
    alignItems: 'center',
  },

  view: {
    borderColor: 'black',
    borderStyle: 'solid',
    marginTop: 50,
    backgroundColor: 'rgba(230,230,250,0.7)',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    //paddingHorizontal : 30
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  style1: {
    marginTop: 22,
  },
  modalStyle: {
    marginTop: 100,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
    backgroundColor: '#83d2f0',
    width: width -40,
    margin: 20,
  },
  modalText: {
    fontSize: 20,
    padding: 10,

  },
  buttonContainer: {
      borderRadius: 15,
      backgroundColor: '#83d2f0',
      height: 50,
      flexDirection: 'row',
      justifyContent:  'center',
      margin: 5,
      marginRight: 100,
      marginLeft: 100,

  },
  butText: {
    justifyContent:  'center',
    fontSize: 30,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonContainer1: {
      paddingTop: 20,
      borderRadius: 30,
      backgroundColor: '#83d2f0',
      height: 100,
      flexDirection: 'row',
      justifyContent:  'center',
      margin: 200,
      marginRight: 75,
      marginLeft: 75,
  },
});

export default Entry;
