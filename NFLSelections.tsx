import React, { useState, useEffect } from 'react';

interface NFLSelectionsProps {}

interface NFLAnalysis {
  id: string;
  confidence: number;
  statWeight: number;
  metrics: NFLMetric[];
  riskScore: number;
  expectedValue: number;
}

interface NFLMetric {
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

export const NFLSelections: React.FC<NFLSelectionsProps> = () => {
  const [nflAnalyses, setNflAnalyses] = useState<NFLAnalysis[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnalysisIds, setSelectedAnalysisIds] = useState<{[key: string]: string}>({});

  useEffect(() => {
    fetchNFLAnalyses();
  }, []);

  const fetchNFLAnalyses = async () => {
    // Simulate API call to get NFL analyses
    const mockAnalyses: NFLAnalysis[] = [
      {
        id: 'nfl-1',
        confidence: 99.2,
        statWeight: 25.0,
        riskScore: 15,
        expectedValue: 2400,
        metrics: [
          {
            id: 'nfl-1-p1',
            player: 'Josh Allen',
            position: 'QB',
            statType: 'Passing TDs',
            projectedValue: '1.2',
            analysis: 'BELOW_AVERAGE',
            confidence: 97.8,
            ev: 0.18,
            reasoning: [
              'Bills vs Broncos - Broncos allow only 0.9 TDs/game to QBs',
              'Allen trending BELOW in last 3 games (1, 0, 2 TDs)',
              'Broncos secondary ranked #2 vs pass, Allen 15% under season avg vs top defenses'
            ]
          },
          {
            id: 'nfl-1-p2',
            player: 'Saquon Barkley',
            position: 'RB',
            statType: 'Rushing Yards',
            projectedValue: '92.3',
            analysis: 'ABOVE_AVERAGE',
            confidence: 98.1,
            ev: 0.22,
            reasoning: [
              'Eagles offense ranks #2 in rushing attempts vs Broncos run defense #27',
              'Barkley averages 112 rush yards vs defenses allowing 100+',
              'Broncos B2B games = 2.3 rush yards per attempt increase for RBs'
            ]
          },
          {
            id: 'nfl-1-p3',
            player: 'Tyreek Hill',
            position: 'WR',
            statType: 'Receiving Yards',
            projectedValue: '95.8',
            analysis: 'ABOVE_AVERAGE',
            confidence: 96.9,
            ev: 0.19,
            reasoning: [
              'Dolphins vs Chiefs - Hill averages 127 yards vs Chiefs career',
              'Chiefs secondary injury report: 3 CBs questionable',
              'Weather: 25mph winds favor deep ball (Hill specialty)'
            ]
          },
          {
            id: 'nfl-1-p4',
            player: 'Aaron Rodgers',
            position: 'QB',
            statType: 'Passing Yards',
            projectedValue: '287.4',
            analysis: 'ABOVE_AVERAGE',
            confidence: 97.4,
            ev: 0.16,
            reasoning: [
              'Jets vs Rams - Rams defense ranked #30 vs pass, 305 yards allowed',
              'Rodgers 78% completion rate vs Rams historically',
              'Divisional game intensity = 18% yardage increase for QBs'
            ]
          },
          {
            id: 'nfl-1-p5',
            player: 'Amon-Ra St. Brown',
            position: 'WR',
            statType: 'Receptions',
            projectedValue: '8.1',
            analysis: 'ABOVE_AVERAGE',
            confidence: 95.8,
            ev: 0.14,
            reasoning: [
              'Lions vs Vikings - Vikings LBs injured, 8.2 avg receptions allowed',
              'St. Brown 9 catches last meeting vs Vikings',
              'Target share 28% when Lions playing from behind (trailing in 2nd half projections)'
            ]
          }
        ]
      },
      {
        id: 'nfl-2',
        confidence: 99.1,
        statWeight: 25.0,
        riskScore: 8,
        expectedValue: 1200,
        metrics: [
          {
            id: 'nfl-2-p1',
            player: 'Patrick Mahomes',
            position: 'QB',
            statType: 'Passing Yards',
            projectedValue: '295.7',
            analysis: 'ABOVE_AVERAGE',
            confidence: 98.2,
            ev: 0.21,
            reasoning: [
              'Chiefs vs Dolphins - Dolphins defense ranks #28 vs pass',
              'Mahomes averages 325 yards vs Dolphins (career)',
              'Dolphins travel fatigue: B2B games = 22% increase Mahomes yards'
            ]
          },
          {
            id: 'nfl-2-p2',
            player: 'Travis Kelce',
            position: 'TE',
            statType: 'Receiving Yards',
            projectedValue: '82.4',
            analysis: 'ABOVE_AVERAGE',
            confidence: 97.6,
            ev: 0.19,
            reasoning: [
              'Chiefs vs Dolphins - Kelce averages 89 yards vs Dolphins',
              'Dolphins LBs rank #30 vs TEs, 89 yards allowed',
              'Mahomes targets Kelce 28% when Chiefs playing from behind'
            ]
          },
          {
            id: 'nfl-2-p3',
            player: 'Joe Mixon',
            position: 'RB',
            statType: 'Rushing Yards',
            projectedValue: '97.8',
            analysis: 'ABOVE_AVERAGE',
            confidence: 96.8,
            ev: 0.17,
            reasoning: [
              'Bengals vs Raiders - Raiders defense ranks #29 vs run, 134 rush yards allowed',
              'Mixon averages 108 rush yards vs defenses allowing 130+',
              'Raiders last in league in rush attempts allowed per game'
            ]
          },
          {
            id: 'nfl-2-p4',
            player: 'CeeDee Lamb',
            position: 'WR',
            statType: 'Receptions',
            projectedValue: '7.8',
            analysis: 'ABOVE_AVERAGE',
            confidence: 95.9,
            ev: 0.15,
            reasoning: [
              'Cowboys vs 49ers - 49ers allow 8.1 receptions to #1 WRs',
              'Lamb 8 catches vs 49ers last meeting',
              'Cowboys trailing = Lamb gets more targets (24% target share)'
            ]
          },
          {
            id: 'nfl-2-p5',
            player: 'Jalen Hurts',
            position: 'QB',
            statType: 'Rushing Yards',
            projectedValue: '67.9',
            analysis: 'ABOVE_AVERAGE',
            confidence: 96.4,
            ev: 0.18,
            reasoning: [
              'Eagles vs Broncos - Broncos defense allows 2.3 rushing yards to QBs',
              'Hurts averages 78 rushing yards vs defenses allowing 70+',
              'Broncos defense rank #27 vs QBs on ground, 3.1 YPC allowed'
            ]
          }
        ]
      }
    ];

    setNflAnalyses(mockAnalyses);
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading NFL performance analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-2">NFL Performance Analytics</h1>
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
        <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4">
          <div className="text-red-400 text-sm">Active Analyses:</div>
          <div className="text-white text-2xl font-bold">{nflAnalyses.length}</div>
        </div>
        <div className="bg-green-600/20 border border-green-500/30 rounded-lg px-4 py-2">
          <div className="text-green-400 text-sm">Avg Confidence:</div>
          <div className="text-white text-2xl font-bold">
            {(nflAnalyses.reduce((acc, a) => acc + a.confidence, 0) / nflAnalyses.length).toFixed(1)}%
          </div>
        </div>
        <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg px-4 py-2">
          <div className="text-blue-400 text-sm">Players Tracked:</div>
          <div className="text-white text-2xl font-bold">
            {nflAnalyses.reduce((acc, a) => acc + a.metrics.length, 0)}
          </div>
        </div>
      </div>

      {/* NFL Analysis Cards */}
      <div className="space-y-6">
        {nflAnalyses.map((analysis) => (
          <div key={analysis.id} className="bg-gray-900 border border-red-500/20 rounded-lg p-6">
            {/* Analysis Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {analysis.statWeight}x WEIGHT
                </div>
                <div className="bg-green-600/20 border border-green-500/30 rounded-lg px-3 py-1">
                  <span className="text-green-400 text-sm">Confidence:</span>
                  <span className="text-white font-bold ml-1">{analysis.confidence}%</span>
                </div>
                <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg px-3 py-1">
                  <span className="text-blue-400 text-sm">{analysis.metrics.length} Metrics</span>
                </div>
              </div>
              
              {/* Analysis Selector */}
              <button
                onClick={() => handleSelectAnalysis(analysis.id)}
                className={`px-6 py-2 rounded-lg font-bold transition-colors ${
                  selectedAnalysisIds[analysis.id]
                    ? 'bg-red-600 hover:bg-red-700 text-white'
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
                      <div className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
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