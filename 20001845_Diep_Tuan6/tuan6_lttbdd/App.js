import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import code_one from './assets/code_one'
import code_two from './assets/code_two'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    //  điều hướng các màn hình
    // NavigationContainer Đóng gói toàn bộ ứng dụng
    <NavigationContainer>
      <Stack.Navigator
        // Quản lý các màn hình
        initialRouteName="code_one"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="code_one" component={code_one} />
        {/*Stack.Screen các thành phần của màn hình  */}
        <Stack.Screen name="code_two" component={code_two} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})