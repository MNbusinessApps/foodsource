import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const NBAScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🏀 NBA 6x Bets</Text>
          <Text style={styles.headerSubtitle}>Back-to-back analysis</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>B2B Performance Model</Text>
            <Text style={styles.featureDesc}>Fatigue impact on efficiency</Text>
          </View>
          
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Home Court Ref Bias</Text>
            <Text style={styles.featureDesc}>Referee foul patterns</Text>
          </View>
          
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Matchup Defense</Text>
            <Text style={styles.featureDesc}>Position-specific analysis</Text>
          </View>
          
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Shot Chart Optimization</Text>
            <Text style={styles.featureDesc}>Favorable shooting locations</Text>
          </View>
          
          <View style={styles.warning}>
            <Text style={styles.warningTitle}>Coming Soon</Text>
            <Text style={styles.warningText}>
              NBA 6x parlays will be available when games start today.
              Navigate to Today's tab to see active selections.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#1f2937',
    padding: 20,
    paddingTop: 50,
  },
  headerTitle: {
    color: '#3b82f6',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  headerSubtitle: {
    color: '#9ca3af',
    fontSize: 14,
  },
  content: {
    padding: 16,
  },
  featureCard: {
    backgroundColor: '#1f2937',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#374151',
  },
  featureTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  featureDesc: {
    color: '#9ca3af',
    fontSize: 14,
  },
  warning: {
    backgroundColor: '#451a03',
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#dc2626',
  },
  warningTitle: {
    color: '#fbbf24',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  warningText: {
    color: '#fed7aa',
    fontSize: 14,
    lineHeight: 20,
  },
});