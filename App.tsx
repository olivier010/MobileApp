import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HeroScreen from "./pages/HeroScreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import HomeScreen from "./pages/HomeScreen";

export type RootStackParamList = {
  Hero: undefined;
  Login: undefined;
  Signup: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>

    <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Hero"
            screenOptions={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          >
            <Stack.Screen
              name="Hero"
              component={HeroScreen}
            />

            <Stack.Screen
              name="Login"
              component={LoginScreen}
            />

            <Stack.Screen
              name="Signup"
              component={SignupScreen}
            />

            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>

    </SafeAreaProvider>
  );
}