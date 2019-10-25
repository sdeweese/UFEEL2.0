import React from 'react';
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore.js';
import TabNavigator from './TabNavigator';

const store = configureStore();

class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
  }
}

export default App;
