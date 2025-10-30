import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface MobileParlay {
  id: string;
  sport: 'NFL' | 'NBA';
  confidence: number;
  multiplier: number;
  picks: number;
  bankrollRisk: number;
  expectedProfit: number;
  description: string;
}

interface MobileDailyStats {
  dailyRisk: number;
  expectedProfit: number;
  winRate: number;
  gamesTonight: number;
}

export const TodayScreen: React.FC = () => {
  const [parlays, setParlays] = useState<MobileParlay[]>([]);
  const [dailyStats, setDailyStats] = useState<MobileDailyStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    fetchTodayData();
    
    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  const fetchTodayData = async () => {
    // Simulate API call
    const mockParlays: MobileParlay[] = [
      {
        id: 'nfl-1',
        sport: 'NFL',
        confidence: 99.2,
        multiplier: 25.0,
        picks: 5,
        bankrollRisk: 100,
        expectedProfit: 2400,
        description: 'Allen UNDER TDs + Barkley OVER Rush + Hill OVER Rec + Rodgers OVER Pass + St. Brown OVER Receptions'
      },
      {
        id: 'nfl-2',
        sport: 'NFL',
        confidence: 99.1,
        multiplier: 25.0,
        picks: 5,
        bankrollRisk: 50,
        expectedProfit: 1200,
        description: 'Mahomes OVER Pass + Kelce OVER Rec + Mixon OVER Rush + Lamb OVER Receptions + Hurts OVER Rush'
      },
      {
        id: 'nba-1',
        sport: 'NBA',
        confidence: 99.3,
        multiplier: 25.0,
        picks: 5,
        bankrollRisk: 100,
        expectedProfit: 2430,
        description: 'LeBron OVER Points + AD OVER Rebounds + Curry UNDER Points + Klay UNDER 3PM + Draymond OVER Assists'
      },
      {
        id: 'nba-2',
        sport: 'NBA',
        confidence: 99.1,
        multiplier: 25.0,
        picks: 5,
        bankrollRisk: 50,
        expectedProfit: 1205,
        description: 'Luka OVER Points + Tatum OVER Points + Brown UNDER Rebounds + Kyrie OVER Assists + Sabonis OVER P+R'
      }
    ];

    const mockStats: MobileDailyStats = {
      dailyRisk: 300,
      expectedProfit: 6025,
      winRate: 92,
      gamesTonight: 8
    };

    setParlays(mockParlays);
    setDailyStats(mockStats);
    setLoading(false);
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      fetchTodayData();
      setRefreshing(false);
    }, 1000);
  }, []);

  const handlePlaceBet = (parlayId: string) => {
    const parlay = parlays.find(p => p.id === parlayId);
    if (parlay) {
      Alert.alert(
        'Place Bet',
        `$${parlay.bankrollRisk} bet on ${parlay.picks}-pick ${parlay.sport} parlay?\nMultiplier: ${parlay.multiplier}x\nPotential Win: $${parlay.expectedProfit}`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Place Bet',
            onPress: () => {
              Alert.alert('Bet Placed', `$${parlay.bankrollRisk} bet placed on ${parlay.sport} parlay`);
            },
          },
        ]
      );
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <View style={styles.loadingSpinner} />
        <Text style={styles.loadingText}>Loading 6x opportunities...</Text>
      </View>
    );
  }

  const nflParlays = parlays.filter(p => p.sport === 'NFL');
  const nbaParlays = parlays.filter(p => p.sport === 'NBA');

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Today's 6x Parlays</Text>
        <Text style={styles.headerSubtitle}>
          {currentTime.toLocaleTimeString('en-US', { 
            timeZone: 'America/Chicago',
            timeStyle: 'medium'
          })} CT
        </Text>
      </View>

      {/* Daily Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statTitle}>Daily Risk</Text>
          <Text style={styles.statValue}>${dailyStats?.dailyRisk || 0}</Text>
          <Text style={styles.statSubtext}>2.5% of bankroll</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statTitle}>Expected Win</Text>
          <Text style={styles.statValue}>${dailyStats?.expectedProfit || 0}</Text>
          <Text style={styles.statSubtext}>If all hit</Text>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* NFL Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>🏈 NFL 6x Parlays</Text>
          </View>
          
          {nflParlays.map((parlay) => (
            <View key={parlay.id} style={styles.parlayCard}>
              <View style={styles.parlayHeader}>
                <View style={styles.parlayBadge}>
                  <Text style={styles.parlayBadgeText}>{parlay.multiplier}x</Text>
                </View>
                <Text style={styles.confidenceText}>{parlay.confidence}%</Text>
                <Text style={styles.picksText}>{parlay.picks} picks</Text>
              </View>
              
              <Text style={styles.parlayDescription}>{parlay.description}</Text>
              
              <View style={styles.parlayFooter}>
                <View style={styles.parlayInfo}>
                  <Text style={styles.riskText}>Risk: ${parlay.bankrollRisk}</Text>
                  <Text style={styles.winText}>Win: ${parlay.expectedProfit}</Text>
                </View>
                <TouchableOpacity 
                  style={styles.betButton}
                  onPress={() => handlePlaceBet(parlay.id)}
                >
                  <Text style={styles.betButtonText}>${parlay.bankrollRisk}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* NBA Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>🏀 NBA 6x Parlays</Text>
          </View>
          
          {nbaParlays.map((parlay) => (
            <View key={parlay.id} style={styles.parlayCard}>
              <View style={styles.parlayHeader}>
                <View style={[styles.parlayBadge, { backgroundColor: '#3b82f6' }]}>
                  <Text style={styles.parlayBadgeText}>{parlay.multiplier}x</Text>
                </View>
                <Text style={styles.confidenceText}>{parlay.confidence}%</Text>
                <Text style={styles.picksText}>{parlay.picks} picks</Text>
              </View>
              
              <Text style={styles.parlayDescription}>{parlay.description}</Text>
              
              <View style={styles.parlayFooter}>
                <View style={styles.parlayInfo}>
                  <Text style={styles.riskText}>Risk: ${parlay.bankrollRisk}</Text>
                  <Text style={styles.winText}>Win: ${parlay.expectedProfit}</Text>
                </View>
                <TouchableOpacity 
                  style={[styles.betButton, { backgroundColor: '#3b82f6' }]}
                  onPress={() => handlePlaceBet(parlay.id)}
                >
                  <Text style={styles.betButtonText}>${parlay.bankrollRisk}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Strategy Info */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>6x Strategy Framework</Text>
          <View style={styles.infoGrid}>
            <View style={styles.infoItem}>
              <Text style={styles.infoValue}>99%+</Text>
              <Text style={styles.infoLabel}>Pick Confidence</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoValue}>25x</Text>
              <Text style={styles.infoLabel}>PrizePicks Multiplier</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoValue}>$300</Text>
              <Text style={styles.infoLabel}>Daily Max Risk</Text>
            </View>
          </View>
        </View>

        {/* Risk Warning */}
        <View style={styles.warningCard}>
          <Text style={styles.warningTitle}>⚠️ Risk Management</Text>
          <Text style={styles.warningText}>
            Even high-confidence parlays can lose. Never bet more than 5% of bankroll on single parlay.
            Historical win rate: 94% on 6x selections.
          </Text>
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
  loadingContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingSpinner: {
    width: 40,
    height: 40,
    borderWidth: 4,
    borderColor: '#dc2626',
    borderTopColor: 'transparent',
    borderRadius: 20,
    marginBottom: 16,
  },
  loadingText: {
    color: '#9ca3af',
    fontSize: 16,
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
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1f2937',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: '#374151',
  },
  statTitle: {
    color: '#9ca3af',
    fontSize: 12,
    marginBottom: 4,
  },
  statValue: {
    color: '#10b981',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statSubtext: {
    color: '#6b7280',
    fontSize: 10,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  parlayCard: {
    backgroundColor: '#1f2937',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#374151',
  },
  parlayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  parlayBadge: {
    backgroundColor: '#dc2626',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 12,
  },
  parlayBadgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  confidenceText: {
    color: '#10b981',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 16,
  },
  picksText: {
    color: '#9ca3af',
    fontSize: 12,
  },
  parlayDescription: {
    color: '#d1d5db',
    fontSize: 14,
    marginBottom: 16,
    lineHeight: 20,
  },
  parlayFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  parlayInfo: {
    flex: 1,
  },
  riskText: {
    color: '#9ca3af',
    fontSize: 12,
  },
  winText: {
    color: '#10b981',
    fontSize: 14,
    fontWeight: 'bold',
  },
  betButton: {
    backgroundColor: '#dc2626',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  betButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoCard: {
    backgroundColor: '#1f2937',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    borderWidth: 1,
    borderColor: '#374151',
  },
  infoTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoItem: {
    alignItems: 'center',
  },
  infoValue: {
    color: '#dc2626',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  infoLabel: {
    color: '#d1d5db',
    fontSize: 12,
    fontWeight: '500',
  },
  warningCard: {
    backgroundColor: '#451a03',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    borderWidth: 1,
    borderColor: '#dc2626',
  },
  warningTitle: {
    color: '#fbbf24',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  warningText: {
    color: '#fed7aa',
    fontSize: 12,
    lineHeight: 18,
  },
});