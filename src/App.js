import 'react-native-gesture-handler';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {CardStyleInterpolators} from '@react-navigation/stack';
import DetailScreen from './DetailScreen';
import MainScreen from './MainScreen';

const name = 'RootStack';

const RootStack = createSharedElementStackNavigator({
  name,
});
export const MainStack = () => {
  return (
    <RootStack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
        cardStyle: {
          opacity: 1,
        },
      }}>
      <RootStack.Screen name="MainScreen" component={MainScreen} />
      <RootStack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          presentation: 'transparentModal', // comment and uncomment this line to see the issue
          gestureEnabled: false,
          cardStyle: {
            backgroundColor: 'transparent',
          },

          cardStyleInterpolator: ({current: {progress}}) => {
            const opacity = progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            });

            return {
              cardStyle: {opacity},
            };
          },
        }}
        sharedElements={({route}) => {
          return [
            {
              id: route.params.id,
              resize: 'none',
            },
          ];
        }}
      />
    </RootStack.Navigator>
  );
};

const Navigation = ({passedLoading, setPassedLoading}) => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
