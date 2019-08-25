import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Button, FlatList, Dimensions, Text, TextInput, View, TouchableOpacity, Image, Linking, AsyncStorage, Modal, TouchableHighlight, Alert } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import PropTypes from 'prop-types';
import { scale, verticalScale, moderateScale } from '../../scaler.js';
import { LinearGradient } from 'expo';

const chartConfig = {
  backgroundColor: '#ffffff',
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2 // optional, default 3
}
 const fill = 'rgb(148, 212, 212)'

class UserScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.graph,
      entries: this.props.diary,
      modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const width = Dimensions.get('window').width - 20;
    const height = Dimensions.get('window').height - 20;
    return (
      <LinearGradient colors={['#f1a377', '#f1a377', '#f1a377']} style={styles.background} location={[0.3, 0.4, 1]}>
      <View>
      <View style= {styles.buttonContainer}>
        <Button
          onPress={() => this.props.navigation.navigate('Calendar')}
          title="Monthly Emotion Tracker"
          color='black'
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
        <View style= {styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Entry')}
            title="Diary Entries"
            color='black'
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </LinearGradient>
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
    alignItems: 'center',
  },
  chart: {
    backgroundColor: '#022173',
  },
  graphStyle: {
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: 'black',
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: '#67b9db',
    justifyContent: 'space-around',
    margin: 5,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  graph: {
    margin: 10,
    padding: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }

});

UserScreen.propTypes = {
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
      // getDiary: () => dispatch({type: 'SEND_DIARY'}),
    };
};

const User = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserScreen);

export default User;
