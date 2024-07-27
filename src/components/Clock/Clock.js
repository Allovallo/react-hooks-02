import { useEffect, useState } from 'react';
import styles from './Clock.module.css';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());

  let intervalId = null;

  useEffect(() => {
    intervalId = setInterval(() => {
      console.log('Це інтервал кожні 1000ms ' + Date.now());
      setTime(new Date());
    }, 1000);
  }, []);

  const stop = () => {
    clearInterval(intervalId);
  };

  return (
    <div className={styles.container}>
      <p className={styles.clockface}>
        Поточний час:
        {time.toLocaleTimeString()}
      </p>
      <button type="button" onClick={stop}>
        Зупинити
      </button>
    </div>
  );
}

// class OldClock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Це інтервал кожні 1000ms ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log('Цей метод визивається перед розмонтуванням компоненту');
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <p className={styles.clockface}>
//           Поточний час:
//           {this.state.time.toLocaleTimeString()}
//         </p>
//         <button type="button" onClick={this.stop}>
//           Зупинити
//         </button>
//       </div>
//     );
//   }
// }
