import React, { Component } from 'react';
import LearnContext from '../../contexts/LearnContext';
import LanguageApiService from '../../services/language-api-service';
import ResultCard from '../../components/ResultCard/ResultCard';
import './LearningRoute.css';

class LearningRoute extends Component {
  static contextType = LearnContext;

  componentDidMount() {
    LanguageApiService.getHead()
      .then((data) => {
        if (!data) {
          console.error(data);
          throw new Error('Next word not found');
        }
        this.context.setNextWord(data.nextWord);
        this.context.setTotalScore(data.totalScore);
        this.context.setWordCorrectCount(data.wordCorrectCount);
        this.context.setWordIncorrectCount(data.wordIncorrectCount);
      })
      .catch(this.context.setError);
  }

  render() {
    return (
      <section className="mainWindow">
        <div className="learnWindow">
          {!this.context.isResultDisplayed ? (
            <div className="translateFormBox">
              <div className="translateTitleBox">
                <h2 className="translateTitle">Translate the word:</h2>
                <span className="wotd">{this.context.nextWord}</span>
              </div>
              <form className="translateForm">
                <label htmlFor="learn-guess-input" className="translateLabel">
                  What's the translation for this word?
                </label>
                <input
                  type="text"
                  name="learn-guess-input"
                  id="learn-guess-input"
                  className="translateInput"
                  required
                ></input>
                <button type="submit" className="guessBtn">Submit your answer</button>
              </form>
            </div>
          ) : (
            <ResultCard />
          )}
          <div className="scoreBox">
            <p className="correctScore">
              Your total score is: {this.context.totalScore}
            </p>
            <p className="currentScore">
              You have answered this word correctly{' '}
              {this.context.wordCorrectCount} times.
            </p>
            <p className="incorrectScore">
              You have answered this word incorrectly{' '}
              {this.context.wordIncorrectCount} times.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default LearningRoute;
