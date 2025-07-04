import React, { useState, useEffect } from 'react';
import {
  FaChartLine,
  FaChartBar,
  FaArrowUp,
  FaArrowDown,
} from 'react-icons/fa';
import '../styles/brandColors.css';

const PerformanceMetrics = ({ data, account }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [isLoading, setIsLoading] = useState(false);
  // Mock metrics if none provided
  const mockMetrics = {
    earningsGrowth: 12.5, // Percentage increase from previous period
    teamGrowth: 8.3, // Percentage increase from previous period
    conversionRate: 75, // Percentage of referrals who activated
    activeMembers: 85, // Percentage of team that is active
    levelDistribution: [
      { level: 1, count: 3 },
      { level: 2, count: 9 },
      { level: 3, count: 12 },
      { level: 4, count: 1 },
      { level: 5, count: 0 },
    ],
    weeklyPerformance: [
      { day: 'Mon', earnings: 18.45 },
      { day: 'Tue', earnings: 22.15 },
      { day: 'Wed', earnings: 15.78 },
      { day: 'Thu', earnings: 25.32 },
      { day: 'Fri', earnings: 20.15 },
      { day: 'Sat', earnings: 15.75 },
      { day: 'Sun', earnings: 12.85 },
    ],
  };

  const metrics = data || mockMetrics;

  // Ensure levelDistribution exists and is an array
  const levelDistribution =
    metrics.levelDistribution || mockMetrics.levelDistribution || [];
  const safeMetrics = {
    ...metrics,
    levelDistribution,
    earningsGrowth: metrics.earningsGrowth || 0,
    teamGrowth: metrics.teamGrowth || 0,
    conversionRate: metrics.conversionRate || 0,
    activeMembers: metrics.activeMembers || 0,
  };

  return (
    <div className="performance-metrics-container">
      <h3 className="section-title">
        <FaChartBar /> Performance Metrics
      </h3>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <h4>Earnings Growth</h4>
            <div
              className={`trend-indicator ${safeMetrics.earningsGrowth >= 0 ? 'positive' : 'negative'}`}
            >
              {safeMetrics.earningsGrowth >= 0 ? (
                <FaArrowUp />
              ) : (
                <FaArrowDown />
              )}
              {Math.abs(safeMetrics.earningsGrowth)}%
            </div>
          </div>
          <div className="metric-bar-container">
            <div
              className={`metric-bar ${safeMetrics.earningsGrowth >= 0 ? 'positive' : 'negative'}`}
              style={{
                width: `${Math.min(Math.abs(safeMetrics.earningsGrowth), 100)}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h4>Team Growth</h4>
            <div
              className={`trend-indicator ${safeMetrics.teamGrowth >= 0 ? 'positive' : 'negative'}`}
            >
              {safeMetrics.teamGrowth >= 0 ? <FaArrowUp /> : <FaArrowDown />}
              {Math.abs(safeMetrics.teamGrowth)}%
            </div>
          </div>
          <div className="metric-bar-container">
            <div
              className={`metric-bar ${safeMetrics.teamGrowth >= 0 ? 'positive' : 'negative'}`}
              style={{
                width: `${Math.min(Math.abs(safeMetrics.teamGrowth), 100)}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h4>Conversion Rate</h4>
            <div className="percentage-indicator">
              {safeMetrics.conversionRate}%
            </div>
          </div>
          <div className="metric-bar-container">
            <div
              className="metric-bar neutral"
              style={{ width: `${safeMetrics.conversionRate}%` }}
            ></div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h4>Active Members</h4>
            <div className="percentage-indicator">
              {safeMetrics.activeMembers}%
            </div>
          </div>
          <div className="metric-bar-container">
            <div
              className="metric-bar neutral"
              style={{ width: `${safeMetrics.activeMembers}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="level-distribution">
        <h4>Team Level Distribution</h4>
        <div className="distribution-chart">
          {levelDistribution.map((level, index) => (
            <div key={`level-${level.level}`} className="level-bar-container">
              <div className="level-label">L{level.level}</div>
              <div
                className="level-bar"
                style={{
                  height: `${Math.min(level.count * 10, 100)}%`,
                  backgroundColor: `hsl(${210 + index * 15}, 80%, 60%)`,
                }}
              ></div>
              <div className="level-count">{level.count}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="metrics-actions">
        <button className="metrics-btn">Export Data</button>
        <button className="metrics-btn">Detailed Analytics</button>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
