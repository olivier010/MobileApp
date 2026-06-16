import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning 👋</Text>
            <Text style={styles.username}>Yves</Text>
          </View>

          <TouchableOpacity style={styles.notification}>
            <Icon
              name="notifications-none"
              size={28}
              color="#111827"
            />
          </TouchableOpacity>
        </View>

        {/* Balance Card */}

        <View style={styles.balanceCard}>
          <Icon
            name="account-balance-wallet"
            size={30}
            color="white"
          />

          <Text style={styles.balanceTitle}>
            Total Balance
          </Text>

          <Text style={styles.balance}>
            RWF 0
          </Text>

          <Text style={styles.change}>
            +0% this month
          </Text>
        </View>

        {/* Income & Expense */}

        <View style={styles.summaryContainer}>

          <View style={styles.summaryCard}>
            <Icon
              name="trending-up"
              size={30}
              color="#10B981"
            />

            <Text style={styles.summaryTitle}>
              Income
            </Text>

            <Text style={styles.summaryAmount}>
              RWF 0
            </Text>
          </View>

          <View style={styles.summaryCard}>
            <Icon
              name="trending-down"
              size={30}
              color="#EF4444"
            />

            <Text style={styles.summaryTitle}>
              Expenses
            </Text>

            <Text style={styles.summaryAmount}>
              RWF 0
            </Text>
          </View>

        </View>

        {/* Quick Actions */}

        <Text style={styles.sectionTitle}>
          Quick Actions
        </Text>

        <View style={styles.actions}>

          <TouchableOpacity style={styles.actionButton}>
            <Icon name="add" size={28} color="white" />
            <Text style={styles.actionText}>Income</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.actionButton,
              { backgroundColor: "#EF4444" },
            ]}
          >
            <Icon
              name="remove"
              size={28}
              color="white"
            />
            <Text style={styles.actionText}>Expense</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.actionButton,
              { backgroundColor: "#F59E0B" },
            ]}
          >
            <Icon
              name="credit-card"
              size={26}
              color="white"
            />
            <Text style={styles.actionText}>Loan</Text>
          </TouchableOpacity>

        </View>

        {/* Transactions */}

        <Text style={styles.sectionTitle}>
          Recent Transactions
        </Text>

        <View style={styles.transactionCard}>
          <Text style={{ color: "#6B7280" }}>
            No transactions yet
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 25,
  },

  greeting: {
    fontSize: 16,
    color: "#6B7280",
  },

  username: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111827",
  },

  notification: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 50,
    elevation: 4,
  },

  balanceCard: {
    backgroundColor: "#4F46E5",
    borderRadius: 25,
    padding: 25,
    marginBottom: 25,
  },

  balanceTitle: {
    color: "#fff",
    fontSize: 18,
    marginTop: 20,
  },

  balance: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 10,
  },

  change: {
    color: "#D1FAE5",
    marginTop: 8,
  },

  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  summaryCard: {
    backgroundColor: "#fff",
    width: "48%",
    borderRadius: 18,
    padding: 18,
    elevation: 3,
  },

  summaryTitle: {
    marginTop: 10,
    color: "#6B7280",
  },

  summaryAmount: {
    marginTop: 8,
    fontSize: 22,
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#111827",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  actionButton: {
    backgroundColor: "#10B981",
    width: "30%",
    height: 90,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  actionText: {
    color: "#fff",
    marginTop: 8,
    fontWeight: "600",
  },

  transactionCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    elevation: 2,
    alignItems: "center",
  },

});