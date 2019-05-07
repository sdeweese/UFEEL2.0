import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Button, FlatList, Dimensions, Text, TextInput, View, TouchableOpacity, Image, Linking, AsyncStorage, Modal, TouchableHighlight, Alert } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import PropTypes from 'prop-types';

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2 // optional, default 3
}

class UserScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.graph,
      entries: this.props.diary,
      modalVisible: false,
    };
  }

  componentDidMount() {
    this.props.getDiary();
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const width = Dimensions.get('window').width;
    const height = 220;
    return (
      <View>
        <View>
          <BarChart
                width={width}
                height={height}
                data={this.state.data}
                chartConfig={chartConfig}
                style={styles.graphStyle}
          />
        </View>

        <Button
          onPress={() => this.props.navigation.navigate('Entry')}
          title="Diary Entries"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}



const styles = StyleSheet.create ({
  chart: {
    backgroundColor: '#022173',
  },
  graphStyle: {
            marginVertical: 8,
            borderRadius: 16
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
      getDiary: () => dispatch({type: 'SEND_DIARY'}),
    };
};

const User = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserScreen);

export default User;
