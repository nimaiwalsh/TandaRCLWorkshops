import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import styles from './styles.module.css';

ReactDOM.render(
  <div className={styles.app}>
    Hello World
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
