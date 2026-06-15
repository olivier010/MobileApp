import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type HeroScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Hero">;
};

export default function HeroScreen({
  navigation,
}: HeroScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>📱</Text>

      <Text style={styles.title}>
        Welcome to{"\n"}Personal Finance Trackerr
      </Text>

      <Text style={styles.subtitle}>
        Manage your daily activities with ease.
        Stay organized, productive, and connected.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  logo: {
    fontSize: 80,
    marginBottom: 20,
  },

  title: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  subtitle: {
    color: "#E5E7EB",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 28,
    marginBottom: 60,
  },

  button: {
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },

  buttonText: {
    color: "#2563EB",
    fontSize: 20,
    fontWeight: "bold",
  },
});