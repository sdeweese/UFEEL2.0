import React from 'react';
import { Button, Text, View, Animated, Easing } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Login from './src/screens/LoginScreen.js';
import Diary from './src/screens/DiaryScreen.js';
//import Register from './src/screens/RegisterScreen.js';
import Caps from './src/screens/CAPScreen.js';
import Shs from './src/screens/SHScreen.js';
import SafetyPlan from './src/screens/SafetyPlanScreen.js';
import Emotion1 from './src/screens/Emotion1Screen.js';
import Emotion2 from './src/screens/Emotion2Screen.js';
import Emotion3 from './src/screens/Emotion3Screen.js';
//import Settings from './src/screens/Settings.js';
import Help from './src/screens/Help.js';
import Wellness from './src/screens/WellnessScreen.js';
//import NavBar from './src/screens/NavbarScreen.js';
import Calendar from './src/screens/CalendarScreen.js';

class HomeScreen extends React.Component {
	render() {
    	return (
      	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        	<Text>Home!</Text>
			<Button
          		title="Go to Journal"
         		onPress={() => this.props.navigation.navigate('Diary')}
        	/>
     	</View>
   	);
  }
}

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


const TabNavigator = createBottomTabNavigator({
		/*Home: {
			screen: createStackNavigator({
				Emotion1,
				Emotion2,
				Emotion3,
			}),
			navigationOptions:{
				title: "Emotion",
				tabBarVisible: false,
			},
		},*/
		"CAPS": {
			screen: Caps,
		},
		"Student Health Services": {
			screen: Shs,
		},
		"Emergency Contacts": {
			screen: Help,
		},
		"Journal": {
			screen: Diary,
		},
		"Calendar": {
			screen: Calendar,
		},
		"Safety Plan": {
			screen: SafetyPlan,
		},
		"Other Resources": {
			screen: Wellness,
		},
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let IconComponent = Ionicons;
				let iconName;
				if (routeName === 'Journal') {
					iconName = `ios-journal`;
				}
				else if (routeName === 'Emergency Contacts') {
					iconName = `ios-contacts`;
				}
				if (routeName === 'CAPS') {
					iconName = `ios-information-circle`;
				}
				if (routeName === 'Student Health Services') {
					iconName = `ios-medkit`;
				}
				if (routeName === 'Other Resources') {
					iconName = `ios-help-circle`;
				}
				if (routeName === 'Calendar') {
					iconName = `ios-calendar`;
				}
				if (routeName === 'Safety Plan') {
					iconName = `ios-help-buoy`;
				}

				return <IconComponent name={iconName} size={30} color = {tintColor} />;
			},
		}),
		tabBarOptions: {
			inactiveTintColor: '#5DBAE4',
			activeTintColor: '#0F3258',
			showLabel: false,
		},
	},
	{
		//initialRouteName: 'Journal',
    	transitionConfig
	},
);

const MainNavigator = createStackNavigator({
		Emotion1: {
			screen: Emotion1,
			navigationOptions:{
				title: "Emotions",
			},
		},
		Emotion2: {
			screen: Emotion2,
			navigationOptions:{
				title: "Emotions",
			},
		},
		Emotion3: {
			screen: Emotion3,
			navigationOptions:{
				title: "Emotions",
			},
		},
		Root: {
			screen: TabNavigator,
		},
	},
	{
		initialRouteName: "Emotion1",
		transitionConfig
	},
);

export default createAppContainer(MainNavigator);
