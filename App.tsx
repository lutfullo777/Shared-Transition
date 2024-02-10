import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Detail from './screens/Detail';

export type StackParamsList = {
  Home: undefined;
  Detail: {
    item: {
      image: string;
      title: string;
      desc: string;
    };
    tag: string;
  };
};

const App = () => {
  const Stack = createNativeStackNavigator<StackParamsList>();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: 'slide_from_right',
            }}>
            <Stack.Screen component={Home} name="Home" />
            <Stack.Screen component={Detail} name="Detail" />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
