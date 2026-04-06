import { View, Text, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

type ScrollableProps = {
  children: React.ReactNode;
  padding?: 20;
  gap?: number;
  onRefresh?: () => void;
};

export default function Scrollable({
  children,
  padding,
  gap,
  onRefresh,
}: ScrollableProps) {
  const customStyle = {
    gap,
    padding,
  };

  return (
    <ScrollView>
      <View style={[styles.container, customStyle]}>
        {children}
        <StatusBar style="light" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});
