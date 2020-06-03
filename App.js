/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CV from './src/CV';
import Instagram from './src/Instagram';
import YouTube from './src/YT/YouTube';
import YouTubeDetail  from './src/YT/YouTubeDetail';
import { SafeAreaView, Image, Easing, Animated } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionSpecs, HeaderStyleInterpolators} from '@react-navigation/stack'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Stack = createStackNavigator()

const MyTransition = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  // headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          // {
          //   rotate: current.progress.interpolate({
          //     inputRange: [0, 1],
          //     outputRange: [1, 0],
          //   }),
          // },
          // {
          //   scale: next
          //     ? next.progress.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: [1, 0.9],
          //       })
          //     : 1,
          // },
        ],
      },
      // overlayStyle: {
      //   opacity: current.progress.interpolate({
      //     inputRange: [0, 1],
      //     outputRange: [0, 0.5],
      //   }),
      // },
    };
  },
}



const App: () => React$Node = () => {
  return (
    // <ImageExample/>
    // <CV/>
    // <Instagram/>
    // <YouTube />

    <NavigationContainer>
        <Stack.Navigator
            // screenOptions={{
            //   cardOverlayEnabled: true,
            //   gestureEnabled: true,
            //   ...MyTransition
            // }}
            mode='modal'
        >
            <Stack.Screen
              name = "HomeScreen"
              component = {YouTube}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name = 'VideoDetail'
              component = {YouTubeDetail}
              options = {{
                headerShown: false,
                // transitionSpec: {
                //     open: config,
                //     close: config,
                // },
              }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
