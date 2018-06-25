import React from "react";
import ReactDOM from "react-dom";
import Login from "./containers/Login";
import registerServiceWorker from "./registerServiceWorker";
import styles from "./styles.module.css";

ReactDOM.render(
  <div className={styles.app}>
    <header>
      <h1>Tanda Social Network</h1>
    </header>
    <section>
      <Login />
    </section>
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
