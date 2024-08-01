import { useReducer } from 'react';
import styles from './Counter.module.css';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };

    case 'decrement':
      return { ...state, count: state.count - action.payload };

    default: {
      throw new Error(`Unsupportable action type ${action.type}`);
    }
  }
}

function init(initialState) {
  return {
    ...initialState,
    count: initialState.count + 100,
  };
}

export default function Counter() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 }, init);

  return (
    <div className={styles.container}>
      <p className={styles.value}>{state.count}</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        Збільшити
      </button>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        Зменшити
      </button>
    </div>
  );
}

// import styles from './Counter.module.css';
// import { useState, useEffect } from 'react';

// export default function Counter() {
//   const [counterA, setCounterA] = useState(0);
//   const [counterB, setCounterB] = useState(0);

//   const handleCounterAIncrement = () => {
//     setCounterA(prevState => prevState + 1);
//   };

//   const handleCounterBIncrement = () => {
//     setCounterB(prevState => prevState + 1);
//   };

//   useEffect(() => {
//     const totalClicks = counterA + counterB;
//     document.title = `Всього клікнули ${totalClicks} разів`;
//   }, [counterA, counterB]);

//   return (
//     <>
//       <button className={styles.btn} type="button" onClick={handleCounterAIncrement}>
//         Кликнули counterA {counterA} раз
//       </button>

//       <button className={styles.btn} type="button" onClick={handleCounterBIncrement}>
//         Кликнули counterB {counterB} раз
//       </button>
//     </>
//   );
// }

// export default class OldCounter extends Component {
//   state = {
//     counterA: 0,
//     counterB: 0,
//   };

//   handleCounterAIncrement = () => {
//     this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
//   };

//   handleCounterBIncrement = () => {
//     this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
//   };

//   componentDidMount() {
//     const { counterA, counterB } = this.state;
//     const totalClicks = counterA + counterB;

//     document.title = `Всього клікнули ${totalClicks} разів`;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { counterA, counterB } = this.state;

//     if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
//       const totalClicks = counterA + counterB;

//       document.title = `Всього клікнули ${totalClicks} разів`;
//     }
//   }

//   render() {
//     return (
//       <>
//         <button className={styles.btn} type="button" onClick={this.handleCounterAIncrement}>
//           Кликнули counterA {this.state.counterA} раз
//         </button>

//         <button className={styles.btn} type="button" onClick={this.handleCounterBIncrement}>
//           Кликнули counterB {this.state.counterB} раз
//         </button>
//       </>
//     );
//   }
// }
