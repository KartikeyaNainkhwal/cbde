import { Search, Sun, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../index.css"; // We'll create this CSS file

function Api() {
  return (
    <div className="documentation-container">
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <Link to="/" className="logo-link">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    fill="#00C2FF"
                  />
                  <path
                    d="M15 6.5C15 8.433 13.433 10 11.5 10S8 8.433 8 6.5 9.567 3 11.5 3 15 4.567 15 6.5z"
                    fill="#00C2FF"
                  />
                  <path
                    d="M15 17.5c0 1.933-1.567 3.5-3.5 3.5S8 19.433 8 17.5 9.567 14 11.5 14s3.5 1.567 3.5 3.5z"
                    fill="#00C2FF"
                  />
                </svg>
              </div>
              <span className="logo-text">Smartpay</span>
            </Link>
          </div>
          <div className="search-section">
            <div className="search-container">
              <Search className="search-icon" />
              <input
                type="search"
                placeholder="Search..."
                className="search-input"
              />
              <div className="search-shortcut">Ctrl K</div>
            </div>
          </div>
          <div className="action-section">
            <Link to="/contact" className="contact-link">
              Contact Us
            </Link>
            <Link
              to="/site"
              className="site-link"
            >
              Go to Site <ArrowRight className="arrow-icon" />
            </Link>
            <button className="theme-toggle">
              <Sun className="sun-icon" />
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </div>
      </header>
      <div className="main-container">
        <aside className="sidebar">
          <div className="sidebar-content">
            <div className="sidebar-menu">
              <div className="menu-section">
                <Link
                  to="#"
                  className="menu-link active"
                >
                  Documentation
                </Link>
                <Link
                  to="#"
                  className="menu-link"
                >
                  API Reference
                </Link>
              </div>
              <div className="menu-section">
                <h4 className="menu-title">Get Started</h4>
                <div className="menu-items">
                  <Link
                    to="#"
                    className="menu-item active"
                  >
                    Introduction
                  </Link>
                  <Link
                    to="#"
                    className="menu-item"
                  >
                    Quickstart
                  </Link>
                  <Link
                    to="#"
                    className="menu-item"
                  >
                    Development Guide
                  </Link>
                  <Link
                    to="#"
                    className="menu-item"
                  >
                    UI Builder Guide
                  </Link>
                </div>
              </div>
              <div className="menu-section">
                <h4 className="menu-title">Change Log</h4>
                <div className="menu-items">
                  <Link
                    to="#"
                    className="menu-item"
                  >
                    Changelog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <main className="content">
          <div className="content-main">
            <div className="breadcrumb">
              <div className="breadcrumb-text">Docs</div>
            </div>
            <div className="content-header">
              <h1 className="title">Introduction</h1>
              <p className="subtitle">
                Smartpay is an on-chain protocol enabling fintech wallets to accept and transfer digital dollar
                payments instantly and cost effectively. Built on Solana technology and leveraging Circle
                infrastructure, Smartpay is a next generation protocol for a new era of payments across Africa.
              </p>
            </div>
            <div className="hero-image">
              <div className="hero-content">
                <div className="hero-logo">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                      fill="#00C2FF"
                    />
                    <path
                      d="M15 6.5C15 8.433 13.433 10 11.5 10S8 8.433 8 6.5 9.567 3 11.5 3 15 4.567 15 6.5z"
                      fill="#00C2FF"
                    />
                    <path
                      d="M15 17.5c0 1.933-1.567 3.5-3.5 3.5S8 19.433 8 17.5 9.567 14 11.5 14s3.5 1.567 3.5 3.5z"
                      fill="#00C2FF"
                    />
                  </svg>
                  <span className="hero-text">Smartpay</span>
                </div>
              </div>
            </div>
          </div>
          <div className="content-sidebar">
            <div className="sidebar-sticky">
              <div className="sidebar-header">
                <div className="sidebar-title">
                  <div className="sidebar-indicator" />
                  <h4 className="sidebar-title-text">On this page</h4>
                </div>
              </div>
              <div className="sidebar-links">
                <div>
                  <Link to="#key-features" className="sidebar-link active">
                    Key Features
                  </Link>
                </div>
                <div>
                  <Link to="#incentive-aligned" className="sidebar-link">
                    Incentive Aligned
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Api;
