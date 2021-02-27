import React, { Component } from 'react';
import LearnContext from '../../contexts/LearnContext';

export class ResultCard extends Component {
  static contextType = LearnContext;

  handleClick = () => {
    this.context.setIsResultDisplayed(false);
  };

  render() {
    return <section></section>;
  }
}

export default ResultCard;
