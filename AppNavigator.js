import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/LoginScreen.js';
import Dashboard from './src/screens/DashboardScreen';
import Diary from './src/screens/DiaryScreen';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
    }
  },
  Diary: {
    screen: Diary,
    navigationOptions: {
      title: 'Diary',
    }
  }
});

export default createAppContainer(AppNavigator);
