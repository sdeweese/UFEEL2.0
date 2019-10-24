import { Animated, Easing } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/LoginScreen.js';
import Diary from './src/screens/DiaryScreen.js';
import Register from './src/screens/RegisterScreen.js';
import Resource from './src/screens/ResourceScreen.js';
import Caps from './src/screens/CAPScreen.js';
import Shs from './src/screens/SHScreen.js';
import SafetyPlan from './src/screens/SafetyPlanScreen.js';
import Emotion1 from './src/screens/Emotion1Screen.js';
import Emotion2 from './src/screens/Emotion2Screen.js';
import Emotion3 from './src/screens/Emotion3Screen.js';
import Settings from './src/screens/Settings.js';
import Help from './src/screens/Help.js';
import Wellness from './src/screens/WellnessScreen.js';
import NavBar from './src/screens/NavbarScreen.js';
import Calendar from './src/screens/CalendarScreen.js';

const transitionConfig = () => {
      return {
        transitionSpec: {
          duration: 500, // how long the transition will take
          easing: Easing.ease, // easing function to use (https://facebook.github.io/react-native/docs/easing.html)
          timing: Animated.timing, // the type of animation to use (timing, spring, decay)
          useNativeDriver: true // delegate all the animation related work to the native layer
        },
        screenInterpolator: sceneProps => {
          // next: add code for customizing the transition animation
          const { layout, position, scene } = sceneProps;
          const thisSceneIndex = scene.index; // the index of the current screen
          const width = layout.initWidth;
          const height = layout.initHeight;

          const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
                extrapolate: "clamp" // clamp so it doesn't go beyond the outputRange. Without this, you'll see a few black portions in the screen while navigating
          });

          const translateY = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                outputRange: [height, 0, 0],
                extrapolate: "clamp"
          });

          const opacity = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex - 0.5, thisSceneIndex],
                outputRange: [0, 0.2, 1],
                extrapolate: "clamp"
          });

          if (thisSceneIndex > 1 && thisSceneIndex < 3) {
              return { opacity, transform: [{ translateY }] };
          } else {
              return { opacity, transform: [{ translateX }] };
          }
        }
      };
};

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
        title: 'Journal',
      }
    },
    Help: {
      screen: Help,
      navigationOptions: {
        title: 'SCU Resources',
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
    Emotion1: {
      screen: Emotion1,
      navigationOptions: {
        title: 'Emotion'
      }
    },
    Emotion2: {
      screen: Emotion2,
      navigationOptions: {
        title: 'Emotion'
      }
    },
    Emotion3: {
      screen: Emotion3,
      navigationOptions: {
        title: 'Emotion'
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: 'Settings'
      }
    },
    Wellness: {
      screen: Wellness,
      navigationOptions: {
        title: 'Wellness'
      }
    },
    Calendar: {
      screen: Calendar,
      navigationOptions: {
        title: 'Calendar'
      }
    },
    NavBar: {
      screen: NavBar,
      navigationOptions: {
        title: 'Navigation Bar'
      }
    },
    SafetyPlan: {
      screen: SafetyPlan,
      navigationOptions: {
        title: 'Safety Plan'
      }
    },
  },
  {
    initialRouteName: "Emotion1", //change back to Emotion1
    transitionConfig
});

let Navigation = createAppContainer(AppNavigator)

export default Navigation;
