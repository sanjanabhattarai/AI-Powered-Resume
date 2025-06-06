import React from 'react';
import './Dashboard.css'; // Import the CSS file for styles

const Dashboard = () => {
  return (
    <div className="container">
      {/* Aside section */}
      <aside>
        <div className="top">
          <div className="logo">
            <span className="danger">AI POWERED RESUME</span>
          </div>
          <div className="close" id="closeBtn">
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>
        <div className="sidebar" id="sidebar">
          <a href="#" className="toggle-text dashboard">
            <span className="material-symbols-outlined">grid_view</span>
            <h3>Dashboard</h3>
          </a>
          <a href="#" className="toggle-text users">
            <span className="material-symbols-outlined">person_outline</span>
            <h3>Users</h3>
          </a>
          <a href="#" className="toggle-text resume-analysis">
            <span className="material-symbols-outlined">search</span>
            <h3>Resume Analysis</h3>
          </a>
          <a href="#" className="toggle-text job-match-check">
            <span className="material-symbols-outlined">search</span>
            <h3>Job Match Check ⭐</h3>
          </a>
          <a href="#" className="toggle-text ai-score-report">
            <span className="material-symbols-outlined">bar_chart</span>
            <h3>AI Score & Report</h3>
          </a>
          <a href="#" className="toggle-text resume-suggestions">
            <span className="material-symbols-outlined">lightbulb</span>
            <h3>Resume Suggestions ⭐</h3>
          </a>
          <a href="#" className="toggle-text messages">
            <span className="material-symbols-outlined">outgoing_mail</span>
            <h3>Messages</h3>
          </a>
          <a href="#" className="toggle-text settings">
            <span className="material-symbols-outlined">settings</span>
            <h3>Settings</h3>
          </a>
          <a href="#" className="toggle-text logout">
            <span className="material-symbols-outlined">logout</span>
            <h3>Log-out</h3>
          </a>
        </div>
      </aside>

      {/* Main section */}
      <main>
        <h1>Main Dashboard</h1>
      </main>

      {/* Right section */}
      <div className="right">
        <h1>Right Section Content</h1>
      </div>
    </div>
  );
};

export default Dashboard;
