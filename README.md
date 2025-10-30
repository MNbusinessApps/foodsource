# 📊 SPORTS ANALYTICS DASHBOARD

**Professional Sports Performance Analytics Platform**

## 🚀 Quick Start (One Command)

1. **Install Docker** (if not already installed):
   - Windows/Mac: https://docs.docker.com/get-docker/
   - Linux: `sudo apt install docker docker-compose`

2. **Start the app**:
   ```bash
   # Download this folder to your machine
   cd sports-analytics-dashboard
   bash START-LOCALLY.sh
   ```

3. **Visit these URLs** after 30-60 seconds:
   - 🏈 **NFL Analytics**: http://localhost:3000/nfl
   - 🏀 **NBA Analytics**: http://localhost:3000/nba
   - 📊 **Main Dashboard**: http://localhost:3000
   - 🔧 **API Docs**: http://localhost:8000/docs

## 🎯 Advanced Analytics Engine

Professional-grade sports analytics with machine learning-powered performance predictions:
- **Performance Predictions**: AI-driven statistical analysis
- **Multi-sport Coverage**: NFL, NBA, College Sports
- **Real-time Data**: Live statistics and game analysis
- **Professional Tools**: Used by sports analysts and teams

## 🏈 NFL Analytics Features

- **Weather Impact Model**: Wind, temperature, and precipitation effects on performance
- **Professional Trend Analysis**: Historical performance patterns and statistical trends
- **Injury Impact Calculator**: How player injuries affect team performance
- **Performance Combinations**: 5-stat analysis with confidence scoring
- **Quick Analysis Interface**: Click to view detailed player performance data

## 🏀 NBA Analytics Features  
- **Rest Day Analysis**: How back-to-back games affect player performance
- **Referee Impact Database**: Statistical analysis of referee calling patterns
- **Shot Chart Optimization**: Favorable shooting locations vs opponent defense
- **Travel Fatigue Calculator**: How travel schedules affect performance
- **Daily Performance Combinations**: Optimized statistical analysis across all games

## 📊 Analytics Dashboard
- **Best Performance Combinations**: Top statistical analysis for each game day
- **Expected Performance Calculator**: Statistical probability and projection models
- **Risk Assessment**: Performance variance and statistical confidence intervals
- **Advanced Filtering**: Customizable analysis by player, team, or statistical category
- **Risk Management**: Tracks daily caps and bankroll usage
- **Quick Parlay Builder**: Drag & drop interface for custom parlays

## 🧠 Professional Analytics Features

### 📈 **Advanced Statistical Models**
- **Weather Performance Impact**: How environmental factors affect statistical output
- **Historical Trend Analysis**: Long-term performance pattern recognition
- **Injury Impact Modeling**: How player absences affect team statistics
- **Matchup Optimization**: Historical performance vs specific opponents
- **Rest Day Analysis**: Statistical variance based on schedule patterns
- **Correlation Analysis**: Understanding statistical relationships between metrics

### 🎲 **Professional Insights**  
- **Opening Statistical Models**: How statistical baselines are calculated
- **Performance Prediction Algorithms**: Machine learning approaches to forecasting
- **Statistical Variance Tracking**: When predictions differ from actual results
- **Pattern Recognition Systems**: Identifying non-obvious statistical relationships
- **Performance Optimization**: Advanced analytics for statistical improvement

### 📊 **Mathematical Models**
```
Statistical Confidence = (Historical Accuracy × Model Weight) - Variance Factor
Target Confidence: >90% statistical reliability
Example: 99% confidence × 0.85 model weight = 84% adjusted confidence
```

## 🏗️ Alternative Setup (Without Docker)

If you prefer running components separately:

```bash
# Terminal 1 - Backend API
cd backend
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

# Terminal 2 - Frontend  
cd frontend
npm install
npm start

# Terminal 3 - Mobile (optional)
cd mobile  
npm install
npx expo start
```

## 📁 App Structure

```
sports-analytics-dashboard/
├── frontend/          # React Web Dashboard
│   ├── src/components/NFLSelections.tsx   # 🏈 NFL page
│   ├── src/components/NBASelections.tsx   # 🏀 NBA page  
│   └── src/components/TodayDashboard.tsx  # 📊 Analytics dashboard
├── mobile/            # React Native Mobile App
│   ├── src/screens/NFLScreen.tsx         # 🏈 Mobile NFL
│   └── src/screens/NBAScreen.tsx         # 🏀 Mobile NBA
├── backend/           # FastAPI + WebSocket API
│   └── app/main.py    # API endpoints for NFL/NBA data
├── infra/             # Docker configuration
├── START-LOCALLY.sh   # 🚀 One-command startup
└── README.md          # This file
```

## 🔗 Service URLs & Ports

When running locally:

- **🌐 Frontend Web App**: http://localhost:3000
  - Main Dashboard: http://localhost:3000/
  - NFL Page: http://localhost:3000/nfl  
  - NBA Page: http://localhost:3000/nba

- **🔧 Backend API**: http://localhost:8000
  - API Documentation: http://localhost:8000/docs
  - NFL Predictions: http://localhost:8000/v1/predictions/nfl
  - NBA Predictions: http://localhost:8000/v1/predictions/nba

- **📱 Mobile App**: http://localhost:19000
  - Scan QR code with Expo Go app

- **🗄️ Database**: localhost:5432
- **⚡ Redis Cache**: localhost:6379

## 📊 Sample Analytics & Features

The platform includes realistic sample data showing:

### 🏈 NFL Performance Analytics Examples
- **Josh Allen Statistical Projection**: 1.2 TDs (99.1% confidence level)
- **Saquon Barkley Rushing Performance**: 92.3 yards (98.7% confidence)  
- **Tyreek Hill Receiving Analytics**: 95.8 yards (99.3% confidence)
- **Aaron Rodgers Passing Analysis**: 287.4 yards (98.9% confidence)
- **Amon-Ra St. Brown Reception Metrics**: 8.1 catches (99.0% confidence)

### 🏀 NBA Performance Analytics Examples  
- **LeBron James Scoring Projection**: 26.2 points (99.2% confidence)
- **Jayson Tatum Performance Analysis**: 29.1 points (98.8% confidence)
- **Giannis Rebounding Analytics**: 13.4 rebounds (99.1% confidence)
- **Luka Dončić Assists Projection**: 10.3 assists (98.9% confidence)
- **Stephen Curry Three-Point Analysis**: 4.8 threes (99.3% confidence)

### 🎯 Statistical Confidence Levels
- **99%+**: EXECUTION - Highest statistical confidence, highest reliability
- **95-98%**: STRONG - Very high confidence in statistical model
- **90-94%**: MODERATE - Good statistical edge, monitoring recommended
- **<90%**: VARIABLE - Lower confidence, requires additional analysis

## 📱 Mobile Features

### Butcher's Drawer Menu
- **Today's Slaughter**: Main prediction dashboard
- **Weapon Selection**: Sport-specific tools (NBA, NFL, CBB, NHL)
- **Butcher's Block**: Saved predictions and alerts
- **Carving Board**: Line movement tracking
- **Slaughterhouse**: Analytics and performance
- **The Locker**: Settings and preferences

### Key Components
- **Live CT Clock**: Real-time Central Time with server sync
- **Predation Cards**: Swipeable, filterable, deadly accurate
- **Detailed Carnage**: Full reasoning + historical data
- **Butcher's Cuts**: Smart filters by sport, confidence, time
- **Alert System**: High-confidence kill alerts

## ⚡ Real-Time Architecture

### WebSocket Carnage Pipeline
```
PrizePicks Feed → Redis Pub/Sub → FastAPI WebSocket → Client Updates
```

### Data Flow
1. **Scrapers**: Real-time PrizePicks data ingestion
2. **Carnage Processing**: Normalization + canonicalization
3. **Prediction Engine**: Mathematical slaughter calculations
4. **Distribution**: WebSocket broadcast to all devices
5. **UI Updates**: Instant visual updates with smooth animations

## 🏈 Butcher's Classification System

### NBA Carving
- **Points (PTS)**: Slicing through defenses
- **Rebounds (REB)**: Gorging on glass
- **Assists (AST)**: Feasting on teammates
- **Three Pointers (3PM)**: Long-range slaughter
- **Steals (STL)**: Stealing possession
- **Blocks (BLK)**: Rejecting attempts

### NFL Massacre  
- **Passing Yards (PY)**: Air raid destruction
- **Rushing Yards (RY)**: Ground assault
- **Receiving Yards (REY)**: Aerial feasting
- **Touchdowns (TD)**: End zone slaughter
- **R+R Yards (R+R)**: Total ground and air domination

### College Carnage
- Same precision as NBA with collegiate intensity
- **PRA (P+R+A)**: Triple-double feast potential

### NHL Dismantling
- **Goals (G)**: Net penetration
- **Assists (A)**: Setup feeding
- **Shots (SOG)**: Sniper accuracy
- **Saves (SV)**: Goalie fortress defense

## 🎯 Premium Reasoning Examples

### EXECUTION LEVEL PREDICTION
```
LeBron James - Points (24.5)
RECOMMENDATION: OVER
CONFIDENCE: 92% - EXECUTION LEVEL

BUTCHER'S ANALYSIS:
• Home court资源优势: +3.1 PPG average (lethal)
• Opponent allows 28.4 PPG to SF position (feast time)
• Lakers offense channels through James (+4.2% usage)
• Recent form: 27.8 PPG over last 5 (slaughter mode)
• Matchup: Interior defense surrendering 1.31 PPP

MATHEMATICAL CARNAGE: +31% EDGE
BOOKIE SLAUGHTER PROBABILITY: 94%
```

### DEMOLITION LEVEL PREDICTION
```
Josh Allen - Passing Yards (249.5)
RECOMMENDATION: UNDER  
CONFIDENCE: 82% - DEMOLITION LEVEL

BLOODY ANALYSIS:
• Road passer rating massacre: 84.7 (vs 105.1 home)
• Opponent allows only 6.2 YPA (lockdown defense)
• Weather warfare: 18+ mph winds (ground & pound)
• Bills historical in winds: 238 avg yards (slaughter)
• Matchup factor: Top-5 defense allowing 6.8 YPA

MATHEMATICAL CARNAGE: +18% EDGE
BOOKIE KILL PROBABILITY: 83%
```

## 🏆 Dashboard Metrics

### Slaughter Statistics
- **Daily Kill Count**: All available predictions
- **Execution Count**: 90%+ confidence picks (ready to slaughter)
- **Average Carnage**: Mean percentage advantage
- **Butcher's Track Record**: Historical accuracy rates

### Advanced Analytics
- **Line Movement Tracker**: Real-time odds slaughter
- **Historical Massacre**: Player vs team domination records
- **Market Inefficiency Hunter**: Value identification algorithms
- **Bankroll Management**: Risk-adjusted feast suggestions

## 🛠️ What Powers The App

### Frontend
- **React 18 + TypeScript**: Fast, type-safe interface
- **Tailwind CSS**: Professional dark theme
- **React Router**: Smooth navigation between NFL/NBA pages

### Backend  
- **FastAPI**: High-speed Python API
- **Sample Data**: Realistic NFL/NBA props for testing
- **WebSocket Ready**: Real-time updates architecture

### Infrastructure
- **Docker**: All services in containers
- **PostgreSQL**: Data storage
- **Redis**: Fast caching
- **Auto-scaling**: Built for production

## 🛑 Stopping The App

```bash
# Stop all services
docker compose down

# Stop and remove volumes (fresh start)
docker compose down -v
```

## 📞 Support & Troubleshooting

**Check service status:**
```bash
docker compose ps
```

**View logs:**
```bash
docker compose logs -f [service-name]
# Examples:
docker compose logs -f backend
docker compose logs -f frontend
```

**Restart services:**
```bash
docker compose restart [service-name]
```

**Common Issues:**
- Port already in use: `docker compose down && docker compose up -d`
- Services not starting: Check Docker Desktop is running
- Frontend not loading: Wait 30-60 seconds for backend to initialize

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.9+
- Docker & Docker Compose
- PostgreSQL 14+
- Redis 6+

### Installation
```bash
git clone <repository>
cd thebookiebutcher
chmod +x scripts/dev.sh
./scripts/dev.sh
```

### Manual Setup
```bash
# Backend Carnage
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Frontend Feast
cd frontend
npm install
npm start

# Mobile Slaughter
cd mobile
npm install
npx expo start
```

## 📊 API Endpoints

### Core Weapons
- `GET /v1/predictions/today` - Today's slaughter predictions
- `GET /v1/predictions/{id}` - Detailed analysis and reasoning
- `GET /v1/props/live` - Live PrizePicks lines
- `GET /v1/time` - Server time synchronization
- `WebSocket /ws/props` - Real-time update feast

### WebSocket Messages
```json
{
  "type": "carnage_update",
  "payload": {
    "prediction_id": "bb-12345",
    "player": "LeBron James", 
    "stat": "Points",
    "line": 24.5,
    "recommendation": "OVER",
    "confidence": 0.92,
    "analysis": "Detailed mathematical slaughter...",
    "edge": 0.31,
    "level": "EXECUTION"
  }
}
```

## ⚖️ Legal & Compliance

### Important Disclaimers
- **Analytical Purpose Only**: For advanced sports analysis
- **Recommendations Only**: No actual betting placement
- **No Guarantees**: Past performance ≠ future results  
- **Responsible Gaming**: Encourage intelligent betting practices

### Data Ethics
- **Public Data**: No user account requirements
- **Respectful Usage**: Rate limited and compliant
- **Terms Adherence**: PrizePicks TOS compliance

## 🤝 Contributing to the Carnage

### Development Workflow
1. Fork the repository
2. Create feature branch  
3. Implement with testing
4. Submit pull request
5. Code review and merge

### Code Standards
- **TypeScript**: Strict typing for precision
- **ESLint**: Airbnb configuration
- **Prettier**: Consistent formatting
- **Husky**: Pre-commit validation
- **Jest**: Comprehensive testing

## 📞 Support & Documentation

- **Issues**: GitHub Issues tracker
- **Documentation**: `/docs` endpoint
- **API Reference**: Swagger UI at `/docs`
- **WebSocket Testing**: `/ws/props` live feed

## 📄 License

MIT License - see LICENSE file for full terms.

---

**Built for the carnivore. Engineered for the kill. Powered by mathematical slaughter.** 🥩⚡

*"Every line is a meal. Every prediction is a feast. The bookies fear The Butcher."*