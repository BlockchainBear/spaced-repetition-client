import React, { Component } from 'react';
import DashboardWordCard from '../../components/DashboardWordCard/DashboardWordCard';
import LanguageContext from '../../contexts/LanguageContext';
import Flag from '../../images/french-flag-icon.jpg';
import LanguageApiService from '../../services/language-api-service';
import './DashboardRoute.css';

class DashboardRoute extends Component {
  static contextType = LanguageContext;

  componentDidMount() {
    LanguageApiService.getLanguage()
      .then((res) => {
        this.context.setLanguage(res.language);
        this.context.setWords(res.words);
      })
      .then(this.context.clearError)
      .catch(this.context.setError);
  }

  render() {
    return (
      <section className="mainWindow">
        <div className="dashboard">
          <div className="langTitle">
            <h2>French</h2>
            <img className="flagIcon" src={Flag} alt="French flag icon" />
          </div>
          <p>Total correct answers:</p>
          <button className="practiceBtn">Start Practicing</button>
          <h3 className="practiceWordTitle">Words to Practice</h3>
          <DashboardWordCard words={this.context.words} />
        </div>
      </section>
    );
  }
}

export default DashboardRoute;
