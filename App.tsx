import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//COMPONENTS IMPORT
import Main from './components/main/main'
import Home from './components/home/home'

//NAVIGATION
const WINDOW = createStackNavigator();

function mainRender({ navigation }) {
  return (
    <View style={styles.container}>
      <Main nav={navigation}/>
    </View>
  )
}

function homeRender({navigation}) {
  return (
    <View style={styles.container}>
      <Home nav={navigation}/>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <WINDOW.Navigator 
      screenOptions = {{
        headerShown: false
      }}
      initialRouteName = "Main"
      >

        <WINDOW.Screen
          name = "Main"
          component = {mainRender}
        />

        <WINDOW.Screen
          name = "Home"
          component = {homeRender}
        />

      </WINDOW.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8E0F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});