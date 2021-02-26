import React, { Component } from 'react';

const LanguageContext = React.createContext({
  language: {},
  error: null,
  words: [],
  setError: () => {},
  clearError: () => {},
  setLanguage: () => {},
  clearLanguage: () => {},
  setWords: () => {},
  clearWords: () => {},
});

export default LanguageContext;

export class LanguageProvider extends Component {
  state = {
    language: {},
    error: null,
    words: [],
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setLanguage = (language) => {
      console.log(language)
    this.setState({ language });
  };

  clearLanguage = () => {
    this.setState({ language: {} });
  };

  setWords = (words) => {
    console.log(words)
    this.setState({ words });
  };

  clearWords = () => {
    this.setState({ words: [] });
  };

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLanguage: this.setLanguage,
      clearLanguage: this.clearLanguage,
      setWords: this.setWords,
      clearWords: this.clearWords,
    };
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
