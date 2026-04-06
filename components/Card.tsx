import { View, Text, StyleSheet } from "react-native";
import React from "react";

type CardProps = {
  children: React.ReactNode;
  title?: string;
};

export default function Card({ children }: CardProps) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    // Sombra para dar profundidade (Android e iOS trabalham com props diferentes, neste caso, declaramos todas)
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
