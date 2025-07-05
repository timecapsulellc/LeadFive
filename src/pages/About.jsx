import React from 'react';
import './About.css';

export default function About({
  account,
  provider,
  signer,
  onConnect,
  onDisconnect,
}) {
  const securityFeatures = [
    {
      icon: '🔒',
      title: 'Trezor Secured',
      description:
        'Hardware wallet ownership ensures maximum security and decentralized control',
      detail:
        'Complete hardware wallet control for unprecedented security measures',
    },
    {
      icon: '🛡️',
      title: 'MEV Protected',
      description:
        'Advanced MEV & DoS protection prevents manipulation and attacks',
      detail:
        'Multi-layer protection against bot attacks and transaction manipulation',
    },
    {
      icon: '👨‍🔬',
      title: 'PhD Audited',
      description:
        'Expert-level security verification by PhD blockchain specialists',
      detail:
        'Comprehensive security audit ensuring code integrity and reliability',
    },
    {
      icon: '⚡',
      title: '7-Layer Security',
      description:
        'Military-grade security architecture with multiple protection layers',
      detail:
        'Bank-grade security implementation with redundant safety measures',
    },
  ];

  const platformStats = [
    { label: 'Security Layers', value: '7+', color: '#00FF88' },
    { label: 'Audit Score', value: '100%', color: '#FFD700' },
    { label: 'Uptime', value: '99.9%', color: '#00D4FF' },
    { label: 'Users Protected', value: '∞', color: '#FF6B35' },
  ];

  return (
    <main className="about-page">
      <div className="about-page-container">
        <div className="about-hero">
        <div className="hero-logo">
          <svg
            width="100"
            height="100"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="aboutGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="50%" stopColor="#7b2cbf" />
                <stop offset="100%" stopColor="#ff6b35" />
              </linearGradient>
              <linearGradient
                id="aboutDarkGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#1a1a2e" />
                <stop offset="100%" stopColor="#16213e" />
              </linearGradient>
            </defs>
            <g transform="translate(200, 200)">
              <path
                d="M -80,-20 L -40,-80 L 0,-60 Z"
                fill="url(#aboutGradient)"
              />
              <path
                d="M -80,-20 L 0,-60 L -30,-10 Z"
                fill="url(#aboutDarkGradient)"
                opacity="0.7"
              />
              <path d="M 40,-80 L 80,-20 L 60,0 Z" fill="url(#aboutGradient)" />
              <path
                d="M 40,-80 L 60,0 L 0,-60 Z"
                fill="url(#aboutDarkGradient)"
                opacity="0.7"
              />
              <path d="M 80,20 L 40,80 L 0,60 Z" fill="url(#aboutGradient)" />
              <path
                d="M 80,20 L 0,60 L 30,10 Z"
                fill="url(#aboutDarkGradient)"
                opacity="0.7"
              />
              <path
                d="M -40,80 L -80,20 L -60,0 Z"
                fill="url(#aboutGradient)"
              />
              <path
                d="M -40,80 L -60,0 L 0,60 Z"
                fill="url(#aboutDarkGradient)"
                opacity="0.7"
              />
              <path d="M -30,-10 L 0,-60 L 30,10 L 0,60 Z" fill="#16213e" />
            </g>
          </svg>
        </div>
        <h1>About LeadFive</h1>
        <p className="hero-subtitle">The Decentralized Incentive Platform</p>
        <p className="hero-description">
          LeadFive represents the pinnacle of blockchain-based decentralized
          platforms, combining cutting-edge security with transparent earning
          potential on BSC Mainnet.
        </p>
      </div>

      <div className="about-content">
        <section className="security-section">
          <h2>🛡️ Unparalleled Security</h2>
          <div className="security-grid">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="security-card">
                <div className="security-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p className="security-description">{feature.description}</p>
                <div className="security-detail">{feature.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="stats-section">
          <h2>📊 Platform Excellence</h2>
          <div className="about-stats">
            {platformStats.map((stat, index) => (
              <div key={index} className="about-stat">
                <div className="stat-value" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mission-section">
          <h2>🎯 Our Mission</h2>
          <div className="mission-content">
            <div className="mission-card">
              <h3>Innovation</h3>
              <p>
                Pioneering the future of decentralized marketing networks
                through blockchain technology and smart contract automation.
              </p>
            </div>
            <div className="mission-card">
              <h3>Security</h3>
              <p>
                Implementing military-grade security measures to protect user
                investments and ensure platform integrity at all times.
              </p>
            </div>
            <div className="mission-card">
              <h3>Transparency</h3>
              <p>
                Providing complete transparency through blockchain verification,
                open-source audits, and real-time transaction visibility.
              </p>
            </div>
          </div>
        </section>

        <section className="technology-section">
          <h2>⚙️ Technology Stack</h2>
          <div className="tech-features">
            <div className="tech-item">
              <span className="tech-label">Blockchain:</span>
              <span className="tech-value">Binance Smart Chain (BSC)</span>
            </div>
            <div className="tech-item">
              <span className="tech-label">Smart Contracts:</span>
              <span className="tech-value">Solidity 0.8.x</span>
            </div>
            <div className="tech-item">
              <span className="tech-label">Security:</span>
              <span className="tech-value">Hardware Wallet Integration</span>
            </div>
            <div className="tech-item">
              <span className="tech-label">Frontend:</span>
              <span className="tech-value">React + Web3 Integration</span>
            </div>
            <div className="tech-item">
              <span className="tech-label">Payments:</span>
              <span className="tech-value">USDT, BNB Native Support</span>
            </div>
          </div>
        </section>

        <section className="contract-section">
          <h2>📋 Contract Information</h2>
          <div className="contract-info">
            <div className="contract-detail">
              <strong>📄 Contract Address:</strong>
              <code>0x29dcCb502D10C042BcC6a02a7762C49595A9E498</code>
            </div>
            <div className="contract-detail">
              <strong>👤 Default Sponsor:</strong>
              <code>0xCeaEfDaDE5a0D574bFd5577665dC58d132995335</code>
            </div>
            <div className="contract-detail">
              <strong>🎫 Referral Code:</strong>
              <code>K9NBHT</code>
            </div>
            <div className="contract-detail">
              <strong>💰 USDT Contract:</strong>
              <code>0x55d398326f99059fF775485246999027B3197955</code>
            </div>
            <div className="contract-detail">
              <strong>🌐 Network:</strong>
              <span>BSC Mainnet (Chain ID: 56)</span>
            </div>
            <div className="contract-detail">
              <strong>📅 Last Updated:</strong>
              <span>June 29, 2025</span>
            </div>
            <div className="contract-detail">
              <strong>Status:</strong>
              <span className="status-active">✅ Active & Verified</span>
            </div>
            <div className="contract-links">
              <a
                href="https://bscscan.com/address/0x29dcCb502D10C042BcC6a02a7762C49595A9E498"
                target="_blank"
                rel="noopener noreferrer"
                className="contract-link"
              >
                📊 View Contract on BSCScan
              </a>
              <a
                href="https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955"
                target="_blank"
                rel="noopener noreferrer"
                className="contract-link"
              >
                💰 View USDT Contract
              </a>
            </div>
          </div>
        </section>

        <section className="resources-section">
          <h2>📚 Resources & Documentation</h2>
          <div className="resources-grid">
            <div className="resource-card featured">
              <div className="resource-header">
                <div className="resource-icon">🤖</div>
                <div className="resource-info">
                  <h3>LeadFive AIRA Presentation</h3>
                  <p className="resource-type">AI Integration & Roadmap</p>
                </div>
              </div>
              <div className="resource-description">
                <p>
                  Comprehensive presentation covering LeadFive's AI integration
                  strategy, AIRA (Artificial Intelligence Referral Assistant)
                  features, roadmap, and future developments in blockchain-powered
                  AI solutions.
                </p>
                <div className="resource-highlights">
                  <span className="highlight">🚀 AI-Powered Platform</span>
                  <span className="highlight">📈 Growth Strategy</span>
                  <span className="highlight">🔮 Future Roadmap</span>
                </div>
              </div>
              <div className="resource-actions">
                <a
                  href="/resources/LeadFive_AIRA_presentation.pdf"
                  download
                  className="resource-btn primary"
                  title="Download LeadFive AIRA Presentation"
                >
                  📥 Download PDF
                </a>
                <a
                  href="/resources/LeadFive_AIRA_presentation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-btn secondary"
                  title="View LeadFive AIRA Presentation"
                >
                  👁️ View Online
                </a>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-header">
                <div className="resource-icon">📋</div>
                <div className="resource-info">
                  <h3>Platform Documentation</h3>
                  <p className="resource-type">User Guide & Technical Specs</p>
                </div>
              </div>
              <div className="resource-description">
                <p>
                  Complete technical documentation covering smart contracts, user
                  guides, and platform specifications for developers and users.
                </p>
              </div>
              <div className="resource-actions">
                <button className="resource-btn secondary" disabled>
                  📄 Coming Soon
                </button>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-header">
                <div className="resource-icon">🔐</div>
                <div className="resource-info">
                  <h3>Security Audit Reports</h3>
                  <p className="resource-type">Third-Party Verification</p>
                </div>
              </div>
              <div className="resource-description">
                <p>
                  Independent security audit reports from blockchain security
                  experts and PhD-level verification documentation.
                </p>
              </div>
              <div className="resource-actions">
                <button className="resource-btn secondary" disabled>
                  🛡️ Coming Soon
                </button>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-header">
                <div className="resource-icon">📊</div>
                <div className="resource-info">
                  <h3>API Documentation</h3>
                  <p className="resource-type">Developer Resources</p>
                </div>
              </div>
              <div className="resource-description">
                <p>
                  RESTful API documentation for developers building on top of
                  the LeadFive platform and integrating with our services.
                </p>
              </div>
              <div className="resource-actions">
                <button className="resource-btn secondary" disabled>
                  ⚙️ Coming Soon
                </button>
              </div>
            </div>
          </div>

          <div className="resource-disclaimer">
            <p>
              <strong>📝 Note:</strong> All resources are provided for
              informational purposes. Please read our{' '}
              <a href="/terms" className="link">
                Terms of Service
              </a>{' '}
              and
              <a href="/privacy" className="link">
                Privacy Policy
              </a>{' '}
              before using our platform.
            </p>
          </div>
        </section>
      </div>
      </div>
    </main>
  );
}
