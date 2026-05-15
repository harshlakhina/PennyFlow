import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { toggleTheme } from "../../src/features/theme";
import { useAppDispatch, useTheme } from "../../src/hooks";

export default function HomeScreen() {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>
        PennyFlow
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.card }]}
        onPress={() => dispatch(toggleTheme())}
      >
        <Text style={{ color: theme.colors.text }}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
  },

  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
});
