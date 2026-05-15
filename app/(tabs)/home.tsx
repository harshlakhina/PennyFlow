import { StyleSheet, Text, View } from "react-native";

import { useTheme } from "../../src/hooks";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: theme.colors.text,
          },
        ]}
      >
        PennyFlow
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 28,
    fontWeight: "700",
  },
});
