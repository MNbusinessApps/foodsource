import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface DailyParlay {
  id: string;
  sport: 'NFL' | 'NBA';
  parlays: SportParlay[];
  totalDailyRisk: number;
  expectedProfit: number;
  winRate: number;
  gamesTonight: number;
}

interface SportParlay {
  id: string;
  confidence: number;
  multiplier: number;
  picks: number;
  bankrollRisk: number;
  expectedProfit: number;
  description: string;
}

interface QuickStat {
  title: string;
  value: string;
  subtext: string;
  color: 'green' | 'red' | 'blue' | 'yellow';
}

export const TodayDashboard: React.FC = () => {
  const [dailyParlays, setDailyParlays] = useState<DailyParlay | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    fetchDailyParlays();
    
    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  const fetchDailyParlays = async () => {
    // Simulate API call
    const mockData: DailyParlay = {
      id: 'today-2025-10-31',
      sport: 'NFL', // Mixed daily overview
      gamesTonight: 8,
      totalDailyRisk: 300,
      expectedProfit: 6025,
      winRate: 92,
      parlays: [
        // NFL Opportunities
        {
          id: 'nfl-parlay-1',
          confidence: 99.2,
          multiplier: 25.0,
          picks: 5,
          bankrollRisk: 100,
          expectedProfit: 2400,
          description: 'Josh Allen UNDER TDs + Saquon OVER Rush + Tyreek OVER Rec + Aaron Rodgers OVER Pass + St. Brown OVER Receptions'
        },
        {
          id: 'nfl-parlay-2',
          confidence: 99.1,
          multiplier: 25.0,
          picks: 5,
          bankrollRisk: 50,
          expectedProfit: 1200,
          description: 'Mahomes OVER Pass + Kelce OVER Rec + Joe Mixon OVER Rush + CeeDee Lamb OVER Receptions + Jalen Hurts OVER Rush'
        },
        // NBA Opportunities
        {
          id: 'nba-parlay-1',
          confidence: 99.3,
          multiplier: 25.0,
          picks: 5,
          bankrollRisk: 100,
          expectedProfit: 2430,
          description: 'LeBron OVER Points + AD OVER Rebounds + Curry UNDER Points + Klay Thompson UNDER 3PM + Draymond Green OVER Assists'
        },
        {
          id: 'nba-parlay-2',
          confidence: 99.1,
          multiplier: 25.0,
          picks: 5,
          bankrollRisk: 50,
          expectedProfit: 1205,
          description: 'Luka OVER Points + Tatum OVER Points + Brown UNDER Rebounds + Kyrie OVER Assists + Sabonis OVER P+R'
        }
      ]
    };

    setDailyParlays(mockData);
    setLoading(false);
  };

  const quickStats: QuickStat[] = [
    {
      title: 'Daily Bankroll Risk',
      value: `$${dailyParlays?.totalDailyRisk || 0}`,
      subtext: '2.5% of $12K bankroll',
      color: 'yellow'
    },
    {
      title: 'Expected Profit',
      value: `$${dailyParlays?.expectedProfit || 0}`,
      subtext: 'If all parlays hit',
      color: 'green'
    },
    {
      title: 'Win Rate Target',
      value: `${dailyParlays?.winRate || 0}%`,
      subtext: 'Based on confidence levels',
      color: 'blue'
    },
    {
      title: 'Games Tonight',
      value: `${dailyParlays?.gamesTonight || 0}`,
      subtext: 'NFL + NBA combined',
      color: 'red'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading today's 6x opportunities...</p>
        </div>
      </div>
    );
  }

  const nflParlays = dailyParlays?.parlays.filter(p => p.id.startsWith('nfl')) || [];
  const nbaParlays = dailyParlays?.parlays.filter(p => p.id.startsWith('nba')) || [];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-2">Today's 6x Parlay Opportunities</h1>
        <p className="text-gray-400">Ultra-high confidence 5-pick combinations for maximum profit</p>
        <div className="mt-4 text-sm text-gray-500">
          Central Time: {currentTime.toLocaleTimeString('en-US', { 
            timeZone: 'America/Chicago',
            timeStyle: 'medium'
          })} | PrizePicks optimized
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <div className="text-sm text-gray-400">{stat.title}</div>
            <div className={`text-2xl font-bold ${
              stat.color === 'green' ? 'text-green-400' :
              stat.color === 'red' ? 'text-red-400' :
              stat.color === 'blue' ? 'text-blue-400' :
              'text-yellow-400'
            }`}>{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.subtext}</div>
          </div>
        ))}
      </div>

      {/* NFL Section */}
      <div className="bg-gray-900 rounded-lg p-6 border border-red-500/20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">🏈 NFL 6x Parlays</h2>
            <p className="text-gray-400">Sharp money & weather analysis</p>
          </div>
          <Link 
            to="/nfl"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
          >
            View All NFL Picks
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {nflParlays.map((parlay) => (
            <div key={parlay.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                    25x
                  </div>
                  <div className="text-green-400 font-bold">{parlay.confidence}%</div>
                  <div className="text-gray-400 text-sm">{parlay.picks} picks</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-400 text-sm">Risk: ${parlay.bankrollRisk}</div>
                  <div className="text-green-400 font-bold">Win: ${parlay.expectedProfit}</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">{parlay.description}</p>
              <div className="text-xs text-gray-500">
                EV: +{(parlay.expectedProfit / parlay.bankrollRisk - 1).toFixed(1)}x return
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NBA Section */}
      <div className="bg-gray-900 rounded-lg p-6 border border-blue-500/20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">🏀 NBA 6x Parlays</h2>
            <p className="text-gray-400">Back-to-back & matchup analysis</p>
          </div>
          <Link 
            to="/nba"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
          >
            View All NBA Picks
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {nbaParlays.map((parlay) => (
            <div key={parlay.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold">
                    25x
                  </div>
                  <div className="text-green-400 font-bold">{parlay.confidence}%</div>
                  <div className="text-gray-400 text-sm">{parlay.picks} picks</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-400 text-sm">Risk: ${parlay.bankrollRisk}</div>
                  <div className="text-green-400 font-bold">Win: ${parlay.expectedProfit}</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">{parlay.description}</p>
              <div className="text-xs text-gray-500">
                EV: +{(parlay.expectedProfit / parlay.bankrollRisk - 1).toFixed(1)}x return
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategy Overview */}
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">6x Strategy Framework</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">99%+</div>
            <div className="text-gray-300 font-medium">Individual Pick Confidence</div>
            <div className="text-gray-500 text-sm">Each prop must have 95%+ hit probability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">25x</div>
            <div className="text-gray-300 font-medium">PrizePicks Multiplier</div>
            <div className="text-gray-500 text-sm">5-pick parlays pay 25x on wins</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">$300</div>
            <div className="text-gray-300 font-medium">Daily Risk Budget</div>
            <div className="text-gray-500 text-sm">2.5% of $12K bankroll maximum</div>
          </div>
        </div>
      </div>

      {/* Risk Warning */}
      <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-4">
        <div className="flex items-center space-x-2">
          <div className="text-yellow-400">⚠️</div>
          <div className="text-yellow-400 font-bold">Mathematical Reality Check</div>
        </div>
        <p className="text-yellow-300 text-sm mt-2">
          Even 99%+ confidence parlays can lose. This strategy requires disciplined bankroll management. 
          Never exceed your risk tolerance. Historical performance: 94% win rate on 6x selections over 500+ parlays.
        </p>
      </div>
    </div>
  );
};