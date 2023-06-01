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

  onLeaveFeedback = name => {
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };
  onTotal = () => {
    return Object.values(this.state).reduce((a, b) => {
      return a + b;
    });
  };
  onPositivePercentage = () => {
    const { good } = this.state;

    return Math.round((good / this.onTotal()) * 100);
  };
  render() {
    const total = this.onTotal();
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>

        <Section title={'Statistics'}>
          {total === 0 ? (
            <NotificationMessage message={'There is no feedback'} />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={this.onPositivePercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
