import { StyleSheet } from "react-native";

import { ScreenWrapper, Typography } from "../../src/components/common";

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <Typography size={30} weight="800" style={styles.title}>
        PennyFlow
      </Typography>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    marginLeft: 20,
  },
});
