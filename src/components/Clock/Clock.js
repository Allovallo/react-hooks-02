import styles from './Clock.module.css';
import React, { Component } from 'react';

export default class OldClock extends Component {
  state = {
    time: new Date(),
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log('Це інтервал кожні 1000ms ' + Date.now());
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    console.log('Цей метод визивається перед розмонтуванням компоненту');
    this.stop();
  }

  stop = () => {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.clockface}>
          Поточний час:
          {this.state.time.toLocaleTimeString()}
        </p>
        <button type="button" onClick={this.stop}>
          Зупинити
        </button>
      </div>
    );
  }
}
