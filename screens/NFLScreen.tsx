import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const NFLScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🏈 NFL 6x Bets</Text>
          <Text style={styles.headerSubtitle}>Ultra-high confidence parlays</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Weather Impact Model</Text>
            <Text style={styles.featureDesc}>Wind speed & temperature effects</Text>
          </View>
          
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Sharp Money Tracker</Text>
            <Text style={styles.featureDesc}>Professional betting patterns</Text>
          </View>
          
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Injury Cascade</Text>
            <Text style={styles.featureDesc}>Player impact analysis</Text>
          </View>
          
          <View style={styles.warning}>
            <Text style={styles.warningTitle}>Coming Soon</Text>
            <Text style={styles.warningText}>
              NFL 6x parlays will be available when games start today.
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
    color: '#dc2626',
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