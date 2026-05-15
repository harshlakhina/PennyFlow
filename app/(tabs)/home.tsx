import { StyleSheet, View } from "react-native";

import { ScreenWrapper, Typography } from "../../src/components/common";
import { STRINGS } from "../../src/constants";
import { useTheme } from "../../src/hooks";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Typography size={30} weight="800" style={styles.title}>
          {STRINGS.appName}
        </Typography>

        <View
          style={[styles.balanceCard, { backgroundColor: theme.colors.card }]}
        >
          <Typography size={14} color={theme.colors.mutedText}>
            {STRINGS.home.totalBalance}
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
              {STRINGS.home.income}
            </Typography>

            <Typography size={22} weight="800" color={theme.colors.income}>
              ₹40,000
            </Typography>
          </View>

          <View
            style={[styles.summaryCard, { backgroundColor: theme.colors.card }]}
          >
            <Typography size={14} color={theme.colors.mutedText}>
              {STRINGS.home.expense}
            </Typography>

            <Typography size={22} weight="800" color={theme.colors.expense}>
              ₹15,000
            </Typography>
          </View>
        </View>

        <View style={styles.transactionSection}>
          <Typography size={20} weight="700">
            Recent Transactions
          </Typography>

          <View
            style={[
              styles.transactionCard,
              { backgroundColor: theme.colors.card },
            ]}
          >
            <View>
              <Typography size={16} weight="600">
                {STRINGS.home.foodOrder}
              </Typography>

              <Typography size={13} color={theme.colors.mutedText}>
                {STRINGS.home.today}
              </Typography>
            </View>

            <Typography size={18} weight="700" color={theme.colors.expense}>
              - ₹450
            </Typography>
          </View>

          <View
            style={[
              styles.transactionCard,
              { backgroundColor: theme.colors.card },
            ]}
          >
            <View>
              <Typography size={16} weight="600">
                {STRINGS.home.salary}
              </Typography>

              <Typography size={13} color={theme.colors.mutedText}>
                {STRINGS.home.yesterday}
              </Typography>
            </View>

            <Typography size={18} weight="700" color={theme.colors.income}>
              + ₹20,000
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

  transactionSection: {
    marginTop: 28,
    gap: 14,
  },

  transactionCard: {
    padding: 16,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
