import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, FlatList, Dimensions, Text, Modal, TextInput, View, TouchableOpacity, Image, Linking, AsyncStorage, TouchableHighlight, Alert } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import PropTypes from 'prop-types';

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
                  <View style={{marginTop: 22}}>
                    <View>
                      <Text>{entry.entry}</Text>

                      <TouchableHighlight
                        onPress={() => {
                          this.toggleModal(!this.state.modalVisible);
                        }}>
                        <Text>Hide Modal</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </Modal>

                <TouchableHighlight
                  onPress={() => {
                    this.toggleModal(true);
                  }}>
                  <Text>Show Modal</Text>
                </TouchableHighlight>
              </View>
            );
          })
        }
      </View>
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

export default Entry;
