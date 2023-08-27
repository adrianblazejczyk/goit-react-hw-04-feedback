import { Component } from 'react';
import { WraperApp } from './App.styled';
import {
  Section,
  FeedbackOptions,
  Statistics,
  Notification,
} from '../components';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = evt => {
    const keyName = evt.currentTarget.textContent.toLowerCase();
    this.setState({
      [keyName]: this.state[keyName] + 1,
    });
  };

  render() {
    return (
      <WraperApp>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            callback={this.updateFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title={'Statistics'}>
          {this.state.good + this.state.neutral + this.state.bad ? (
            <Statistics state={this.state}> </Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </WraperApp>
    );
  }
}
