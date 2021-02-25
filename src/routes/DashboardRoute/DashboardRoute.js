import React, { Component } from 'react';
import Flag from '../../images/french-flag-icon.jpg'
import './DashboardRoute.css'

class DashboardRoute extends Component {
  render() {
    return (
      <section className="mainWindow">
        <div className="dashboard">
          <div className="langTitle">
          <h2>French</h2>
          <img className="flagIcon" src={Flag} alt="French flag icon"/>
          </div>
          <p>Total correct answers:</p>
          <button className="practiceBtn">Start Practicing</button>
          <h3 className="practiceWordTitle">Words to Practice</h3>
          <div className="practiceWordBox">
            <div className="practiceWordCard">
              <h4 className="practiceWord">French Word</h4>
              <p className="pwCorrect">correct answer count:</p>
              <p className="pwInCorrect">incorrect answer count:</p>
            </div>
            <div className="practiceWordCard">
              <h4>French Word</h4>
              <p>correct answer count:</p>
              <p>incorrect answer count:</p>
            </div>
            <div className="practiceWordCard">
              <h4>French Word</h4>
              <p>correct answer count:</p>
              <p>incorrect answer count:</p>
            </div>
            <div className="practiceWordCard">
              <h4>French Word</h4>
              <p>correct answer count:</p>
              <p>incorrect answer count:</p>
            </div>
            <div className="practiceWordCard">
              <h4>French Word</h4>
              <p>correct answer count:</p>
              <p>incorrect answer count:</p>
            </div>
            <div className="practiceWordCard">
              <h4>French Word</h4>
              <p>correct answer count:</p>
              <p>incorrect answer count:</p>
            </div>
            <div className="practiceWordCard">
              <h4>French Word</h4>
              <p>correct answer count:</p>
              <p>incorrect answer count:</p>
            </div>
            <div className="practiceWordCard">
              <h4>French Word</h4>
              <p>correct answer count:</p>
              <p>incorrect answer count:</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DashboardRoute;
