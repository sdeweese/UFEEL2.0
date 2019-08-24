import { Animated, Easing } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/LoginScreen.js';
import Dashboard from './src/screens/DashboardScreen.js';
import Diary from './src/screens/DiaryScreen.js';
import Register from './src/screens/RegisterScreen.js';
import Resource from './src/screens/ResourceScreen.js';
import Caps from './src/screens/CAPScreen.js';
import Shs from './src/screens/SHScreen.js';
import Safety from './src/screens/SafetyScreen.js';
import Emotion1 from './src/screens/Emotion1Screen.js';
import Emotion2 from './src/screens/Emotion2Screen.js';
import Emotion3 from './src/screens/Emotion3Screen.js';
import User from './src/screens/UserScreen.js';
import Entry from './src/screens/EntryScreen.js';
import Settings from './src/screens/Settings.js';
import Help from './src/screens/Help.js';
import Wellness from './src/screens/WellnessScreen.js';
import Podcast from './src/screens/PodcastScreen.js';
// import PinWindow from './src/screens/PinScreen.js';
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
        title: 'Diary',
      }
    },
    Help: {
      screen: Help,
      navigationOptions: {
        title: 'Help',
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
    User: {
      screen: User,
      navigationOptions: {
        title: 'User'
      }
    },
    Wellness: {
      screen: Wellness,
      navigationOptions: {
        title: 'Wellness'
      }
    },
    Podcast: {
      screen: Podcast,
      navigationOptions: {
        title: 'Podcast & Videos'
      }
    },
    Entry: {
      screen: Entry,
      navigationOptions: {
        title: 'Diary Entries'
      }
    },
    Calendar: {
      screen: Calendar,
      navigationOptions: {
        title: 'Monthly Emotion Tracker'
      }
    },
    // Pins: {
    //   screen: Pin,
    //   navigationOptions: {
    //     title: 'Monthly Emotion Tracker'
    //   }
    // }
  },
  {
    initialRouteName: "Emotion1",
    transitionConfig
});

let Navigation = createAppContainer(AppNavigator)

export default Navigation;
