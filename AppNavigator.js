import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/LoginScreen.js';
import Dashboard from './src/screens/DashboardScreen.js';
import Diary from './src/screens/DiaryScreen.js';
import Register from './src/screens/RegisterScreen.js';
import Resource from './src/screens/ResourceScreen.js';
import Caps from './src/screens/CAPScreen.js';
import Shs from './src/screens/SHScreen.js';
import Safety from './src/screens/SafetyScreen.js';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
      headerLeft: null
    }
  },
  Diary: {
    screen: Diary,
    navigationOptions: {
      title: 'Diary',
    }
  },
  Resource: {
    screen: Resource,
    navigationOptions: {
      title: 'Resource',
    }
  },
  Caps: {
    screen: Caps,
    navigationOptions: {
      title: 'CAPS',
    }
  },
  Shs: {
    screen: Shs,
    navigationOptions: {
      title: 'SHS',
    }
  },
  Safety: {
    screen: Safety,
    navigationOptions: {
      title: 'Safety',
    }
  }
});

export default createAppContainer(AppNavigator);
