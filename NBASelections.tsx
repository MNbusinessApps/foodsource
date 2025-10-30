import React, { useState, useEffect } from 'react';

interface NBASelectionsProps {}

interface NBAAnalysis {
  id: string;
  confidence: number;
  statWeight: number;
  metrics: NBAMetric[];
  riskScore: number;
  expectedValue: number;
}

interface NBAMetric {
  id: string;
  player: string;
  position: string;
  statType: string;
  projectedValue: string;
  analysis: 'ABOVE_AVERAGE' | 'BELOW_AVERAGE';
  confidence: number;
  ev: number;
  reasoning: string[];
}

export const NBASelections: React.FC<NBASelectionsProps> = () => {
  const [nbaAnalyses, setNbaAnalyses] = useState<NBAAnalysis[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnalysisIds, setSelectedAnalysisIds] = useState<{[key: string]: string}>({});

  useEffect(() => {
    fetchNBAAnalyses();
  }, []);

  const fetchNBAAnalyses = async () => {
    // Simulate API call to get NBA analyses
    const mockAnalyses: NBAAnalysis[] = [
      {
        id: 'nba-1',
        confidence: 98.7,
        statWeight: 25.0,
        riskScore: 12,
        expectedValue: 2430,
        metrics: [
          {
            id: 'nba-1-p1',
            player: 'LeBron James',
            position: 'SF',
            statType: 'Points',
            projectedValue: '26.2',
            analysis: 'ABOVE_AVERAGE',
            confidence: 98.4,
            ev: 0.19,
            reasoning: [
              'Lakers vs Warriors - Warriors rank #28 vs SFs, 27.2 pts allowed',
              'LeBron 28+ points in 4/5 games vs Warriors (career)',
              'Warriors rim protection: 48% opponent FG% in paint',
              'Lakers playing from behind = LeBron usage rate +15%'
            ]
          },
          {
            id: 'nba-1-p2',
            player: 'Anthony Davis',
            position: 'PF',
            statType: 'Rebounds',
            projectedValue: '10.8',
            analysis: 'ABOVE_AVERAGE',
            confidence: 97.9,
            ev: 0.22,
            reasoning: [
              'Lakers vs Warriors - Warriors allowing 12.3 rebounds to PFs',
              'AD averages 10.8 rebounds vs Warriors (5-game sample)',
              'Warriors no true C = AD gets more defensive rebounds',
              'Back-to-back games = +2.1 rebounds for AD'
            ]
          },
          {
            id: 'nba-1-p3',
            player: 'Stephen Curry',
            position: 'PG',
            statType: 'Points',
            projectedValue: '24.8',
            analysis: 'BELOW_AVERAGE',
            confidence: 96.7,
            ev: 0.18,
            reasoning: [
              'Lakers defense ranks #3 vs PGs, 23.1 pts allowed',
              'Curry 22.4 points avg vs Lakers this season (3 games)',
              'Lakers live ball defense = 7.8 sec average possession time',
              'Curry 3PM under 3.5 in 3/4 games vs elite defenses'
            ]
          },
          {
            id: 'nba-1-p4',
            player: 'Klay Thompson',
            position: 'SG',
            statType: '3-Pointers Made',
            projectedValue: '2.9',
            analysis: 'BELOW_AVERAGE',
            confidence: 95.8,
            ev: 0.16,
            reasoning: [
              'Lakers allow 2.9 3PM to SGs (3rd best in league)',
              'Thompson 2.7 3PM vs elite perimeter defenses',
              'Lakers length at SF/SG positions limits catch-and-shoot',
              'Thompson shot selection declining: 8.4 attempts/game (last 10)'
            ]
          },
          {
            id: 'nba-1-p5',
            player: 'Draymond Green',
            position: 'PF',
            statType: 'Assists',
            projectedValue: '6.8',
            analysis: 'ABOVE_AVERAGE',
            confidence: 98.1,
            ev: 0.21,
            reasoning: [
              'Warriors offense runs through Green playmaking',
              'Green 6.8 assists vs Lakers (4 games this season)',
              'Lakers defensive scheme: help on Curry = more assists for Green',
              'Warriors playing from behind = Green Facilitator mode'
            ]
          }
        ]
      },
      {
        id: 'nba-2',
        confidence: 99.1,
        statWeight: 25.0,
        riskScore: 9,
        expectedValue: 1205,
        metrics: [
          {
            id: 'nba-2-p1',
            player: 'Luka Dončić',
            position: 'PG',
            statType: 'Points',
            projectedValue: '31.2',
            analysis: 'ABOVE_AVERAGE',
            confidence: 98.9,
            ev: 0.23,
            reasoning: [
              'Mavericks vs Knicks - Knicks rank #30 vs PGs, 32.4 pts allowed',
              'Luka averages 33.1 points vs Knicks (career)',
              'Knicks perimeter defense: 49% FG% allowed to point guards',
              'Mavericks road games = Luka usage rate +12%'
            ]
          },
          {
            id: 'nba-2-p2',
            player: 'Jayson Tatum',
            position: 'SF',
            statType: 'Points',
            projectedValue: '29.1',
            analysis: 'ABOVE_AVERAGE',
            confidence: 98.8,
            ev: 0.21,
            reasoning: [
              'Celtics vs Heat - Heat allow 28.7 pts to SFs',
              'Tatum 31.2 points vs Heat this season (3 games)',
              'Heat matchup issues: Tatum 52% FG% vs Miami historically',
              'Celtics favorite = Tatum gets more shot attempts'
            ]
          },
          {
            id: 'nba-2-p3',
            player: 'Jaylen Brown',
            position: 'SG',
            statType: 'Rebounds',
            projectedValue: '5.2',
            analysis: 'BELOW_AVERAGE',
            confidence: 96.4,
            ev: 0.17,
            reasoning: [
              'Celtics vs Heat - Heat allow 5.8 rebounds to SGs',
              'Brown averages 4.9 rebounds vs Heat (4 games)',
              'Heat defensive scheme limits SGs on glass',
              'Brown focus on scoring = fewer rebound opportunities'
            ]
          },
          {
            id: 'nba-2-p4',
            player: 'Kyrie Irving',
            position: 'PG',
            statType: 'Assists',
            projectedValue: '6.8',
            analysis: 'ABOVE_AVERAGE',
            confidence: 97.2,
            ev: 0.19,
            reasoning: [
              'Mavericks vs Knicks - Knicks allow 7.1 assists to PGs',
              'Irving 7.2 assists vs Knicks (career)',
              'Knicks help defense = more opportunities for Irving assists',
              'Luka drives = Irving gets assist opportunities'
            ]
          },
          {
            id: 'nba-2-p5',
            player: 'Domantas Sabonis',
            position: 'C',
            statType: 'Points + Rebounds',
            projectedValue: '24.7',
            analysis: 'ABOVE_AVERAGE',
            confidence: 98.3,
            ev: 0.20,
            reasoning: [
              'Kings vs Jazz - Jazz allow 26.1 PRA to centers',
              'Sabonis 25.8 PRA vs Jazz (6 games)',
              'Jazz interior defense: 58% FG% allowed to centers',
              'Kings pace = Sabonis gets more opportunities'
            ]
          }
        ]
      }
    ];

    setNbaAnalyses(mockAnalyses);
    setLoading(false);
  };

  const handleSelectAnalysis = (analysisId: string) => {
    setSelectedAnalysisIds(prev => ({
      ...prev,
      [analysisId]: prev[analysisId] === analysisId ? '' : analysisId
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading NBA performance analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-2">NBA Performance Analytics</h1>
        <p className="text-gray-400">Advanced statistical analysis and performance predictions</p>
        <div className="mt-4 text-sm text-gray-500">
          Central Time: {new Date().toLocaleTimeString('en-US', { 
            timeZone: 'America/Chicago',
            timeStyle: 'medium'
          })} | Sports Analytics Platform
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
          <div className="text-blue-400 text-sm">Active Analyses:</div>
          <div className="text-white text-2xl font-bold">{nbaAnalyses.length}</div>
        </div>
        <div className="bg-green-600/20 border border-green-500/30 rounded-lg px-4 py-2">
          <div className="text-green-400 text-sm">Avg Confidence:</div>
          <div className="text-white text-2xl font-bold">
            {(nbaAnalyses.reduce((acc, a) => acc + a.confidence, 0) / nbaAnalyses.length).toFixed(1)}%
          </div>
        </div>
        <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg px-4 py-2">
          <div className="text-purple-400 text-sm">Players Tracked:</div>
          <div className="text-white text-2xl font-bold">
            {nbaAnalyses.reduce((acc, a) => acc + a.metrics.length, 0)}
          </div>
        </div>
      </div>

      {/* NBA Analysis Cards */}
      <div className="space-y-6">
        {nbaAnalyses.map((analysis) => (
          <div key={analysis.id} className="bg-gray-900 border border-blue-500/20 rounded-lg p-6">
            {/* Analysis Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {analysis.statWeight}x WEIGHT
                </div>
                <div className="bg-green-600/20 border border-green-500/30 rounded-lg px-3 py-1">
                  <span className="text-green-400 text-sm">Confidence:</span>
                  <span className="text-white font-bold ml-1">{analysis.confidence}%</span>
                </div>
                <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg px-3 py-1">
                  <span className="text-purple-400 text-sm">{analysis.metrics.length} Metrics</span>
                </div>
              </div>
              
              {/* Analysis Selector */}
              <button
                onClick={() => handleSelectAnalysis(analysis.id)}
                className={`px-6 py-2 rounded-lg font-bold transition-colors ${
                  selectedAnalysisIds[analysis.id]
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                }`}
              >
                {selectedAnalysisIds[analysis.id] ? 'Selected' : 'Select Analysis'}
              </button>
            </div>

            {/* Metrics Grid */}
            <div className="grid gap-4">
              {analysis.metrics.map((metric, index) => (
                <div key={metric.id} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-white font-bold">{metric.player} - {metric.statType}</div>
                        <div className="text-gray-400 text-sm">{metric.position}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold ${
                        metric.analysis === 'ABOVE_AVERAGE' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {metric.analysis === 'ABOVE_AVERAGE' ? 'ABOVE' : 'BELOW'} {metric.projectedValue}
                      </div>
                      <div className="text-gray-400 text-sm">{metric.confidence}% | EV +{(metric.ev * 100).toFixed(0)}%</div>
                    </div>
                  </div>
                  
                  {/* Reasoning */}
                  <div className="text-gray-300 text-sm">
                    <div className="font-medium mb-1">Analysis:</div>
                    <ul className="list-disc list-inside space-y-1">
                      {metric.reasoning.map((reason, i) => (
                        <li key={i} className="text-gray-400">{reason}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Analysis Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-700">
              <div className="space-y-1">
                <div className="text-gray-400 text-sm">Expected Value:</div>
                <div className="text-green-400 text-xl font-bold">
                  ${analysis.expectedValue.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-8 bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
        <div className="flex items-center space-x-2">
          <div className="text-blue-400">ℹ️</div>
          <div className="text-blue-400 font-bold">Professional Analytics</div>
        </div>
        <p className="text-blue-300 text-sm mt-2">
          These are statistical projections based on historical data and performance models. 
          Sports analytics provide insights but actual performance may vary. Use for educational and analytical purposes.
        </p>
      </div>
    </div>
  );
};