import { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { useTheme } from "../../hooks";

interface Props {
  children: ReactNode;
}

export default function ScreenWrapper({ children }: Props) {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
