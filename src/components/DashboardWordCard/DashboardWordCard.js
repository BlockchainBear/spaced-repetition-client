import React, { Component } from 'react';
import './DashboardWordCard.css';

export default class DashboardWordCard extends Component {
  static defaultProps = {
    words: [],
  };

  renderWords = () => {
    if (this.props.words.length === 0) {
      return <p>Practice words not found</p>;
    }
    return (
      <ul className="practiceWordBox">
        {this.props.words.map((word) => {
          return (
            <li className="practiceWordCard" key={word.id}>
              <h4 className="practiceWord">{word.original}</h4>
              <p className="pwCorrect">
                correct answer count: {word.correct_count}
              </p>
              <p className="pwInCorrect">
                incorrect answer count: {word.incorrect_count}
              </p>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return <React.Fragment>{this.renderWords()}</React.Fragment>;
  }
}
