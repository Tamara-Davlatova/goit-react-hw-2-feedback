import { Component } from 'react';

import Buttons from './Components/Buttons/Buttons';
import Statistics from './Components/Statistics/Statistics';
import Section from './Components/Section/Section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonChange = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const countTotalFeedback = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0,
    );
    const countPositiveFeedbackPercentage = Math.round(
      (this.state.good / countTotalFeedback) * 100,
    );
    return (
      <Section title="PLEASE LEAVE FEEDBACK">
        <Buttons options={options} onChange={this.handleButtonChange} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    );
  }
}
