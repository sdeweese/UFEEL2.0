import React from 'react';
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore.js';
import Navigation from './AppNavigator';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    );
  }
}

export default App;
