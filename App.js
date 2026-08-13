import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splash_screen from './src/screens/splash_screen';
import page1 from './src/screens/page1';
import page2 from './src/screens/page2';
import page3 from './src/screens/page3';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={splash_screen} />
        <Stack.Screen name="page1" component={page1} />
        <Stack.Screen name="page2" component={page2} />
        <Stack.Screen name="page3" component={page3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ee',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
