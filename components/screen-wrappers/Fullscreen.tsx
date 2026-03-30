import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

type FullScreenProps = {
  children: React.ReactNode;
  center?: boolean;
  padding?: number;
  gap?: number;
};

export default function Fullscreen({
  children,
  center,
  padding,
  gap,
}: FullScreenProps) {
  return (
    <SafeAreaProvider>
      <View>
        {children}
        <StatusBar style="light" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
