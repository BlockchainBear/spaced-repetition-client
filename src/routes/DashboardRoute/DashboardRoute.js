import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <h2>{this.context.language.name}</h2>
            <img className="flagIcon" src={Flag} alt="French flag icon" />
          </div>
          <p>Total correct answers: {this.context.language.total_score}</p>
          <Link to="/learn">
            <button className="practiceBtn">Start practicing</button>
          </Link>
          <h3 className="practiceWordTitle">Words to practice</h3>
          <DashboardWordCard words={this.context.words} />
        </div>
      </section>
    );
  }
}

export default DashboardRoute;
