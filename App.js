import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import HomePage from './Screens/HomePage';
import FinalFoodList from './Screens/FinalFoodList';
import DragFlatList from './Screens/DragFlatList';

export default function App() {

const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen key={1} name="HomePage" options={{headerShown:false}} component={HomePage} />
      <Stack.Screen key={2} name="FinalFoodList" options={{headerShown:false}} component={FinalFoodList} />
      

      
     
    </Stack.Navigator>
    </NavigationContainer>
  );
}








