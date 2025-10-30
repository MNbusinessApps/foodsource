#!/bin/bash

echo "📊 SPORTS ANALYTICS DASHBOARD"
echo "==============================="
echo ""
echo "Starting all services locally..."
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first:"
    echo "   - Windows/Mac: https://docs.docker.com/get-docker/"
    echo "   - Linux: sudo apt install docker docker-compose"
    echo ""
    exit 1
fi

# Check if Docker is running
if ! docker info &> /dev/null; then
    echo "❌ Docker is not running. Please start Docker first."
    echo ""
    exit 1
fi

echo "✅ Docker is ready!"
echo ""
echo "Starting services..."
echo "   📱 Frontend: http://localhost:3000"
echo "   🔧 Backend:  http://localhost:8000"
echo "   📲 Mobile:   http://localhost:19000"
echo ""

# Start all services
docker compose up -d

echo ""
echo "🚀 SERVICES STARTING..."
echo ""
echo "Wait 30-60 seconds for services to fully initialize, then visit:"
echo ""
echo "🏈 NFL PAGE:     http://localhost:3000/nfl"
echo "🏀 NBA PAGE:     http://localhost:3000/nba" 
echo "📊 MAIN DASH:    http://localhost:3000"
echo "🔧 API DOCS:     http://localhost:8000/docs"
echo ""
echo "📱 For mobile testing: Download Expo Go app and scan QR at http://localhost:19000"
echo ""
echo "🛑 To stop: docker compose down"
echo "======================================="