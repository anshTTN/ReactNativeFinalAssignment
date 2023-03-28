import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListing from './src/screens/ProductListing';
import {Provider} from 'react-redux';
import store from './src/Services/rootReducer';
import ProductDetail from './src/screens/ProductDetail';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ProductsList'>
      <Stack.Screen
          name="ProductsList"
          component={ProductListing}
          options={{headerTitleAlign: 'center'}}
        />
      <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
        />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;