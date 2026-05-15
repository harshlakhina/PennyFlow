import { StyleSheet, View } from "react-native";

import { ScreenWrapper, Typography } from "../../src/components/common";
import { useTheme } from "../../src/hooks";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Typography size={30} weight="800" style={styles.title}>
          PennyFlow
        </Typography>

        <View
          style={[styles.balanceCard, { backgroundColor: theme.colors.card }]}
        >
          <Typography size={14} color={theme.colors.mutedText}>
            Total Balance
          </Typography>

          <Typography size={34} weight="800" style={styles.balance}>
            ₹25,000
          </Typography>
        </View>

        <View style={styles.summaryRow}>
          <View
            style={[styles.summaryCard, { backgroundColor: theme.colors.card }]}
          >
            <Typography size={14} color={theme.colors.mutedText}>
              Income
            </Typography>

            <Typography size={22} weight="800" color={theme.colors.income}>
              ₹40,000
            </Typography>
          </View>

          <View
            style={[styles.summaryCard, { backgroundColor: theme.colors.card }]}
          >
            <Typography size={14} color={theme.colors.mutedText}>
              Expense
            </Typography>

            <Typography size={22} weight="800" color={theme.colors.expense}>
              ₹15,000
            </Typography>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    marginTop: 40,
    marginBottom: 20,
  },

  balanceCard: {
    padding: 20,
    borderRadius: 20,
  },

  balance: {
    marginTop: 10,
  },

  summaryRow: {
    flexDirection: "row",
    gap: 14,
    marginTop: 16,
  },

  summaryCard: {
    flex: 1,
    padding: 16,
    borderRadius: 18,
    gap: 8,
  },
});
