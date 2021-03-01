import React, { Component } from 'react';
import LearnContext from '../../contexts/LearnContext';
import LanguageApiService from '../../services/language-api-service';
import ResultCard from '../../components/ResultCard/ResultCard';
import './LearningRoute.css';

class LearningRoute extends Component {
  static contextType = LearnContext;

  state = {
    guess: '',
  };

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

  handleOnChange = (e) => {
    const guess = e.target.value;
    this.setState({ guess: guess });
  };

  handleSubmit(e) {
    e.preventDefault();
    const guess = this.state.guess;
    LanguageApiService.submitGuess(guess).then((res) => {
      this.context.setPrevWord(this.context.nextWord);
      this.context.clearError();
      this.context.setTotalScore(res.totalScore);
      this.context.setWordCorrectCount(res.wordCorrectCount);
      this.context.setWordIncorrectCount(res.wordIncorrectCount);
      this.context.setNextWord(res.nextWord);
      this.context.setAnswer(res.answer);
      this.context.setGuess(guess);
      this.context.setIsCorrect(res.isCorrect);
      this.context.setIsResultDisplayed(true);
    });
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
              <form
                className="translateForm"
                onSubmit={(e) => this.handleSubmit(e)}
              >
                <label htmlFor="learn-guess-input" className="translateLabel">
                  What's the translation for this word?
                </label>
                <input
                  type="text"
                  name="learn-guess-input"
                  id="learn-guess-input"
                  className="translateInput"
                  onChange={this.handleOnChange}
                  required
                ></input>
                <button type="submit" className="guessBtn">
                  Submit your answer
                </button>
              </form>
            </div>
          ) : (
            <ResultCard />
          )}
          <div className="scoreBox">
            <div className="DisplayScore">
              <p className="correctScore">
                Your total score is: {this.context.totalScore}
              </p>
            </div>
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
