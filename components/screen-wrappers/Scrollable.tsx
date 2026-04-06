import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

type ScrollableProps = {
  children: React.ReactNode;
  padding?: number;
  gap?: number;
  onRefresh?: () => void;
};

export default function Scrollable({
  children,
  padding,
  gap,
  onRefresh,
}: ScrollableProps) {
  const [refreshing, setRefreshing] = useState(false);

  const Refresh = React.useCallback(() => {
    setRefreshing(true);
    onRefresh?.();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const customStyle = {
    gap,
    padding,
  };

  return (
    <ScrollView
      refreshControl={
        onRefresh ? (
          <RefreshControl refreshing={refreshing} onRefresh={Refresh} />
        ) : undefined
      }
    >
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
