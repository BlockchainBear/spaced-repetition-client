import React, { Component } from 'react';
import LearnContext from '../../contexts/LearnContext';
import './ResultCard.css';

export class ResultCard extends Component {
  static contextType = LearnContext;

  handleClick = () => {
    this.context.setIsResultDisplayed(false);
  };

  renderMessage = () => {
    if (this.context.isCorrect) {
      return <h2 className="resultTitleCorrect">You were correct! :D</h2>;
    } else {
      return (
        <h2 className="resultTitleWrong">Good try, but not quite right :(</h2>
      );
    }
  };

  render() {
    return (
      <div className="feedbackBox">
        {this.renderMessage()}
        <div className="DisplayFeedback">
          <p className="correctTranslation">
            The correct translation for <span en="fr">{this.context.prevWord}</span> was {this.context.answer} and you chose {this.context.guess}!
          </p>
        </div>
        <button className="tryAgainBtn" onClick={this.handleClick}>
          Try another word!
        </button>
      </div>
    );
  }
}

export default ResultCard;
