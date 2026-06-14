import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import HeroScreen from "./pages/HeroScreen";

export type RootStackParamList = {
  Hero: undefined;
  Login: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator
       initialRouteName="Hero"
       screenOptions={{ headerShown: false }}
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
     </Stack.Navigator>
   </NavigationContainer>
  );
}