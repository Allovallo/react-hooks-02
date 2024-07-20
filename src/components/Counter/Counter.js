import styles from './Counter.module.css';
import React, { Component } from 'react';

export default class OldCounter extends Component {
  state = {
    counterA: 0,
    counterB: 0,
  };

  handleCounterAIncrement = () => {
    this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
  };

  handleCounterBIncrement = () => {
    this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
  };

  componentDidMount() {
    const { counterA, counterB } = this.state;
    const totalClicks = counterA + counterB;

    document.title = `Всього клікнули ${totalClicks} разів`;
  }

  componentDidUpdate(prevProps, prevState) {
    const { counterA, counterB } = this.state;

    if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
      const totalClicks = counterA + counterB;

      document.title = `Всього клікнули ${totalClicks} разів`;
    }
  }

  render() {
    return (
      <>
        <button className={styles.btn} type="button" onClick={this.handleCounterAIncrement}>
          Кликнули counterA {this.state.counterA} раз
        </button>

        <button className={styles.btn} type="button" onClick={this.handleCounterBIncrement}>
          Кликнули counterB {this.state.counterB} раз
        </button>
      </>
    );
  }
}
