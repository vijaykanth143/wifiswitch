import React from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Homescreen from './screens/Homescreen';
import {store} from './store';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import Eatsscreen from './screens/EatsScreen';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="HomeScreen"
              component={Homescreen}
              options={{
                headerShowm: false,
              }}
            />
            <Stack.Screen
              name="Mapscreen"
              component={MapScreen}
              options={{
                headerShowm: false,
              }}
            />
            <Stack.Screen
              name="EatsScreen"
              component={Eatsscreen}
              options={{
                headerShowm: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
