import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import ScanScreen from './src/screens/ScanScreen';
import ResultScreen from './src/screens/ResultScreen';

export type RootStackParamList = {
  Home: undefined;
  Scan: undefined;
  Result: {
    imageUri: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f5f5f5',
          },
          headerTintColor: '#2D3748',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Plant Scanner',
          }}
        />
        <Stack.Screen 
          name="Scan" 
          component={ScanScreen}
          options={{
            title: 'Scan Plant',
          }}
        />
        <Stack.Screen 
          name="Result" 
          component={ResultScreen}
          options={{
            title: 'Analysis Result',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
