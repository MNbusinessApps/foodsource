import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TodayScreen } from './src/screens/TodayScreen';
import { NFLScreen } from './src/screens/NFLScreen';
import { NBAScreen } from './src/screens/NBAScreen';
import { SportsScreen } from './src/screens/SportsScreen';
import { WatchlistScreen } from './src/screens/WatchlistScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { LiveClock } from './src/components/LiveClock';
import { WebSocketProvider } from './src/context/WebSocketContext';

// Custom Drawer Content
const CustomDrawerContent = (props: any) => {
  return (
    <View style={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerLogo}>🥩</Text>
        <Text style={styles.drawerTitle}>The Bookie Butcher</Text>
      </View>
      
      <View style={styles.drawerClock}>
        <LiveClock />
      </View>
      
      <View style={styles.drawerItems}>
        <Text 
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Today')}
        >
          Daily Parlays
        </Text>
        <Text 
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('NFL')}
        >
          NFL 6x Bets
        </Text>
        <Text 
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('NBA')}
        >
          NBA 6x Bets
        </Text>
        <Text 
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Sports')}
        >
          Sports Overview
        </Text>
        <Text 
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Watchlist')}
        >
          Profit Tracker
        </Text>
        <Text 
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Settings')}
        >
          Bankroll
        </Text>
      </View>
      
      <View style={styles.drawerFooter}>
        <Text style={styles.drawerFooterText}>
          6x Parlay Strategy • $1000/Day Target
        </Text>
      </View>
    </View>
  );
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <WebSocketProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#1a1a1a',
              width: 280,
            },
            drawerActiveBackgroundColor: '#dc2626',
            drawerInactiveBackgroundColor: '#2a2a2a',
            drawerActiveTintColor: '#ffffff',
            drawerInactiveTintColor: '#cccccc',
            headerStyle: {
              backgroundColor: '#0a0a0a',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: '#ffffff',
          }}
        >
          <Drawer.Screen 
            name="Today" 
            component={TodayScreen}
            options={{
              title: "Daily Parlays",
              headerTitle: 'The Bookie Butcher',
            }}
          />
          <Drawer.Screen 
            name="NFL" 
            component={NFLScreen}
            options={{
              title: 'NFL 6x Bets',
              headerTitle: 'The Bookie Butcher',
            }}
          />
          <Drawer.Screen 
            name="NBA" 
            component={NBAScreen}
            options={{
              title: 'NBA 6x Bets',
              headerTitle: 'The Bookie Butcher',
            }}
          />
          <Drawer.Screen 
            name="Sports" 
            component={SportsScreen}
            options={{
              title: 'Sports Overview',
              headerTitle: 'The Bookie Butcher',
            }}
          />
          <Drawer.Screen 
            name="Watchlist" 
            component={WatchlistScreen}
            options={{
              title: "Profit Tracker",
              headerTitle: 'The Bookie Butcher',
            }}
          />
          <Drawer.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
              title: 'Bankroll',
              headerTitle: 'The Bookie Butcher',
            }}
          />
        </Drawer.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </WebSocketProvider>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  drawerHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    alignItems: 'center',
  },
  drawerLogo: {
    fontSize: 40,
    marginBottom: 10,
  },
  drawerTitle: {
    color: '#dc2626',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  drawerClock: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  drawerItems: {
    flex: 1,
    paddingTop: 20,
  },
  drawerItem: {
    color: '#cccccc',
    fontSize: 16,
    padding: 15,
    marginBottom: 5,
  },
  drawerFooter: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  drawerFooterText: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
  },
});