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
    if (name === 'good') {
      this.setState(prev => ({ ...prev, good: prev.good + 1 }));
    }
    if (name === 'neutral') {
      this.setState(prev => ({ ...prev, neutral: prev.neutral + 1 }));
    }
    if (name === 'bad') {
      this.setState(prev => ({ ...prev, bad: prev.bad + 1 }));
    }
  };
  onTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  onPositivePercentage = () => {
    const { good } = this.state;

    return Math.round((good / this.onTotal()) * 100);
  };
  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>

        <Section title={'Statistics'}>
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
        </Section>
      </>
    );
  }
}
