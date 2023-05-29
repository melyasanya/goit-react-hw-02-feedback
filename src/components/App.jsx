import { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onGoodFeedback = () => {
    this.setState(prev => ({ ...prev, good: prev.good + 1 }));
  };
  onNeutralFeedback = () => {
    this.setState(prev => ({ ...prev, neutral: prev.neutral + 1 }));
  };
  onBadFeedback = () => {
    this.setState(prev => ({ ...prev, bad: prev.bad + 1 }));
  };
  onTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  onPositivePercentage = () => {
    const { good, neutral, bad } = this.state;
    if (good === 0 && neutral === 0 && bad === 0) {
      return 0;
    }
    return Math.round((good / (good + neutral + bad)) * 100);
  };
  render() {
    return (
      <>
        <Section title={'Please leave feedback'} />
        <FeedbackOptions
          good={this.onGoodFeedback}
          neutral={this.onNeutralFeedback}
          bad={this.onBadFeedback}
        />
        <Section title={'Statistics'} />
        {this.onTotal() === 0 ? (
          <NotificationMessage message={'There is no feedback'} />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.onTotal()}
            positivePercentage={this.onPositivePercentage()}
          />
        )}
      </>
    );
  }
}
